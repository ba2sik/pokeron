import './loader.scss';
import 'animate.css';

export default function Loader({ text = 'Loading...' }) {
    return (
        <div>
            <div className="o-pokeball c-loader u-bounce" />
            <div className="loader-text">
                {text}
            </div>
        </div>
    );
}
