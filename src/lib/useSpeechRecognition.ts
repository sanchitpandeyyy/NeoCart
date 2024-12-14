/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState, useCallback } from "react";

export function useSpeechRecognition() {
  const [transcript, setTranscript] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [productJSON, setProductJSON] = useState<any>(null);
  const [recognition, setRecognition] = useState<any>(null);

  const processSpeech = useCallback(async (speechText: string) => {
    try {
      console.log("speechText", speechText);
      const response = await fetch("/api/process-speech", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nepaliSpeech: speechText }),
      });
      if (!response.ok) {
        console.log("res is not kk");
        throw new Error("Failed to process speech");
      }
      const data = await response.json();
      setProductJSON(data);
      return data;
    } catch (err) {
      console.error("Processing error:", err);
      throw err;
    }
  }, []);

  const startSpeechRecognition = useCallback(() => {
    if ("webkitSpeechRecognition" in window) {
      const newRecognition = new (window as any).webkitSpeechRecognition();
      newRecognition.continuous = true; // Enable continuous listening
      newRecognition.interimResults = true; // Enable interim results
      newRecognition.lang = "ne-NP"; // Nepali language code

      newRecognition.onstart = () => {
        setIsListening(true);
        setProductJSON(null);
        setTranscript(""); // Clear previous transcript
      };

      newRecognition.onresult = (event: any) => {
        let finalTranscript = "";
        for (let i = 0; i < event.results.length; i++) {
          finalTranscript += event.results[i][0].transcript;
        }
        setTranscript(finalTranscript);
      };

      newRecognition.onerror = (event: any) => {
        console.error("Speech recognition error:", event.error);
      };

      newRecognition.onend = () => {
        setIsListening(false);
      };

      setRecognition(newRecognition);
      newRecognition.start();
    } else {
      console.error("Speech recognition not supported");
    }
  }, []);

  const stopSpeechRecognition = useCallback(async () => {
    if (recognition) {
      recognition.stop();
      setIsListening(false);
      // Process the final transcript after stopping
      if (transcript) {
        try {
          await processSpeech(transcript);
        } catch (err) {
          console.error("Error processing speech:", err);
        }
      }
    }
  }, [recognition, transcript, processSpeech]);

  return {
    transcript,
    isListening,
    productJSON,
    startSpeechRecognition,
    stopSpeechRecognition,
  };
}
