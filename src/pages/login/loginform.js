import { El } from "../../utils/el.js";
import { SignUp } from "../../component/login/sign-up.js";
import { Login } from "../../component/login/login.js";

export function LoginFormPage(type = "login") {
  return El({
    element: "div",
    className: "login-wrapper",
    children: [
      type === "signup" ? SignUp() : Login()
    ]
  });
}
