import React, { useState } from 'react';
import data from './data';
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";






function App() {
  

  const [info, setInfo] = useState(data);
  const [darkMode, setDarkMode] = useState(false);
  const [paragraphNumber, setParagraphNumber] = useState("");
  const [text, setText] = useState([]);

  const getValue=(event)=>{
    const number = event.target.value;
    setParagraphNumber(number);
    console.log(paragraphNumber);

  }

  const submit = (e)=>{
    e.preventDefault()
    const numOfPara = info.slice(0, paragraphNumber);
    setText(numOfPara);
  
  }




  return (
  <>
  <div className={darkMode? "dark": "container"}>
    <div className="mode-div" onClick={()=>{
      setDarkMode(!darkMode);
    }}>
      {darkMode? <FaSun className="sun"/>: <FaMoon/>}
      
    </div>
    
    <h2>Generate Lorem ipsum</ h2>
    <form onSubmit={submit}>
      <label for="number">Paragragh:</label>
      <input name="number" type="number" min={1} max={8} onChange={getValue} value={paragraphNumber}/>
      <button className="submit" >Generate</button>
    </form>

    <aritcle>
      {text.map((each)=>{
        return <p>{each}</p>
      })}
  
    </aritcle>
   
  </div>
  </>
    )
}

export default App;
