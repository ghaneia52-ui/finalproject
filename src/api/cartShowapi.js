import { BASE_URL } from "../constants/index.js";


export async function allSneakersId() {
    try {
        const token = localStorage.getItem("token");

        

        const res = await fetch(`${BASE_URL}/sneaker/item/:id`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": Bearer <token>

            }
        });

        const data = await res.json();

        return data.data;

    } catch (error) {
        console.error("Fetch error:", error);
        return [];
    }
}