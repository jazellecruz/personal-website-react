import "../styles/aboutMe.css"
import me from "../assets/me_001.jpg"

const AboutMe = () => {
  return (
    <div className="section-root about">
      <h3 className="accented-text title-section">Hello, World!</h3>
      <div className="about-container">
        <div className="about-desc-container">
          <p className="about-me-desc bold-text">
            I'm Jazelle Cruz and crafting digital-goodies for the web is my art.</p>
          <p className="about-me-desc">
            My interest in programming started when I accomplished the challenge of styling and centering a div (which, not gonna lie, was lowkey hard) from my ninth-grade computer class.
            With curiosity—and of course confidence, I decided to dive headfirst into the complex and intricate world of programming (and oh boy I was in for a ride!).</p>
          <p className="about-me-desc">
            Looking back from now, I'm glad I did. Despite the back pain and headaches it gives, I enjoy building projects that I am excited and passionate about.
          </p>
          <p>
            I am now on a mission to explore and level-up my tech skills (and to also score a sweet sweet job!).
          </p>
          <p>
          Oh by the way, here is a list of technologies and tools I like to use: 
          </p>
        </div>
      </div>
      
    </div>
  )
}

export default AboutMe
