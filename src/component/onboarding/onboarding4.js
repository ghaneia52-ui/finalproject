import { El } from "../../utils/el.js";
import { store } from "../../utils/store.js";

export function Onboarding4() {
  return El({
    element: "div",
    children: [
      El({
        element: "img",
        src: "./src/asset/images/W2.jpg",
      }),
      El({
        element: "img",
        src: "./src/asset/images/Your satisfaction is our number one periority.svg",
        className: "w-380p ml-7 mt-10",
      }),
      El({
        element: "img",
        src: "./src/asset/images/_carousel-indicators (3).svg",
        className: "w-380p ml-37 mt-20",
      }),
      El({
        element: "button",
        innerText: "Next",
        className: "absolute w-90 h-10 mt-15 ml-7 bg-black text-white rounded-xl",
        onclick: () => store.setState("onboardingStep", 5),
      }),
    ],
  });
}