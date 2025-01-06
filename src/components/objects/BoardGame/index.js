import CardGame from "../../CardGame";

function BoardGame (amountCards) {
    const $htmlCardGame = CardGame();
    const $htmlBoardGame = `
        <section class="board-game">
            ${$htmlCardGame.repeat(amountCards)}
        </section>
    `;
    return $htmlBoardGame;
}

export default BoardGame;