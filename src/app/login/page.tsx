import React from "react";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

const Login = () => {
  return (
    <div>
      <LoginLink>Sign in</LoginLink>
      <RegisterLink>Sign up</RegisterLink>
    </div>
  );
};

export default Login;
