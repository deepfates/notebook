import Typography from "typography"
import irvingTheme from "typography-theme-irving"
import CodePlugin from "typography-plugin-code"

irvingTheme.plugins = [new CodePlugin()]
irvingTheme.googleFonts = [
  {
    name: "Manrope",
    styles: ["700"],
  },
  { name: "Lora", styles: ["400", "700"] },
  { name: "Lora:ital", styles: ["500", "700"] },
]
irvingTheme.headerFontFamily = ["Manrope", "sans-serif"]
irvingTheme.bodyFontFamily = ["Lora", "georgia", "sans-serif"]

const typography = new Typography(irvingTheme)

export default typography
