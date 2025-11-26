import { El } from "../../utils/el.js";
import { router } from "../../utils/router.js";

export function HeaderProduct() {
    return El({
        element: "div",
        className: "header-product",
        style: "padding: 10px;",
        children: [
            El({
                element: "img",
                src: "src/asset/images/arrow-left-short (2).svg",
                style: "width: 32px; cursor: pointer;",
                onclick: () => {
                    router.navigate("/home");     // ← برگشت به صفحه home
                }
            })
        ]
    });
}

