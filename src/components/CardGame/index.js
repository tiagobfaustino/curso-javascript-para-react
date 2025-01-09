import "./style.css";

//similar ao JSX do react

function CardGame(icon="alura-pixel", alt="logo da Alura") {
    return /*html*/ ` 
        <article class="card-game">
            <img src="images/${icon}.png" alt="${alt}">
        </article>
    `
}

export default CardGame;