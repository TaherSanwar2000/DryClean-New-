import { createBox, createTheme, createText, spacing } from "@shopify/restyle";
import { colors } from "./color";
import { textVariants } from "./text-variants";

export const theme = createTheme({
  breakpoints: {},
  colors: colors,
  textVariants: textVariants,
  spacing: {
    "1": 10,
    "2": 20,
    "3": 30,
  },
  borderRadii: {
    rounded: 4,
    roundedXL: 8,
    rounded2XL: 16,
  },
  variants: {
    customView: {
      padding:10,
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    customButton:{
      width: "30%",
      backgroundColor: colors.blue,
      borderRadius: 5,
      marginVertical: '10%',
      padding:15,
    }
  },
});

export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();

export default theme;
