import { El } from '../../utils/el.js';
import { router } from '../../utils/router.js';

export function Login() {

  function togglePassword() {
    const pwd = document.getElementById("password");
    pwd.type = pwd.type === "password" ? "text" : "password";
  }

  function LoginUser() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const msg = document.getElementById("log-message");

    if (!username || !password) {
      msg.innerText = "لطفاً همه فیلدها را پر کنید";
      msg.classList.add("text-red-600");
      return;
    }

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      msg.innerText = "هنوز ثبت‌نام نکرده‌اید!";
      msg.classList.add("text-red-600");
      return;
    }

    if (savedUser.username !== username || savedUser.password !== password) {
      msg.innerText = "نام کاربری یا رمز اشتباه است!";
      msg.classList.add("text-red-600");
      return;
    }

    msg.innerText = "✔️ ورود موفقیت‌آمیز!";
    msg.classList.remove("text-red-600");
    msg.classList.add("text-green-600");

    setTimeout(() => {
      router.navigate("/"); // ← اینجا صفحه Home شماست
    }, 1500);
  }

  return El({
    element: "div",
    className: "flex flex-col items-center justify-start pt-32 gap-6",

    children: [
      El({ element: "img", src: "src/asset/images/logo.svg", className: "w-20 mb-4" }),

      El({
        element: "div",
        className: "flex flex-col items-center justify-center gap-2 w-90 rtl rounded-xl",

        children: [
          El({ element: "h1", innerText: "Login to Your Account", className: "text-3xl font-extrabold mt-15" }),

          // Username
          El({
            element: "div",
            className: "flex w-full relative mt-10",
            children: [
              El({ element: "img", src: "src/asset/images/input-prefix (3).svg", className: "absolute top-3 left-2" }),
              El({
                element: "input",
                id: "username",
                type: "text",
                placeholder: "username",
                className: "w-full px-8 py-2"
              })
            ]
          }),

          // Password
          El({
            element: "div",
            className: "w-full relative",
            children: [
              El({ element: "img", src: "src/asset/images/lock-fill.svg", className: "absolute top-3 left-2 z-10" }),
              El({
                element: "input",
                id: "password",
                type: "password",
                placeholder: "password",
                className: "w-full px-8 py-2"
              }),

              El({
                element: "img",
                src: "src/asset/images/input-suffix.svg",
                className: "absolute top-3 right-2 z-10",
                eventListener: [{ event: "click", callback: togglePassword }]
              }),

              El({
                element: "span",
                id: "log-message",
                className: "text-red-600 text-sm mt-1 block"
              }),

              El({
                element: "button",
                innerText: "Login",
                className: "w-full bg-[#212529] text-white py-2 rounded-2xl mt-75",
                eventListener: [{ event: "click", callback: LoginUser }]
              })
            ]
          })
        ]
      })
    ]
  });
}
