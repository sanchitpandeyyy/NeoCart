import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

export function Dialoug() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Signin</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] w-full px-4 py-6 md:px-10 md:py-8">
        <DialogHeader>
          <DialogTitle className="text-lg md:text-xl font-semibold">
            Sign In / Sign Up
          </DialogTitle>
          <DialogDescription className="text-sm md:text-base text-gray-600">
            Log in to access your account or sign up to create a new one and get
            started.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 flex flex-col gap-4">
          <div className="flex justify-center md:justify-start">
            <LoginLink className="bg-transparent border-2 border-primary text-primary px-6 py-2 rounded-md hover:bg-primary/10 transition duration-300 w-full md:w-auto">
              Sign in
            </LoginLink>
          </div>
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-600 mt-4">
              Don't have an account?{" "}
              <span className="text-primary cursor-pointer">
                <RegisterLink>Sign up</RegisterLink>
              </span>
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
