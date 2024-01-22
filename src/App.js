import './App.css';
import Card from './Card';
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  let carddetails = [{
    plan : "FREE",
    pay : "0",
    features : [{
    name : "Single User"},{
    name : "50GB Storage"},{
    name : "Unlimited Public Projects"},{
    name : "Community Access",},{
    name : "Unlimited Private Projects",
    enabled :"true"},{
    name : "Dedicated Phone Support",
    enabled :"true"},{
    name : "Free Subdomain",
    enabled :"true"},{
    name : "Monthly Status Reports",
    enabled :"true"}]
  },
{
    plan : "PLUS",
    pay : "9",
    features : [{
      name : "5 Users"},{
      name : "50GB Storage"},{
      name : "Unlimited Public Projects"},{
      name : "Community Access"},{
      name : "Unlimited Private Projects"},{
      name : "Dedicated Phone Support"},{
      name : "Free Subdomain"},{
      name : "Monthly Status Reports",
      enabled :"true"}]
},{
    plan : "PRO",
    pay : "49",
    features : [{
      name : "Unlimited Users"},{
      name : "50GB Storage"},{
      name : "Unlimited Public Projects"},{
      name : "Community Access"},{
      name : "Unlimited Private Projects"},{
      name : "Dedicated Phone Support"},{
      name : "Free Subdomain"},{
      name : "Monthly Status Reports"}]
}]
  return (
    <div>
      <h1 className='title'>REACT PRICE CARD</h1>
    <div className='container'>
      <div className='row'>
        {
          carddetails.map((card) => {
            return <Card data = {card}/>
          })
        }
      </div>
    </div>
    </div>

  );
}

export default App;
