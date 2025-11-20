import { El } from "../../utils/el.js";
import { Onboarding1 } from "../../component/onboarding/onboarding1.js";
import { Onboarding2 } from "../../component/onboarding/onboarding2.js";

export function OnboardingPage() {
  const container = El({
    element: "div",
  });

  // صفحه اول
  container.appendChild(Onboarding1());

  // بعد از ۵ ثانیه → صفحه دوم
  setTimeout(() => {
    container.innerHTML = "";
    container.appendChild(Onboarding2());
  }, 5000);

  return container;
}
