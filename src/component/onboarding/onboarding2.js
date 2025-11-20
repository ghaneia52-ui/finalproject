import { El } from "../../utils/el.js";

export function Onboarding2() {
  return El({
    element: "div",
    className:
      "relative w-full h-screen overflow-hidden flex items-center justify-center",
    children: [
      El({
        element: "img",
        src: "/src/asset/images/WallpaperDog-205346101.jpg",
        className: "w-full h-full object-cover",
      }),
      El({
        element: "div",
        className: "absolute inset-0 bg-black/40",
      }),
      El({
        element: "img",
        src: "/src/asset/images/Group 1.svg",
        className: "absolute top-150 left-15 w-40",
      }),
      El({
        element: "img",
        src: "/src/asset/images/Shoea.svg",
        className: "absolute top-165 left-15 w-60",
      }),
      El({
        element: "img",
        src: "/src/asset/images/The best sneakers & shoes e-commerse app of the century for your fashion needs! (1).svg",
        className:"absolute top-190 left-14 w-330 text-center",
      }),
    ],
  });
}

