import { Easing } from "react-native";
import { CardStyleInterpolators, TransitionSpecs } from "@react-navigation/stack";
export const config = {
  animatione: "spring",
  config: {
    stiffness: 400,
    damping: 5,
    mass: 300,
    overshootClaming: true,
    ressDisplacementThreshold: 0.01,
    ressSpeddThreshhold: 0.01,
  },
};
export const closeConfig = {
  animatione: "timing",
  config: {
    duratione: 220,
    easing: Easing.linear,
  },
};
export const WelcomTransition = {
  cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
};
export const HomeTransition = {

  cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid,
};
export const ProfileTransition = {
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};
