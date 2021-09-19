import { useState } from 'react';
import letters from './letters-data.json';
import './Login.css';
import './Letter.css';
import gif from "./ZHue.gif"

function handleSubmit(inputValue) {
  const pageLogin = document.querySelector(".login");
  const pageLetter = document.querySelector(".letter");
  letters.forEach((letter) => {
    if (letter.id !== inputValue) {
      return  
    } else if (letter.id === inputValue) {
      pageLogin.style.display="none";
      pageLetter.style.display="flex";
    }
  });
}

function keySubmit(e) {
  if (e.key === "Enter") {
    handleSubmit(e.target.value)
  } else {
    return
  }
}

function Login() {
  const [inputValue, setInputValue] = useState("");
  return (
    <div>

      <div className="login">
        <input type="text" id="password" name="password" placeholder="Entrez votre code ici" value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={(e) => keySubmit(e)}></input>
        <button type="submit" onClick={() => handleSubmit(inputValue)}><img src={gif} alt="reading gif"/></button>
      </div>

      {letters.filter(letter => letter.id===inputValue).map((thisLetter) => (
        <div className="letter">
          <div className="letter-section">
            <div className="bubble-text">
              {thisLetter.S1.map((p, index) => (<p className="p" key={'P1'+index}>{p}</p>))}
            </div>
            <p className="scroll">SCROLL &#8605;</p>
          </div>
          <div className="letter-section s2">
          <div className="bubble-text">
              {thisLetter.S2.map((p, index) => (<p className="p" key={'P2'+index}>{p}</p>))}
            </div>
            <p className="scroll">ENCORE &#8605;</p>
          </div>
          <div className="letter-section s3">
          <div className="bubble-text">
              {thisLetter.S3.map((p, index) => (<p className="p" key={'P3'+index}>{p}</p>))}
            </div>
          </div>
        </div>
      ))}

    </div>
  );
}

export default Login;
