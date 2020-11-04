import Typography from "typography"
import irvingTheme from "typography-theme-irving"
import CodePlugin from "typography-plugin-code"

irvingTheme.plugins = [new CodePlugin()]
irvingTheme.googleFonts = [
  {
    name: "Manrope",
    styles: ["700"],
  },
  { name: "Yrsa", styles: ["400", "700"] },
]
irvingTheme.headerFontFamily = ["Manrope", "sans-serif"]

const typography = new Typography(irvingTheme)

export default typography
