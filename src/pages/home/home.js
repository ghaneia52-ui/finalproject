import { El } from "../../utils/el.js";
import { HomeComponent } from "../../component/home/home1.js";

export function HomePage() {

    let username = localStorage.getItem("username");

    return El({
        element: "div",
        children: [
            HomeComponent()
        ]
    });
}
