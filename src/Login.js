import { useState } from 'react';
import letters from './letters-data.json';
import Letter from "./Letter";
import './styles/Login.css';
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

      <Letter inputValue={inputValue} />

    </div>
  );
}

export default Login;
