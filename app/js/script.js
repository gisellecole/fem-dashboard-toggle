import { initializeColorMode } from "./toggle.js";
import { ContentGenerator } from "./content.js";
import { OverviewGenerator } from "./overview.js";

window.addEventListener("load", () => {
  //initialize color mode
  initializeColorMode();

  //initialize content
  const contentGenerator = new ContentGenerator();
  contentGenerator.setPageContent();

  //initialize overview
  const pageBody = new OverviewGenerator();
  pageBody.setOverviewsContent();
});
