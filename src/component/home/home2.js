import { El } from "/src/utils/el.js";


export function HomeComponent2(products = []) {

    const container = El({
        element: "div",
        className: "px-5 mt-6"
    });

    function renderList(list) {
        list = Array.isArray(list) ? list : [];

        return El({
            element: "div",
            className: "grid grid-cols-2 gap-4",
            children: list.map(item =>
                El({
                    element: "div",
                    className: " rounded-xl p-3 shadow hover:shadow-lg ",
                    
                    onclick: () => {},
                    children: [
                        El({
                            element: "img",
                            src: item.imageURL || item.image || "/src/asset/images/placeholder.png",
                            className: "w-full h-32 object-cover rounded-md"
                        }),
                        El({
                            element: "h2",
                            innerText: item.name || "No Name",
                            className: "font-semibold mt-2 text-sm"
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











