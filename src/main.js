import "./styles/settings/colors.css";
import "./styles/generic/reset.css";
import "./styles/elements/base.css";

import CardGame from "./components/CardGame";


const $root = document.querySelector("#root");

const $htmlCardGame = CardGame();

//// não usar - problemas na segurança
//$root.innerHTML = $htmlCardGame;

$root.insertAdjacentHTML("beforeend", $htmlCardGame);