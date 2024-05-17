import React, {useState} from "react"

export default function TextForm(props) {
  const HandleUpClick = ()=>{
    let upper = text.toUpperCase();
    setText(upper)
    props.alertFunc('Converted to Uppercase', 'success')
  }

  const HandleLoClick = ()=>{
    let upper = text.toLowerCase();
    setText(upper)
    props.alertFunc('Converted to Lowercase', 'success')

  }
  
  const HandleClearClick = ()=>{
    let upper = ''
    setText(upper)
    props.alertFunc('Cleared text', 'success')

  }

  const HandleonChange = (event)=>{
    setText(event.target.value);
  }

  const [text, setText] = useState('');
 
return (
  <>
  <div className="container">
    <h1 style={{color: props.col === 'light'?'black':'white' }}>{props.heading}</h1>
    <div className="mb-3">
    <textarea style={{backgroundColor: props.col === 'light'?'#e1dfdf':'#302b2b', color: props.col === 'light'?'black':'white'}} className="form-control" value={text} onChange={HandleonChange} id="myBox" rows="8"></textarea>
    </div>
    <button type="submit" className="btn btn-primary mx-2" onClick={HandleUpClick}>Convert to Uppercase</button>
    <button type="submit" className="btn btn-primary mx-2" onClick={HandleLoClick}>Convert to Lowercase</button>
    <button type="submit" className="btn btn-primary mx-2" onClick={HandleClearClick}>Clear Text</button>


  </div>
  <div className={`container my-4 text-${props.col === 'light'?'dark':'light'}`}>
    <h2>Text Summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>Estimated reading time: {text.split(" ").length * 0.008}</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:'Enter your text to preview it here'}</p>
  </div>
  </>
  )
}
