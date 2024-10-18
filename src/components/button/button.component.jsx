import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "./button.style.jsx";

export const BUTTON_TYPES_CLASESS = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPES_CLASESS.base) =>
  ({
    [BUTTON_TYPES_CLASESS.base]: BaseButton,
    [BUTTON_TYPES_CLASESS.google]: GoogleSignInButton,
    [BUTTON_TYPES_CLASESS.inverted]: InvertedButton,
  }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return (
    <>
      <CustomButton {...otherProps}>{children}</CustomButton>
    </>
  );
};

export default Button;
