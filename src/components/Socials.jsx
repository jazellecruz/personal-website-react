import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import { socials } from "../constants/constants";
import readcv from "../assets/readcv-darkmode.png"


const Socials = () => {
  return (
    <div className="section-root" id="socials">
      <p className="sub-text highlight-text">Socials</p>
      <h3 className="large-text">Don't be a stranger— say hi!</h3>
      
      <div className="socials-svg-container">
        <a href={socials.github} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub}/>
        </a>
        <a href={socials.linkedIn} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedinIn}/>
        </a>
        <a href={socials.readCV} target="_blank" rel="noopener noreferrer">
          <img src={readcv} alt="readcv-logo"/>
        </a>
      </div>
    
      {/* <a href={socials.linkedIn} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin}/>
      </a>
       */}
      
    </div>
  )
}

export default Socials
