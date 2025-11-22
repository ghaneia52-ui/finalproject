// کامپوننت SignUp
import { El } from '../../utils/el.js';

export function SignUp() {

  function togglePassword() {
    const pwd = document.getElementById("password");
    pwd.type = pwd.type === "password" ? "text" : "password";
  }

  function SignUpUser() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const msg = document.getElementById('log-message');

    if (!user || !pass) {
      msg.innerText = "Please fill out all fields";
      msg.classList.add("text-red-600");
      return;
    }

    msg.innerText = "✔️ Sign up successful!";
    msg.classList.remove("text-red-600");
    msg.classList.add("text-green-600");
  }

  return El({
    element: "div",
    className: " flex flex-col items-center justify-start pt-32 gap-6",

    children: [

      // Logo
      El({
        element: "img",
        src: "src/asset/images/logo.svg",
        className: "w-20 mb-4"
      }),

      // Card Box
      El({
        element: 'div',
        className:
          'flex flex-col items-center justify-center gap-2 w-90 rtl  rounded-xl ',

        children: [
          El({
            element: 'h1',
            innerText: 'Signup to Your Account',
            className:
              'text-3xl  font-extrabold mt-15',
          }),

          // Username field
          El({
            element: 'div',
            className:
              'flex w-full relative mt-10',
            children: [
              El({
                element: 'img',
                className: 'absolute top-3 left-2 ',
                src: 'src/asset/images/input-prefix (3).svg',
              }),
              El({
                element: 'input',
                className: ' w-full px-8 py-2 ',
                placeholder: 'username',
                id: 'username',
                type: 'text',
              }),
            ],
          }),

          // Password field
          El({
            element: 'div',
            className:
              'w-full relative ',
            children: [
              El({
                element: 'img',
                className: 'absolute top-3 left-2 z-10',
                src: 'src/asset/images/lock-fill.svg',
              }),
              El({
                element: 'input',
                className: ' w-full px-8 py-2',
                placeholder: 'password',
                id: 'password',
                type: 'password',
              }),

              // Show / Hide password
              El({
                element: 'img',
                className:
                  'absolute top-3 right-2 z-10',
                src: 'src/asset/images/input-suffix.svg',
                eventListener: [
                  {
                    event: 'click',
                    callback: togglePassword,
                  },
                ],
              }),

              // Message
              El({
                element: 'span',
                className: 'text-red-600 text-sm mt-1 block',
                innerText: '',
                id: 'log-message',
              }),
              El({
                  element: 'button',
                  innerText: 'sign up',
                  className:"bg flex items-center justify-center ml-36 mt-5"
              }),

              // Sign Up button
              El({
                element: 'button',
                innerText: 'sign up',
                className:
                  'w-full bg-[#212529] text-white py-2 rounded-2xl mt-70',
                eventListener: [
                  {
                    event: 'click',
                    callback: SignUpUser,
                  },
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}