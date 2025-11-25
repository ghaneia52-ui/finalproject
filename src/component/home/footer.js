import { El } from "../../utils/el.js";

export function Footer() {
    return El({
        element: "div",
        children: [
            
            El({
                element: "div",
                className: "ml-25 mt-120", 
                innerText: "Infinity Scrolling for paginatio"
            }),
            El({
                element: "div",
                className: "flex gap-14 justify-center mt-15",
                children: [
                    El({ element: "img", src: "/src/asset/images/Group 1 (1).svg" }),
                    El({ element: "img", src: "/src/asset/images/Group 2 (4).svg" }),
                    El({ element: "img", src: "/src/asset/images/Group 3.svg" }),
                    El({ element: "img", src: "/src/asset/images/Group 4.svg" }),
                    El({ element: "img", src: "/src/asset/images/Group 5.svg" })
                ]
            })
        ]
    });
}

