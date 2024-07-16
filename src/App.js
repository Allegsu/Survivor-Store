import TLI from './images/TLOU-L.png';
import Craft from './images/Craft.png';
import Health from './images/HealthKit.png';
import Parts from './images/PartsII.png';
import Beach from './images/beachI.gif';
import Spain from './images/WS.png';
import GitL from './images/GLWII.png';
import IGW from './images/IGW.png';
import AWL from './images/APL.png';
import WWL from './images/WWL.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="TL-header">
        <h1 className="TLFont">THE<br></br>LAST<br></br>OF US</h1>
        <h6>Sony Europe Interactive Studios</h6>
      </header>
      <header className="TL-Content-Header">
        <nav className="TL-Nav"><img src={TLI} alt="TLL" className='TLLL' />
        <button className="Button-Craft" >
          <img src={Craft} alt="CraftB" className='CraftItem' />
          <span className="BCT"><strong>Craft</strong></span>
        </button>
        <button className="Button-Health">
          <img src={Health} alt="HealthB" className='HealthItem' />
          <span className="BHT"><strong>Supplies</strong></span>
        </button>
        <button className="Button-Parts">
          <img src={Parts} alt="PartsB" className='PartsItem' />
          <span className="BPT"><strong>Parts</strong></span>
        </button>
        <button className="Log-In"><strong>Make your death<br></br>be Swift</strong></button>
        </nav>
        <img src={Beach} alt="BeachG" className="BeachGif" />
      </header>
      <footer className="AboutUs TLFont">
        <img src={Spain} alt="SpainM" className='SpainMap'></img><span className="SMT"><strong>김치</strong> IBERICO</span>
        <hr className="divider"></hr>
      </footer>
      <div>
      <footer className="AboutUSII TLFont">
        <div className="footer-table"><div className="footer-column"><h3>ABOUT</h3><p>©2024 Kimchi Iberico is not regulated yet. <br></br>Supervised and pending to review by EU<br></br>Registered in Spain. Company No 00000001<br></br>Registered Office: Seville Spain & South Korea</p></div></div>
        <div className="footer-column"><h3>SOCIAL MEDIA</h3><img src={IGW} alt="Gitlo" className='GitLogo'></img><a href="#">IG PROFILE</a></div>
        <div className='footer-column'><h3>AVAILABLE PLATFORMS</h3><img src={AWL} alt="Gitlo" className='GitLogo'></img><img src={WWL} alt="Gitlo" className='GitLogo'></img></div>
        <div className="footer-column"><h3>DEVELOPER CONTACT</h3><img src={GitL} alt="Gitlo" className='GitLogo'></img><a href="#"><strong>알렉스</strong> PROFILE</a></div>
      </footer>
      </div>
    </div>
  );
}

export default App;

