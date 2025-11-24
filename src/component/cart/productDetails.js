import { El } from "../../utils/el.js";

export function ProductDetails(product) {
    return El({
        element: "div",
        className: "p-5",

        children: [
            El({
                element: "img",
                src: product.imageURL,
                className: "w-full h-64 object-cover rounded-xl"
            }),

            El({
                element: "h1",
                innerText: product.name,
                className: "text-2xl font-bold mt-4"
            }),

            El({
                element: "p",
                innerText: `$${product.price}`,
                className: "text-gray-700 text-xl mt-2"
            }),

            El({
                element: "p",
                innerText: `Brand: ${product.brand}`,
                className: "text-gray-600 mt-2"
            }),

            El({
                element: "p",
                innerText: product.description || "No description available",
                className: "mt-3 text-sm text-gray-600"
            }),

            El({
                element: "button",
                innerText: "Back",
                className: "mt-5 bg-black text-white px-5 py-2 rounded-xl",
                onclick: () => {
                    const event = new CustomEvent("backToList");
                    window.dispatchEvent(event);
                }
            })
        ]
    });
}
