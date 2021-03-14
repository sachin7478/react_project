import react from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
const Todo_list = (prop) => {
    return(<><div className="todo_style">            
                <DeleteIcon name={prop.index} onClick={()=>{
                    prop.onSelect(prop.id);
                }}/>
                
                <li value={prop.index}>{prop.itemVal}
             </li>
            </div>
            
        </>)
};export default Todo_list;