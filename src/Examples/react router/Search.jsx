import react, { useState } from 'react';
import './index.css';

const Search = () => {
    const [txt, setText] = useState('');
    const changeImage = (e) => {   setText(e.target.value);   }

    const ImageRes = (prop) => {
        let str = `https://source.unsplash.com/350x300/?${prop.source}`;
        return(<>     <img src={str} alt="Abc" />   </>);
    }

    return(<>
        <div className="center_div1">
            <input type="text" 
                className="form-control mb-20" 
                placeholder="Search image here ..." 
                onChange={changeImage} value={txt}/>
            { "" !== txt ? <ImageRes source={txt}/> : null }
        </div>
            
    </>)
};export default Search;