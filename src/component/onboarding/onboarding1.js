import { El } from "../../utils/el.js";

export function Onboarding1() {
  return El({
    element: "div",
    className: "flex items-center justify-center mt-[101px]",
    children: [
      El({
        element: "img",
        src: "/src/asset/images/Group 2 (3).svg",
        className:"ml-[50px]"
      }),
       El({
        element: "img",
        src: "/src/asset/images/spinner-atom.svg",
        className:"mt-[731px] mr-[190px]"
      }),
      
    ],
  });
}
