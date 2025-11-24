import { El } from "../../utils/el.js";

export function HomeComponent() {
    let username = localStorage.getItem('username');

    return El({
        element: "div",
        className: "w-full",

        children: [

            // بخش Good Morning + آیکون‌ها
            El({
                element: "div",
                className: "flex justify-between items-start px-5 mt-5",

                children: [
                    El({
                        element: "h1",
                        innerText: `Good Morning 👋 ${username}`,
                        className: "text-left font-semibold text-xl"
                    }),

                    El({
                        element: "div",
                        className: "flex gap-4",

                        children: [
                            El({
                                element: "img",
                                src: "src/asset/images/Vector (2).svg",
                                className: "mt-2"
                            }),
                            El({
                                element: "img",
                                src: "/src/asset/images/heart.svg",
                                className: "mt-2"
                            })
                        ]
                    })
                ]
            }),

            // سرچ بار
            El({
                element: "div",
                className: "w-full px-5 mt-6",
                children: [
                    El({
                        element: "input",
                        placeholder: "🔍 Search...",
                        className: "rounded-xl w-full px-4 py-2 bg-gray-100 outline-none"
                    })
                ]
            }),

            El({
                element: "div",
                className: "flex justify-between items-center px-5 mt-6",

                children: [
                    El({
                        element: "h1",
                        innerText: "Most Popular",
                        className: "font-extrabold text-lg"
                    }),
                    El({
                        element: "h2",
                        innerText: "See All",
                        className: "text-black font-extrabold  text-sm"
                    })
                ]
            }),

            El({
                element: "div",
                className: "flex gap-3 px-5 mt-4 overflow-x-auto whitespace-nowrap",

                children: [
                    El({
                        element: "button",
                        innerText: "All",
                        className: "bg-black text-white px-4 py-2 rounded-full whitespace-nowrap w-20"
                    }),
                    El({
                        element: "button",
                        innerText: "Nike",
                        className: "border px-4 py-2 rounded-full bg-gray-100 whitespace-nowrap"
                    }),
                    El({
                        element: "button",
                        innerText: "Adidas",
                        className: "border px-4 py-2 rounded-full bg-gray-100 whitespace-nowrap"
                    }),
                    El({
                        element: "button",
                        innerText: "Puma",
                        className: "border px-4 py-2 rounded-full bg-gray-100 whitespace-nowrap"
                    }),
                    El({
                        element: "button",
                        innerText: "Asics",
                        className: "border px-4 py-2 rounded-full bg-gray-100 whitespace-nowrap"
                    }),
                    El({
                        element: "button",
                        innerText: "HUSHPUPPIES",
                        className: "border px-4 py-2 rounded-full bg-gray-100 whitespace-nowrap"
                    }),
                    El({
                        element: "button",
                        innerText: "CONVERSE",
                        className: "border px-4 py-2 rounded-full bg-gray-100 whitespace-nowrap"
                    }),
                    El({
                        element: "button",
                        innerText: "NEW BALANCE",
                        className: "border px-4 py-2 rounded-full bg-gray-100 whitespace-nowrap"
                    }),
                     El({
                        element: "button",
                        innerText: "REEBOK",
                        className: "border px-4 py-2 rounded-full bg-gray-100 whitespace-nowrap"
                    }),
                    
                ]
            })
        ]
    });
}




