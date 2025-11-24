import { El } from "../../utils/el.js";
import { ProductDetails } from "../cart/productDetails.js";

export function HomeComponent2(products = []) {
    const container = El({
        element: "div",
        className: "px-5 mt-6"
    });

    // وقتی دکمه Back زده شد → دوباره لیست را نشان بده
    window.addEventListener("backToList", () => {
        container.innerHTML = "";
        container.appendChild(renderList(products));
    });

    function renderList(list) {
        return El({
            element: "div",
            className: "grid grid-cols-2 gap-4",

            children: list.map(item =>
                El({
                    element: "div",
                    className: "border rounded-xl p-3 shadow hover:shadow-lg cursor-pointer",

                    onclick: () => {
                        container.innerHTML = "";
                        container.appendChild(ProductDetails(item));
                    },

                    children: [
                        El({
                            element: "img",
                            src: item.imageURL,
                            className: "w-full h-32 object-cover rounded-md"
                        }),
                        El({
                            element: "h2",
                            innerText: item.name,
                            className: "font-semibold mt-2 text-sm"
                        }),
                        El({
                            element: "p",
                            innerText: `$${item.price}`,
                            className: "text-gray-600 text-sm"
                        })
                    ]
                })
            )
        });
    }

    // صفحهٔ لیست را اولین‌بار نشان بده
    container.appendChild(renderList(products));
    
    return container;
}








