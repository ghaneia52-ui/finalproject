import { BASE_URL } from "../constants/index.js";

export async function ItemSneakers() {
    try {
        const res = await fetch(`${BASE_URL}/sneaker?page=1&limit=43`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "4adfc1dd-1a23-4abb-ac32-692cb800f66e"
            }
        });

        const data = await res.json();

        if (!Array.isArray(data.data)) {
            console.error("API ERROR RESPONSE:", data);
            return [];
        }

        return data.data;
    } catch (error) {
        console.error("Fetch error:", error);
        return [];
    }
}

// فیلتر برند
export async function getSneakersByBrand(brand) {
    const products = await ItemSneakers();

    if (brand === "All") return products;

    return products.filter(p => p.brand?.toLowerCase() === brand.toLowerCase());
}


