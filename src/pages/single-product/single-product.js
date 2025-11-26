import { El } from "../../utils/el.js";
import { SingleProductPage as SingleProductDetail } from "../../component/single-product/proudoctdetail.js";
import { HeaderProduct } from "../../component/single-product/headerproduct.js";
import { Sidebar } from "../../component/single-product/sidebar.js";

export function SingleProductPage(item) {

    return El({
        element: "div",
        children: [
            
            HeaderProduct(),                 // ← اینجا فراخوانی هدر
            SingleProductDetail({ item }),  // ← صفحه محصول
            Sidebar(),
        ]
    });

}
