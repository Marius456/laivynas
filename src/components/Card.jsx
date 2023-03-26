import "./styles/Card.css"

export function Card(props) {
    const dragStart = (e) => {
        const target = e.target;
        console.log("target:")
        console.log(target)
        e.dataTransfer.setData("div_id", target.id);
    };

    const dragOver = (e) => {
        e.stopPropagation();
    };
    return (
        <div
            id="card"
            draggable
            onDragStart={dragStart}
            onDragOver={dragOver}
            className="card-body"
            style={{ color: props.color }}>
            <img src={"card_parts/" + props.border} alt="" className="card-border" />
            <div className="card-title">
                <span>{props.title}</span>
            </div>
            <div className="card-cost">
                <span>{props.cost}</span>
            </div>
            <div className="card-image-box">
                <img src={"pictures/" + props.image} alt="" className="card-image" />
            </div>
            <div className="card-class">
                <span>{props.class}</span>
            </div>
            <div className="card-subclass">
                <span>{props.subclass}</span>
            </div>
            <div className="card-info">
                <span>{props.effect}<br /></span>
                <span><i>{props.motto}</i></span>
            </div>
            {props.attack != undefined ?
                <div className="card-stats">
                    <span>{props.attack + "/" + props.defence}</span>
                </div>
                : null}
            <div className="card-rarity">
                <img src={"card_parts/" + props.rarity} alt="" className="rarity-img" />
            </div>
        </div>
    )
}