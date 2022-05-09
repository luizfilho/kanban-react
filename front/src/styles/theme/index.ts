import baseStyled, { ThemedStyledInterface } from "styled-components";
export const theme = {
  colors: {
    primaryColor: "#EEEEFD",
    primaryColorText: "#4242DF",
    TODO: {
      background: "#FDF8E9",
      title: "#EFC24D",
    },
    DOING: {
      background: "#EEEEFD",
      title: "#4242DF",
    },
    DONE: {
      background: "#FBEDF6",
      title: "#CE2893",
    },
  },
  breakpoints: {
    XS: "only screen and (max-width: 575px)",
    SM: "only screen and (min-width: 576px) and (max-width: 767px)",
    MD: "only screen and (min-width: 768px) and (max-width: 991px)",
    LG: "only screen and (min-width: 992px) and (max-width: 1199px)",
    XLG: "only screen and (min-width: 1200px)",
  },
};
export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
