import { El } from "../../utils/el.js";
import { HomeComponent } from "../../component/home/home1.js";
import { HomeComponent2 } from "../../component/home/home2.js";
import { ItemSneakers } from "../../api/itemsSneakers.js";

export async function HomePage() {
    const products = await ItemSneakers();

    return El({
        element: "div",
        children: [
            HomeComponent(),
            HomeComponent2(products) // کانتینر لیست محصولات
        ]
    });
}


