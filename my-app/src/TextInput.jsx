import { useState } from "react";

function TextInput() {
    const [inputValue, setValue] = useState('');

    const handleInput = (event) => {
        setValue(event.target.value);
    }
    
    return(
        <div>
            <label htmlFor="text">
                <input id="text" type="text" value={inputValue} onChange={handleInput} placeholder="Writ hier"/>
            </label>
            <p>Value Input: {inputValue}</p>
        </div>
    )
}

export default TextInput;