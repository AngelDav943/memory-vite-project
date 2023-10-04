import { useId } from 'react';

export default function(props) {

    const current = useId()
    const onClick = function(event) {
        if (props.onClick) props.onClick(event, props.pair, current)
    }

    return <div id={current} className="card" onClick={onClick}>
        <div className="face front">
            <p>{props.pair}</p>
        </div>
        <div className="face back">
        </div>
    </div>
}