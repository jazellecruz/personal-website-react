import { socials } from "../constants/constants";
import gh from "../assets/github-logo.svg"
import linkedIn from "../assets/linkedin-icon.svg"
import readcv from "../assets/readcv-darkmode.png"

const Socials = () => {
  return (
    <div className="section-root" id="socials">
      <p className="sub-text highlight-text">Socials</p>
      <h3 className="large-text">Don't be a stranger— say hi!</h3>
      <div className="socials-svg-container">
        <a href={socials.github} target="_blank" rel="noopener noreferrer">
          <img src={gh} alt="github-logo" className="scale-on-hover"/>
        </a>
        <a href={socials.linkedIn} target="_blank" rel="noopener noreferrer">
        <img src={linkedIn} alt="github-logo" className="scale-on-hover"/>
        </a>
        <a href={socials.readCV} target="_blank" rel="noopener noreferrer">
          <img src={readcv} alt="readcv-logo" className="scale-on-hover"/>
        </a>
      </div>
    </div>
  )
}

export default Socials
