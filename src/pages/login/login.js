import { El } from "../../utils/el.js";
import { SignUp } from "../../component/login/sign-up.js";

export function LoginPage() {
  return El({
    element: "div",
    className: "login-wrapper",
    children: [
      SignUp()
    ]
  });
}

