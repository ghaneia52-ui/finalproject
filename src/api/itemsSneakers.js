// import { BASE_URL } from "../constants/index.js";

// export async function ItemSneakers() {
//     try {
//         const res = await fetch(`${BASE_URL}/sneaker?page=1&limit=43`, {
//             headers: {
//                 "Content-Type": "application/json",
//                 "Authorization": "7533d562-7811-442e-b234-d71bb2719c91"
//             }
//         });

//         const data = await res.json();

//         if (!Array.isArray(data.data)) {
//             console.error("API ERROR RESPONSE:", data);
//             return [];
//         }

//         return data.data;
//     } catch (error) {
//         console.error("Fetch error:", error);
//         return [];
//     }
// }

// فیلتر برند
// export async function getSneakersByBrand(brand) {
//     const products = await ItemSneakers();

//     if (brand === "All") return products;

//     return products.filter(p => p.brand?.toLowerCase() === brand.toLowerCase());
// }


// import { BASE_URL } from "../constants";

// export async function allSneakers() {
//    const token= localStorage.getItem("token")
//     console.log(token)
//     const nosrat=await fetch(`${BASE_URL}/sneaker?page=1&limit=100`,{
//         headers:{}
//     })
// }
import { BASE_URL } from "../constants/index.js";

// گرفتن تمام کتونی‌ها
export async function allSneakers() {
    try {
        const token = localStorage.getItem("token");

        

        const res = await fetch(`${BASE_URL}/sneaker?page=1&limit=100`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
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


export async function getSneakersByBrand(brand) {
    return [];  
}


export { allSneakers as ItemSneakers };



