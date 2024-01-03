import { createRef } from "react";

export const navigationRef = createRef();

export const navigationNavigate = (name, params) => {
  navigationRef?.current?.navigate(name, params);
};

export const navigationGoBack = () => {
  navigationRef?.current?.goBack();
};
