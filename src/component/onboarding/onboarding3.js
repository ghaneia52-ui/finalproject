import { El } from "../../utils/el.js";
import { store } from "../../utils/store.js";

export function Onboarding3() {
  return El({
    element: "div",
    children: [
      El({
        element: "img",
        src: "./src/asset/images/W1.jpg",
      }),
      El({
        element: "img",
        src: "./src/asset/images/We provide high quality products just for you.svg",
        className: "w-380p ml-7 mt-10",
      }),
      El({
        element: "img",
        src: "./src/asset/images/_carousel-indicators.svg",
        className: "w-380p ml-37 mt-20",
      }),
      El({
        element: "button",
        innerText: "Next",
        className: "absolute w-90 h-10 mt-15 ml-7 bg-black text-white rounded-xl",
        onclick: () => store.setState("onboardingStep", 4),
      }),
    ],
  });
}