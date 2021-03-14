import react, { useState } from 'react';
import Button from  '@material-ui/core/Button';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/Add';

export default function CreateNote( props ) {
    const [note, setNote] = useState({
        title:'',
        content:''
    });

    const [ expand, updateExpand] = useState( false );
    let changeNote = ( event ) => {
        setNote( ( prevValues ) => {
              return{...prevValues, [event.target.name] : event.target.value }
        } )
    }
    let addEvent = () => {
        props.passNote( note );
        setNote( () => {
            return{ title:'', content:'' }
      } )
    }
    let expandIt = (event) => {
        updateExpand(true);
    }
    let shrinkIt = (event) => {
        updateExpand(false);
    }
    return(
        <>
            <div className="main_note">
                <form >
                    <div className="creatNoteContainer">
                        { expand ? <input type="text" name="title" placeholder="Title" onChange={changeNote} value={note.title}></input> : null }
                        <textarea rows="" name="content" column="" placeholder="Enter content" onChange={changeNote} value={note.content} 
                            onClick={expandIt} 
                            onDoubleClick ={shrinkIt}  />
                        { expand ? <Button onClick={addEvent} className="btn btn-warning"><AddCircleOutlineRoundedIcon className="plus_icon"/></Button> : null }
                    </div>                    
                </form>
            </div>
        </>
    )
}