import React,{useState} from 'react'
import './cacli.css'
function Calci() {
    const [input, setNum1] = useState('');
    const handleButtonClick = (event)=>{
        const value=event.target.value;
        if(value==="="){
            console.log(eval(value));
        }

    }
  return (
    <div className="Calculator-Container">
        <div className="Calculator">
            <input className="Calculator-display" type="text" value={input} />
            <div className="calculator-buttons">
                {[7,8,9,'*',
                    4,5,6,'-',
                    1,2,3,'+',
                    0,'.','=',
                ]
                .map((btn, i) => (
                    <button key={i} value={btn} onClick={handleButtonClick}
                    >{btn}</button>
                    ))}
                    <button className='clear' value="C" onClick={handleButtonClick}>C</button>                
            </div>
        </div>

    </div>
  )
}

export default Calci