import { useRef } from 'react';

function UncontrolledInput() {
  // *1.creazione del ref con useRef con useRef *
  const inputRef = useRef(null);

  // *2. funzione per leggere il valore tramite il ref *
  const handleClick = () => {
    
    // *Qui uso alert invece di console.log per mostrare il valore*
    alert('Value input: ' + inputRef.current.value);
  };

  return (
     // * 3 Assegnazione del ref all input *
      // * Botteone onClick che chiama handleClick *

    <div>
      <input type="text" ref={inputRef} placeholder="Write hier..." />
      <button onClick={handleClick}>Read value</button>
    </div>
  );
}export default UncontrolledInput;