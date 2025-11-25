import { El } from "../../utils/el.js";

export function ProductDetails(product = {}, container, products = []) {

    if (container) {
        container.innerHTML = "";
    }

    const imgSrc = product.imageURL || product.image || "src/asset/images/placeholder.png";
    const name = product.name || "No Name";
    const price = product.price != null ? `$${product.price}` : "-";
    const brand = product.brand || "Unknown";
    const description = product.description || "No description available";

    return El({
        element: "div",
        className: "p-5",
        children: [
            El({
                element: "img",
                src: imgSrc,
                className: "w-full h-64 object-cover rounded-xl"
            }),

            El({
                element: "h1",
                innerText: name,
                className: "text-2xl font-bold mt-4"
            }),

            El({
                element: "div",
                className: "flex gap-2 items-center text-xs text-gray-500 mt-1",
                children: [
                    El({ element: "span", innerText: "5,371 sold" }),
                    El({ element: "span", innerText: "⭐ 4.3 (5,389 reviews)" })
                ]
            }),

            El({
                element: "p",
                innerText: description,
                className: "mt-2 text-sm text-gray-600"
            }),

            El({
                element: "p",
                innerText: price,
                className: "text-gray-700 text-xl mt-2"
            }),

            El({
                element: "p",
                innerText: `Brand: ${brand}`,
                className: "text-gray-600 mt-2"
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






