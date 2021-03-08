import react from 'react';
const Todo_list = (prop) => {
    return(<><div className="todo_style">
                <i className="fa fa-times" aria-hidden="true" name={prop.index} onClick={()=>{
                    prop.onSelect(prop.id);
                }}/>
                <li value={prop.index}>{prop.itemVal}
             </li>
            </div>
            
        </>)
};export default Todo_list;