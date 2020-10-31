import Typography from "typography"
import irvingTheme from "typography-theme-irving"
import CodePlugin from "typography-plugin-code"

irvingTheme.plugins = [new CodePlugin()]
const typography = new Typography(irvingTheme)

export default typography
