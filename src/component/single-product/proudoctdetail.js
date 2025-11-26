import { El } from "../../utils/el.js";
import { BASE_URL } from "../../constants/index.js";

export async function SingleProductPage({ id }) {
    try {
        const token = localStorage.getItem("token");
        

        const res = await fetch(`${BASE_URL}/sneaker/item/${id}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        });

        const item = await res.json();

        return El("div", { className: "p-5" }, [

            El("img", {
                src: item.imageURL || item.images?.[0] || "/src/asset/images/placeholder.png",
                className: "w-full h-60 object-cover rounded-xl mb-4"
            }),

            El("h1", { className: "text-2xl font-semibold mb-2" }, item.title || item.name),

            El("p", { className: "text-lg text-green-600 mb-3" },
                `Price: $${item.price ?? "-"}`),

            El("p", { className: "text-gray-700 leading-6" },
                item.description || "No description available")
        ]);

    } catch (err) {
        console.error(err);
        return El("div", { className: "p-5 text-red-600" }, "Product not found or server error");
    }
}




