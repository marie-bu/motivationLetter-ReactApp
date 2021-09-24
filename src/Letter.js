import './styles/Letter.css';
import letters from './letters-data.json';

function Letter({inputValue}) {
  return (<div> {letters.filter(letter => letter.id===inputValue).map((thisLetter) => (
    <div className="letter">
      <div className="letter-section">
        <div className="bubble-text">
          {thisLetter.S1.map((p, index) => (<p className="p" key={'P1'+index}>{p}</p>))}
          <img src={"./assets/"+thisLetter.logo} alt="logo" id="companyLogo"/>
        </div>
        <p className="scroll">SCROLL &#8605;</p>
      </div>
      <div className="letter-section s2">
        <div id="skills">
          <i class="fab fa-html5"></i>
          <i class="fab fa-css3-alt"></i>
          <i class="fab fa-sass"></i>
          <i class="fab fa-js-square"></i>
          <i class="fab fa-react"></i>
          <i class="fab fa-git-alt"></i>
          <i class="fab fa-github"></i>
          <i class="fas fa-universal-access"></i>
          <i class="fab fa-wordpress"></i>
        </div>
        <div className="bubble-text">
            {thisLetter.S2.map((p, index) => (<p className="p" key={'P2'+index}>{p}</p>))}
        </div>
        <p className="scroll">ENCORE &#8605;</p>
      </div>
      <div className="letter-section s3">
        <div className="bubble-text">
          {thisLetter.S3.map((p, index) => (<p className="p" key={'P3'+index}>{p}</p>))}
        </div>
        <div id="contact">
          <a href="mailto:marie.buerki@gmail.com" target="_blank" rel="noreferrer"><i class="fas fa-at"></i></a>
          <a href="http://linkedin.com/in/marie-bu" target="blank" rel="noreferrer"><i class="fab fa-linkedin"></i></a>
        </div>
      </div>
    </div>
  ))}</div>)
}

export default Letter;