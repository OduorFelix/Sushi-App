import { createTheme, createText, createBox } from "@shopify/restyle";

const theme = createTheme({
    colors: {
        title: "#181d2d",
        body: "#181d2d",
        white: "#FFFFFFFF",
        black: "#FF000000",
        black2: "#1f2538",
        grey: "#f7f7f7",
        grey1: "#e6e6e6",
        grey2: "#cccccc",
        grey3: "#999999",
        LightGrey: "#FAFAFA",
        dark: "#0C0D34",
        text: "#181d2d",
        bg1: "#f2f3f4",

  },
    spacing: {
        spp: 2,
        sp: 14,
        s: 8,
        m: 16,
        xm: 22,
        l: 24,
       xl: 40,
      xxl: 230,
      negative: -40,
    },
    borderRadii: {
        p: 0,
        s: 4,
        m: 10,
        xm: 22,
        l: 25,
        xl: 75,
        negative: -15,
    },
    fontSizes: {
        base: 14,
        h1: 28,
        h2: 24,
        h3: 18,
        h4: 16,
        h5: 14,
        h6: 12,
    },
    lineHeights: {
        h1: 34,
        h2: 29,
        h3: 22,
        h4: 19,
        h5: 24,
        h6: 18,       
    },
    fonts: {
        bold: "SFProText-Bold",
        semiBold: "SFProText-Semibold",
        regular: "SFProText-Regular",
    },
    textVariants: {
       hero: {
        fontSize: 55,
        lineHeight: 70,
        fontFamily: "SFProText-Bold",
        color: "white",
        textAlign: "center",
      },
    title: {
        fontSize: 28,
        color: "dark",
        fontFamily: "SFProText-Semibold",
    },
    hedaderTitle: {
        fontSize: 20,
        color: "dark",
        fontFamily: "SFProText-Semibold",
    },
    categoryTitle: {
        fontSize: 22,
        color: "dark",
        fontFamily: "SFProText-Bold",
    },
    body: {
        fontSize: 15,
        lineHeight: 24,
        color: "body",
        fontFamily: "SFProText-Regular",
    },
    text: {
        fontSize: 15,
        lineHeight: 15,
        color: "body",
        fontFamily: "SFProText-Semibold",
    },
    text2: {
        fontSize: 14,
        lineHeight: 15,
        color: "body",
        fontFamily: "SFProText-Semibold",
    },
    textPrice: {
        fontSize: 20,
        lineHeight: 25,
        color: "body",
        fontFamily: "SFProText-Semibold",
    },
    button: {
        fontSize: 15,
        color: "text",
        fontFamily: "SFProText-Semibold",          
    },
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
});

export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export default theme;