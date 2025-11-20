import { El } from "../../utils/el.js";

export function Onboarding1() {
  return El({
    element: "div",
    children: [
      El({
        element: "img",
        src: "/src/asset/images/Group 2 (3).svg",
        className: "ml-25 mt-100",
      }),
      El({
        element: "img",
        src: "/src/asset/images/spinner-atom.svg",
        className: "mt-85 ml-50",
      }),
    ],
  });
}