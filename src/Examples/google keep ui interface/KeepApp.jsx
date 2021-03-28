import react, { useState } from 'react';
import Header from './Header';
import CreateNote from './CreateNote';
import Footer from './Footer';
import './index.css';
import Note from './Note';
export default function KeepApp() {
    const [noteList,updateNoteList] = useState([]);
    const addNote = ( note ) => { 
        updateNoteList( ( prevNotes ) => {
            return[ ...prevNotes,  note ];
        } )
    }
    const deleteNote = ( id ) => {
        updateNoteList( function( OldNotes ) {
               return OldNotes.filter( function ( currentNote, index ) {
                return index != id;
            } )
         } )
    }

    return(
        <>
            <Header />
            <CreateNote passNote={addNote}/>
            <div className="NoteContainer">
                { noteList.map( ( currentNote, index ) => {
                    return ( <Note key={index} id={index} noteData = {currentNote} triggerDeleteNote={deleteNote}/> );
                } ) }
            </div>
            <Footer />
        </>
    )
};