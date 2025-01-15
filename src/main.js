import "./styles/settings/colors.css";
import "./styles/generic/reset.css";
import "./styles/elements/base.css";
import BoardGame from "./components/objects/BoardGame";
import ScoreBoard from "./components/objects/ScoreBoard";


const $root = document.querySelector("#root");


//// não usar - problemas na segurança
//$root.innerHTML = $htmlCardGame;

$root.insertAdjacentHTML(
    "beforeend", 
    `
        ${ScoreBoard()}
        ${BoardGame(6)}

    `
);