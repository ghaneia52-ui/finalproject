// import { El } from "../../utils/el.js";
// import { ItemSneakers } from "../../api/itemsSneakers.js";

// export async function SingleProductPage(params) {

//     const id = params.id;
//     const products = await ItemSneakers();

//     const product = products.find(p => p.id == id);

//     if (!product) {
//         return El({
//             element: "div",
//             className: "p-5 text-red-600",
//             innerText: "Product not found."
//         });
//     }

//     return El({
//         element: "div",
//         className: "p-5",
//         children: [

//             El({
//                 element: "img",
//                 src: product.imageURL || product.image,
//                 className: "w-full h-64 object-cover rounded-xl"
//             }),

//             El({
//                 element: "h1",
//                 innerText: product.name,
//                 className: "text-2xl font-bold mt-4"
//             }),

//             El({
//                 element: "p",
//                 innerText: product.description || "No description available.",
//                 className: "mt-2 text-gray-600"
//             }),

//             El({
//                 element: "p",
//                 innerText: `$${product.price}`,
//                 className: "mt-3 text-xl font-semibold"
//             }),

//             El({
//                 element: "button",
//                 innerText: "Back",
//                 className: "mt-6 bg-black text-white px-5 py-2 rounded-xl",
//                 onclick: () => history.back()
//             })
//         ]
//     });
// }
