import { El } from "../../utils/el.js";
import { getSneakersByBrand } from "../../api/itemsSneakers.js";
import { HomeComponent2 } from "./home2.js";

export function HomeComponent() {

    let username = localStorage.getItem('username') || "Guest";

    // محل نمایش محصولات
    const productBox = El({ element: "div", className: "" });

    // بارگذاری اولیه
    loadProducts("All");

    async function loadProducts(brand) {
        const products = await getSneakersByBrand(brand);
        productBox.innerHTML = "";
        productBox.appendChild(HomeComponent2(products));
    }

    return El({
        element: "div",
        className: "w-full max-w-7xl mx-auto px-5", // container مرکزی
        children: [

            // HEADER
            El({
                element: "div",
                className: "flex justify-between items-center mt-5",
                children: [
                    // سمت چپ: متن‌ها
                    El({
                        element: "div",
                        className: "flex flex-col",
                        children: [
                            El({ element: "h1", innerText: "Good Morning 👋", className: "text-left font-semibold text-xl" }),
                            El({ element: "h1", innerText: username, className: "text-left font-semibold text-xl" })
                        ]
                    }),
                    // سمت راست: آیکون‌ها
                    El({
                        element: "div",
                        className: "flex gap-4",
                        children: [
                            El({ element: "img", src: "src/asset/images/Vector (2).svg", className: "" }),
                            El({ element: "img", src: "/src/asset/images/heart.svg", className: "" })
                        ]
                    })
                ]
            }),

            // SEARCH
            El({
                element: "div",
                className: "w-full mt-6",
                children: [
                    El({
                        element: "input",
                        placeholder: "🔍 Search...",
                        className: "rounded-xl w-full px-4 py-2 bg-gray-100 outline-none"
                    })
                ]
            }),

            // TITLE
            El({
                element: "div",
                className: "flex justify-between items-center mt-6",
                children: [
                    El({ element: "h1", innerText: "Most Popular", className: "font-extrabold text-lg" }),
                    El({ element: "h2", innerText: "See All", className: "text-black font-extrabold text-sm" })
                ]
            }),

            // BUTTON LIST
            El({
                element: "div",
                className: "flex gap-3 mt-4 overflow-x-auto whitespace-nowrap",
                children: ["All","Nike","Adidas","Puma","Asics","HUSHPUPPIES","CONVERSE","NEW BALANCE","REEBOK"]
                    .map(brand => El({
                        element: "button",
                        innerText: brand,
                        className: brand === "All" ? "bg-black text-white px-4 py-2 rounded-full whitespace-nowrap w-20" : "border px-4 py-2 rounded-full bg-gray-100 whitespace-nowrap",
                        onclick: () => loadProducts(brand)
                    }))
            }),

            // نمایش محصولات
            productBox
        ]
    });
}





