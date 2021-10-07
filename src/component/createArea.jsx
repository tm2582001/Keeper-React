import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import { Fab, Zoom } from "@material-ui/core";

function CreateArea(props) {
    const [note,setValues] = useState({
        title: "",
        content: ""
    });

    const[clicked,showArea] =useState(false);

    function textInput(event){
        const {name,value} = event.target;
        setValues((prevValue) =>{
            return{
            ...prevValue,
            [name]: value
            }
        });
    }

    function clickResponse(event){
        props.click(note);
        event.preventDefault();
        setValues({
            title: "",
            content: ""
        });
    }

    function activeArea(){
      showArea(true);
    }

  return (
    <div>
      <form className="create-note">
      {clicked?<input onChange={textInput} name="title" placeholder="Title" value={note.title} />:null}
        <textarea onChange={textInput} onClick={activeArea} name="content" placeholder="Take a note..." rows={clicked?3:1} value={note.content} />
        <Zoom in={clicked}>
        <Fab onClick={clickResponse} ><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
