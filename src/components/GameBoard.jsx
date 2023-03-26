import "./styles/GameBoard.css"
import cards from "../data/cards.json"
import { Card } from "./Card";

export function GameBoard() {
    const drop = (e) => {
        e.preventDefault();
        const div_id = e.dataTransfer.getData("div_id");
        const block = document.getElementById(div_id);
        let dropIndex = Array.from(e.target.children).findIndex(
            (child) => child.getBoundingClientRect().bottom > e.clientY
        );
        if (dropIndex === -1) {
            e.target.appendChild(block);
        } else {
            e.target.insertBefore(block, e.target.children[dropIndex]);
        }
    };

    const dragOver1 = (e) => {
        e.preventDefault();
    };

    const dragStart = (e) => {
        const target = e.target;
        e.dataTransfer.setData("div_id", target.id);
    };

    const dragOver = (e) => {
        e.stopPropagation();
    };
    return (
        <>
            <div className="board-box">
                <img src="gameboard.png" alt="" className="board-image" />
                <div
                    id="battle-place"
                    onDrop={drop}
                    onDragOver={dragOver1}
                    className="card-place"
                    style={{ left: "29em", top: "2em" }}>
                </div>
                {/* --------------------------------------------------------------------------------------------- */}
                <div
                    id="death-place"
                    className="card-place"
                    style={{ right: "15em", top: "2em" }}>

                </div>
                {/* --------------------------------------------------------------------------------------------- */}
                <div
                    id="ship-place-1"
                    onDrop={drop}
                    onDragOver={dragOver1}
                    className="card-place"
                    style={{ left: "2em", bottom: "2em" }}>

                </div>
                <div
                    id="ship-place-2"
                    onDrop={drop}
                    onDragOver={dragOver1}
                    className="card-place"
                    style={{ left: "15em", bottom: "2em" }}>

                </div>
                <div
                    id="ship-place-3"
                    onDrop={drop}
                    onDragOver={dragOver1}
                    className="card-place"
                    style={{ left: "29em", bottom: "2em" }}>

                </div>
                <div
                    id="ship-place-4"
                    onDrop={drop}
                    onDragOver={dragOver1}
                    className="card-place"
                    style={{ left: "42em", bottom: "2em" }}>

                </div>
                <div
                    id="ship-place-5"
                    onDrop={drop}
                    onDragOver={dragOver1}
                    className="card-place"
                    style={{ left: "56em", bottom: "2em" }}>

                </div>
                {/* --------------------------------------------------------------------------------------------- */}
                <div
                    id="useless-ships"
                    className="card-place"
                    style={{ right: "15em", bottom: "2em" }}>

                </div>
                {/* --------------------------------------------------------------------------------------------- */}
                <div
                    id="deck"
                    className="card-place"
                    style={{ right: "2em", bottom: "2em" }}>

                </div>

            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
                <Card
                    id="card14"
                    draggable
                    onDragStart={dragStart}
                    onDragOver={dragOver}
                    {...cards[0]} />
                <div
                    id="card1"
                    draggable
                    onDragStart={dragStart}
                    onDrop={drop}
                    onDragOver={dragOver1}
                    className="card"
                    style={{ backgroundColor: "green" }}>

                </div>
                <div
                    id="card2"
                    draggable
                    onDragStart={dragStart}
                    onDrop={drop}
                    onDragOver={dragOver1}
                    className="card"
                    style={{ backgroundColor: "red" }} />
                <div
                    id="card3"
                    draggable
                    onDragStart={dragStart}
                    onDrop={drop}
                    onDragOver={dragOver1}
                    className="card"
                    style={{ backgroundColor: "cyan" }} />
            </div>
        </>
    )
}