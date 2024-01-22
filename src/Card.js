import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import './App.css';

function Card(props){
    return (
        <div className="col-4">
            <div class="card mb-4 box-shadow">
          <div class="card-header bg-white text-center m-md-2" style={{color:"gray"}}>
            <h4 class="my-0 font-weight-normal">{props.data.plan}</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">${props.data.pay}<small class="text-muted">/month</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              {
                props.data.features.map((feature) => {
                    return feature.enabled ? <li style={{color:"lightgrey"}}><FontAwesomeIcon icon={faXmark} />  {feature.name}</li> : <li><FontAwesomeIcon icon={faCheck} /> {feature.name}</li>
                })
              }
            </ul>
            <button type='button' class={`button ${props.data.plan === "PRO" ? 'button1' : 'button2'}`}>BUTTON</button>
          </div>
        </div>
        </div>
    )
};

export default Card;