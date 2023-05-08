import React,{useState} from 'react';

export default function TextForm(props) {
    
    const HandleUpclick= () =>{
        let newtxt =text.toUpperCase();
        setText(newtxt);
        props.showAlert("Converted to Upper case","success");
    }
    const HandleLowclick= () =>{
        let newtxt =text.toLowerCase();
        setText(newtxt);
        props.showAlert("Converted to lower case","success");
    }
    const clr= () =>{
        let newtxt ='';
        setText(newtxt);
    }
    const gmailextrct= () =>{
        let i= 0;
        let arr = text.split(" ");
        let sizar = arr.length;
        let j=0;
        let newtxt = " ";
        for(i=0;i<sizar;i++){
            for(j=0;j<arr[i].length;j++){
                if(arr[i].includes("@gmail.com"))
                    {newtxt = arr[i]; break;}
            }
            if(newtxt !== " ")
                break;
        }
        if(newtxt !== " ")
            setText(newtxt);
    }
    // to take input from
    const handleOnchange = (event) =>{
        setText(event.target.value);
    }
    const[text,setText] = useState('');
  return (
    <>
    <div className="container my-3 " style={{color : props.mode === 'light' ? 'black' : 'white' , backgroundColor : props.mode === 'light' ? 'white' : '#02398b' }} >
        <h2 >{props.heading}</h2>
        <div className="mb-3">
        <textarea className="form-control" style={{color : props.mode === 'light' ? 'black' : 'white' , backgroundColor: props.mode === 'light' ? 'white' : 'grey'}} value={text} id="myBox" rows="15" onChange={handleOnchange}></textarea>
        </div>
        <button className="btn btn-primary" onClick={HandleUpclick}>Change to Uppercase</button>
        <button className="btn btn-primary mx-3" onClick={HandleLowclick}>Change to Lowercase</button>
        <button className="btn btn-primary mx-3" onClick={clr}>Clear</button>
        <button className="btn btn-primary mx-3" onClick={gmailextrct}>Gmail Id extractor</button>
    </div>
    <div className="container" style={{color : props.mode === 'light' ? 'black' : 'white' }}>
        <h2>Your text summary</h2>
        <p>Your text has {(text.length === 0) ? 0 : text.split(" ").length } words and {text.length} letters and takes {(text.length === 0) ? 0 :0.08*text.split(" ").length} mintues to read</p>
        <h3>Your text preview</h3>
        <p>{text.length > 0 ? text : "Enter your text here to preview"}</p>
    </div>
    </>

  );
}
