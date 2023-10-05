import { useId } from 'react';

export default function(props) {

    const current = useId()
    const onClick = function(event) {
        if (props.onClick) props.onClick(event, props.pair, current)
    }

    return <div id={current} className="card" onClick={onClick}>
        <div className="face front">
            <img src={"./src/assets/cards/" + props.pair + ".png"} alt="" />
        </div>
        <div className="face back">
            {props.pair}
        </div>
    </div>
}