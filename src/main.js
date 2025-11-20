 import { CartPage } from "./pages/cart/cart";
import { CheckoutPage } from "./pages/checkout/checkout";
// import { HomePage } from "/src/pages/home/home.js";
// import { LoginPage } from "./pages/login/login";
import { OnboardingPage } from "./pages/onboarding/onboarding.js";
import { SearchPage } from "./pages/search/search";
import { SingleProductPage } from "./pages/single-product/single-product";

import "./style.css";

import { router } from "./utils/router";
const app = document.getElementById("app");
const pageContainer = document.createElement("div");
app.appendChild(pageContainer);

// router.addRoute("/", HomePage);
// router.addRoute("/cart", CartPage); 
// router.addRoute("/checkout", CheckoutPage);
// router.addRoute("/login", LoginPage);
 router.addRoute("/onboarding", OnboardingPage);
// router.addRoute("/search", SearchPage);
// router.addRoute("/single-product", SingleProductPage);
//  router.init(pageContainer);
// router.addRoute("/cart", CartPage);















// router.addRoute("/checkout", CheckoutPage);
// router.addRoute("/login", LoginPage);
router.addRoute("/onboarding", OnboardingPage);
// router.addRoute("/search", SearchPage);
// router.addRoute("/single-product", SingleProductPage);


router.init(pageContainer);