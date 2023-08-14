import React, {useState, useRef} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    const [length, setlength] = useState(0);
    const textAreaRef = useRef();
    const [wordCount,setWordCount] = useState(0);

    const countWords = () => {
      const text = textAreaRef.current.value;
      setWordCount(text.split(" ").length);
      setlength(text.length);
      props.showAlert("No. of words & character calculated", "success")
    }

    const handleUpClick = ()=>{
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase","success")
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase","success")
    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard","success")
    }

    const handleClearClick = ()=>{ 
        let newText = '';
        setText(newText)
        props.showAlert("Clear text","success")
    }
   
  return (
    <>
    <div className='container'>
        <h1>{props.heading} </h1>
        <div className="mb-3">
            <textarea className="form-control"  ref={textAreaRef} onChange={handleOnChange} id="myBox" rows="5"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-1 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1 my-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1 my-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1 my-2" onClick={countWords}>No. of words & characters</button>
    </div>
    <div className="container,my-3">
        <h2>No. of words & characters</h2>
        <p>{wordCount} words, {length} characters</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}


