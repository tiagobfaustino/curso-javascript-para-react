import "./styles/settings/colors.css";
import "./styles/generic/reset.css";
import "./styles/elements/base.css";
import BoardGame from "./components/objects/BoardGame";




const $root = document.querySelector("#root");
const $htmlBoardGame = BoardGame(2);


//// não usar - problemas na segurança
//$root.innerHTML = $htmlCardGame;

$root.insertAdjacentHTML("beforeend", $htmlBoardGame);