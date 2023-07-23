import './cool-button.css';

export function CoolButton({ text = '', onClick }) {
    return (
        <button className="btn" type="button" onClick={onClick}>
            <span className={'button-text'}>{text}</span>
            <div id="container-stars">
                <div id="stars"></div>
            </div>

            <div id="glow">
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
        </button>
    );
}
