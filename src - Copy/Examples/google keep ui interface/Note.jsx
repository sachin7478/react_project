import react, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from  '@material-ui/core/Button';
export default function Note( props ) {
    return(
        <>
            <div className='note'>
                <h5>{ props.noteData.title }</h5>
                <p> { props.noteData.content } </p>
                <Button className="btn" onClick={ () => {
                    props.triggerDeleteNote( props.id )
                } } ><DeleteIcon className="deleteIcon"/></Button>
            </div>
        </>
    )
}