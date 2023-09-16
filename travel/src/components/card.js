import loc from '../images/location.svg';
import './main.css'

export default function Card(props){
    return(
        <div className ="main-card">
            <div className = "left-card">
        <img src={props.img} height="168px" width = "125px" className ="img"/>
            </div>
            <div className = "right-card">
                <div className="chota">
                <span className = "card-info">
                    <img src = {loc} alt=""  />
                    <div className = "country">{props.country}</div>
                    <a href="https://www.google.com/maps/@21.0686228,82.7525294,5z?entry=ttu" className = "maps-link">View on Google Maps</a>
                </span>
                <span className="heading">{props.location}</span>
                <div className = "date">{props.date}</div>
                <p className = "card-content">{props.text}</p>
                </div>
            </div>
        </div>
    );
}