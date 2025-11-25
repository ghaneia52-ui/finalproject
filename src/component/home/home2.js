import { El } from "../../utils/el.js";
import { ProductDetails } from "../cart/productDetails.js";

export function HomeComponent2(products = []) {

    const container = El({
        element: "div",
        className: "px-5 mt-6"
    });

    // دوباره نمایش لیست پس از Back
    window.addEventListener("backToList", () => {
        container.innerHTML = "";
        container.appendChild(renderList(products));
    });

    function renderList(list) {
        list = Array.isArray(list) ? list : [];

        return El({
            element: "div",
            className: "grid grid-cols-2 gap-4",

            children: list.map(item =>
                El({
                    element: "div",
                    className: "border rounded-xl p-3 shadow hover:shadow-lg cursor-pointer",

                    onclick: () => {
                        container.innerHTML = "";
                        container.appendChild(ProductDetails(item, container, products));
                    },

                    children: [
                        El({
                            element: "img",
                            src: item.imageURL || item.image || "src/asset/images/placeholder.png",
                            className: "w-full h-32 object-cover rounded-md"
                        }),

                        El({
                            element: "h2",
                            innerText: item.name || "No Name",
                            className: "font-semibold mt-2 text-sm"
                        }),

                        El({
                            element: "div",
                            className: "flex justify-between items-center text-xs text-gray-500 mt-1",
                            children: [
                                El({ element: "span", innerText: "5,371 sold" }),
                                El({ element: "span", innerText: "⭐ 4.3 (5,389 reviews)" })
                            ]
                        }),

                        El({
                            element: "p",
                            innerText: `$${item.price ?? "-"}`,
                            className: "text-gray-600 text-sm mt-1"
                        })
                    ]
                })
            )
        });
    }

    container.appendChild(renderList(products));

    return container;
}









