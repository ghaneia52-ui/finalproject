
import { SignUp } from "./component/login/sign-up.js";
import { CartPage } from "./pages/cart/cart.js";
import { CheckoutPage } from "./pages/checkout/checkout.js";
import { HomePage } from "./pages/home/home.js";
import { LoginFormPage } from "./pages/login/loginform.js";
import { OnboardingPage } from "./pages/onboarding/onboarding.js";
import { SearchPage } from "./pages/search/search.js";
import { SingleProductPage } from "./pages/single-product/single-product.js";

import "./style.css";

import { router } from "./utils/router.js";

// ساخت صفحه
const app = document.getElementById("app");
const pageContainer = document.createElement("div");
app.appendChild(pageContainer);

// ----------- ROUTES ------------
router.addRoute("/", HomePage);
router.addRoute("/login", LoginFormPage);
router.addRoute("/onboarding", OnboardingPage);
router.addRoute("/cart", CartPage);
router.addRoute("/checkout", CheckoutPage);
router.addRoute("/search", SearchPage);
router.addRoute("/product", SingleProductPage);
router.addRoute("/signup",SignUp)


// اجرای روتر
router.init(pageContainer);



