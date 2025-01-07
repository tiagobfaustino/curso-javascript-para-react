import "./styles/settings/colors.css";
import "./styles/generic/reset.css";
import "./styles/elements/base.css";
import BoardGame from "./components/objects/BoardGame";
import PlayerName from "./components/PlayerName";




const $root = document.querySelector("#root");


//// não usar - problemas na segurança
//$root.innerHTML = $htmlCardGame;

$root.insertAdjacentHTML(
    "beforeend", 
    `
        ${PlayerName('Player1')}
        ${PlayerName('Player2')}
        ${BoardGame(6)}

    `
);