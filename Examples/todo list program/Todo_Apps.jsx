import reactDom from 'react-dom';  import react, { useState } from 'react'; import Todo_list from './Todo_list';
let Todo_Apps = () => {
    let [inputList, setInputList] = useState('');   let [items, setItems] = useState([]);
    let itemEvent = (e) => { setInputList(e.target.value);   }
    let addItem = (event) => { 
        event.preventDefault(); 
        setItems( (oldItems) => {
            return [...oldItems, inputList];
        } ) 
        setInputList('');
    }
    const deleteItems = ( id ) => {
        setItems((oldItems)=>{
            return oldItems.filter( (value,index) => {
                return id !== index;
            } )
        })
    }
    return(<>
        <form onSubmit={addItem}>
           <div className="main_div">
               <div className="center_div">
                   <br />
                    <h1> To Do List</h1>
                   <br />
                   <input type="text" placeholder="Enter element" onChange={itemEvent} value={inputList}/>
                   <button type="submit">+</button>
                   <ol>
                       {items.map( ( val, index ) => {
                            return ( <Todo_list itemVal={val} key={index} id={index} onSelect={deleteItems}/>);
                       } )}
                   </ol>
               </div>
           </div>
        </form>
    </> );
}; export default Todo_Apps;