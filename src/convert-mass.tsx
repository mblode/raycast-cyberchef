import { runCyberchefRecipe } from "./utils";
export default async function Command() {
  await runCyberchefRecipe({ recipe: "Convert_mass('Yoctogram (yg)','Yoctogram (yg)')" });
}
