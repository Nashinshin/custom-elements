import {init as initHeader} from "./components/header";
import {init as initFooter} from "./components/footer";
import {init as initTitle} from "./components/title";
import {init as initSubTitle} from "./components/subtitle";
import {init as initLarge} from "./components/large";
import {init as initBody} from "./components/body";
import {init as initLabel} from "./components/label";
import {init as initOutLine} from "./components/outline";
import {init as initButton} from "./components/button";

function main() {
  initHeader();
  initFooter();
  initTitle();
  initSubTitle();
  initLarge();
  initBody();
  initLabel();
  initOutLine();
  initButton();
}
main();
