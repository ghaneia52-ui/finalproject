import { BASE_URL } from "../constants/index.js";

export async function ItemSneakers() {
    try {
        const res = await fetch(`${BASE_URL}/sneaker?page=1&limit=100`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "bafb0f72-6f14-4395-b755-4d621030e552"
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


