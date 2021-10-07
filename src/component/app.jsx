import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import CreateArea from "./createArea";
import React, { useState } from "react";

function App (){
    const [notes,setNotes] =useState([]);

    function displayNotes(value){
        setNotes((prevNotes)=>{
            return [...prevNotes,value]
        });
    }

    function deleteNote(id){
        setNotes((prevNotes)=>{
            return prevNotes.filter((note,index) =>{
                return index !== id;
            }
            );
        });
    }

    return(<div>
        <Header />
        <CreateArea click={displayNotes} />
        {notes.map((displayNote,index)=>{
            return <Note key={index} id={index} title={displayNote.title} content={displayNote.content} click={deleteNote}/>
            
        })}
        <Footer />
    </div>);
}

export default App;