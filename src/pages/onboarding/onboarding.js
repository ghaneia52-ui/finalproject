import { El } from "../../utils/el.js";
import { store } from "../../utils/store.js";
import { Onboarding1 } from "../../component/onboarding/onboarding1.js";
import { Onboarding2 } from "../../component/onboarding/onboarding2.js";
import { Onboarding3 } from "../../component/onboarding/onboarding3.js";
import { Onboarding4 } from "../../component/onboarding/onboarding4.js";
import { Onboarding5 } from "../../component/onboarding/onboarding5.js";
import { SignUp } from "../../component/login/sign-up.js";

export function OnboardingPage() {
  const container = El({ element: "div" });

  function render(step) {
    container.innerHTML = "";

    switch (step) {
      case 1:
        container.appendChild(Onboarding1());
        break;

      case 2:
        container.appendChild(Onboarding2());
        break;

      case 3:
        container.appendChild(Onboarding3());
        break;

      case 4:
        container.appendChild(Onboarding4());
        break;

      case 5:
        container.appendChild(Onboarding5());
        break;

      case 6:
        container.appendChild(SignUp());
        break;
    }
  }

  store.subscribe("onboardingStep", render);

  render(store.getState("onboardingStep"));

  setTimeout(() => store.setState("onboardingStep", 2), 2000);
  setTimeout(() => store.setState("onboardingStep", 3), 4000);

  return container;
}

