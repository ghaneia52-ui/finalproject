import { El } from "../../utils/el.js";

export function Sidebar() {
    return El({
        element: "div",
        className: "flex flex-col p-5 bg-white rounded-2xl gap-3",
        children: [

            // HEADER
            El({
                element: "div",
                className: "flex items-center justify-between mb-2",
                children: [
                    El({
                        element: "span",
                        innerText: "Running Sportwear",
                        className: "font-extrabold text-xl text-gray-800 mt-85"
                    }),
                    El({
                        element: "img",
                        src: "/src/asset/images/heart-svgrepo-com (1).svg",
                        className: "h-7 cursor-pointer mt-85"
                    }),
                ]
            }),

            // SOLD + STAR
            El({
                element: "div",
                className: "text-xs text-gray-500 flex gap-5 items-center",
                children: [
                    El({
                        element: "span",
                        innerText: "5,371 sold",
                        className: "bg-blue-100 text-blue-800 h-6 rounded-md px-2 flex items-center"
                    }),
                    El({ 
                        element: "span",
                        innerText: "⭐ 4.3 (5,389 reviews)",
                        className: "text-black font-medium"
                    })
                ]
            }),

            // DESCRIPTION
            El({
                element: "div",
                className: "mt-3",
                children: [
                    El({
                        element: "span",
                        innerText: "Description",
                        className: "font-extrabold text-gray-800"
                    }),
                    El({
                        element: "h2",
                        innerText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, incidunt.",
                        className: "text-gray-600 mt-1 leading-6"
                    }),
                ]
            }),

            // SIZE & COLOR TITLES
            El({
                element: "div",
                className: "mt-6 flex justify-between pr-10",
                children: [
                    El({
                        element: "span",
                        innerText: "Size",
                        className: "font-bold text-gray-700"
                    }),
                    El({
                        element: "span",
                        innerText: "Color",
                        className: "font-bold text-gray-700 mr-25"
                    }),
                ]
            }),

            // SIZE & COLOR OPTIONS — INLINE
            El({
                element: "div",
                className: "flex items-center gap-3 mt-4",
                children: [

                    // --- SIZE OPTIONS ---
                    ...["40", "41", "42", "43"].map(size =>
                        El({
                            element: "span",
                            innerText: size,
                            className:
                                "border rounded-full px-3 py-1 cursor-pointer text-sm " +
                                "hover:bg-black hover:text-white transition"
                        })
                    ),

                    // COLORS INLINE
                    ...["#f59e0b", "#000", "#2563eb", "#dc2626"].map(color =>
                        El({
                            element: "span",
                            className:
                                "border rounded-full w-7 h-7 cursor-pointer",
                            style: `background:${color}`
                        }),
                    ),
                ]
            }),

            
            El({
                element: "div",
                className: "mt-6 flex items-center gap-4",
                children: [
                    El({
                        element: "span",
                        innerText: "Quantity",
                        className: "font-semibold text-gray-700"
                    }),

                    // WRAPPER for + - input
                    El({
                        element: "div",
                        className: "flex items-center border rounded-full overflow-hidden",
                        children: [
                            El({
                                element: "button",
                                innerText: "-",
                                className: "px-3 py-1 "
                            }),
                            El({
                                element: "input",
                                className: "w-12 h-8 text-center  outline-none",
                            }),
                            El({
                                element: "button",
                                innerText: "+",
                                className: "px-3 py-1 "
                            }),
                        ]
                    })
                ]
            }),

            // TOTAL PRICE & ADD TO CART
            El({
                element: "div",
                className: "mt-6 flex justify-between items-center",
                children: [
                    El({
                        element: "span",
                        innerText: "Total price",
                        className: "font-semibold text-lg text-gray-800"
                    }),
                    El({
                        element: "button",
                        innerText: "Add to Cart",
                        className:
                            "bg-black text-white px-5 py-2 rounded-full w-60"
                    })
                ]
            })
        ]
    });
}


