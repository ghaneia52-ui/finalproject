import { El } from "../../utils/el.js";
import { store } from "../../utils/store.js";

export function Onboarding5() {
  return El({
    element: "div",
    children: [
      El({
        element: "img",
        src: "./src/asset/images/W3.jpg",
      }),
      El({
        element: "img",
        src: "./src/asset/images/Let’s fulfill your fashion needs with shoearight now! (1).svg",
        className: "w-380p ml-7 mt-8",
      }),
      El({
        element: "img",
        src: "./src/asset/images/_carousel-indicators (4).svg",
        className: "w-380p ml-37 mt-17",
      }),
      El({
        element: "button",
        innerText: "Get started",
        className: "absolute w-90 h-10 mt-13 ml-7 bg-black text-white rounded-xl",
        onclick: () => store.setState("onboardingStep", 6),
      }),
    ],
  });
}