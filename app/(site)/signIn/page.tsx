import { SignIn } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in with our app",
};

const SignInPage = () => {
  return (
    <div className="p-2 sm:p-4 max-w-[1600px] mx-auto">
      <SignIn />
    </div>
  );
};

export default SignInPage;
