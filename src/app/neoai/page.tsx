// Frontend Component (App.tsx)
"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import AIResopnse, {
  DataType,
  ProductType,
} from "@/components/custom/AIResopnse";
import { Loader, Upload } from "lucide-react";
import ProductCards, {
  Product,
} from "@/components/custom/productCard/cardById";

// Types
interface Message {
  id: string;
  content: string;
  role: "user" | "assistant" | "system" | "data";
}

interface ChatResponse {
  role: string;
  content: string;
  id: string;
  error?: string;
}

const MessageSkeleton = () => (
  <div className="flex gap-3 p-4">
    <Skeleton className="h-8 w-8 rounded-full" />
    <div className="space-y-2">
      <Skeleton className="h-4 w-[250px]" />
      <Skeleton className="h-4 w-[200px]" />
    </div>
  </div>
);

const App = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const scrollToBottom = () => {
    const scrollArea = document.querySelector("#scroll-area");
    if (scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollHeight;
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    setError(null);
  };

  const submitPrompt = async (prompt: string) => {
    if (!prompt.trim()) return;

    setIsLoading(true);
    setError(null);

    const userMsg: Message = {
      id: crypto.randomUUID(),
      content: prompt,
      role: "user",
    };

    try {
      setMessages((prev) => [...prev, userMsg]);
      setInput("");

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, userMsg],
        }),
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.statusText}`);
      }

      const data: ChatResponse = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      const aiMsg: Message = {
        id: data.id || crypto.randomUUID(),
        content: data.content,
        role: "assistant",
      };

      setMessages((prev) => [...prev, aiMsg]);
      setTimeout(scrollToBottom, 100);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unexpected error occurred"
      );
      console.error("Chat error:", err);
    } finally {
      setIsLoading(false);
    }
  };
  const [products, setProducts] = useState<ProductType[] | []>([]);
  const updateProducts = (p: ProductType[] | []) => {
    setProducts(p);
  };

  return (
    <div className="m-auto relative max-w-[1400px] h-[600px] my-10 border shadow-md rounded-md">
      <div className={`${products.length && "grid grid-cols-2"}`}>
        <div className={`p-6 `}>
          <div className="w-full h-full flex flex-col relative">
            {messages.length === 0 ? (
              <div className="w-full h-[550px] flex text-center justify-center items-center text-muted-foreground">
                Start your conversation now. Ask me anything!
              </div>
            ) : (
              <ScrollArea
                id="scroll-area"
                className="flex-grow pr-4 pb-20 h-[550px] scroll-area"
              >
                <div className="flex flex-col gap-4">
                  {messages.map((message: Message) => (
                    <div
                      key={message.id}
                      className={cn("flex gap-3 p-4", {
                        "justify-end": message.role === "user",
                      })}
                    >
                      <div
                        className={cn(
                          "text-sm p-3 rounded-lg",
                          message.role === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted"
                        )}
                      >
                        {message.role === "user" ? (
                          message.content
                        ) : (
                          <AIResopnse
                            updateProducts={updateProducts}
                            data={message.content as unknown as DataType}
                          />
                        )}
                      </div>
                    </div>
                  ))}
                  {isLoading && <MessageSkeleton />}
                </div>
              </ScrollArea>
            )}
            {error && (
              <div className="text-red-500 text-sm p-2 text-center">
                {error}
              </div>
            )}
            <div className="">
              <form
                className="flex w-full px-4 gap-4 absolute bottom-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  submitPrompt(input);
                }}
              >
                <Input
                  className="flex-grow  bg-white"
                  placeholder="Ask me a question..."
                  value={input}
                  onChange={handleInputChange}
                  disabled={isLoading}
                />
                <Button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="px-6"
                >
                  {isLoading ? <Loader className="animate-spin" /> : <Upload />}
                </Button>
              </form>
            </div>
          </div>
        </div>
        <ProductCards data={products as Product[]} />
      </div>
    </div>
  );
};

export default App;
