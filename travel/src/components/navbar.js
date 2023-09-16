import './main.css';
import world from '../images/world.svg';

export default function Navbar(){
    return(
        <div>
            <div className="nav-content">
            <img src={world} alt="world" />
            <div className="nav-text">my travel journal</div>
            </div>
        </div>
    );
}