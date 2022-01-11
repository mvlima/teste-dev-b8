import { useState } from 'react';

const Add = () => {

  const [btnClass, setBtnClass] = useState(false);

  return (
    <button
      onClick={() => { btnClass ? setBtnClass(false) : setBtnClass(true); }}
      className={`btnClass ${btnClass ? "btnClicked" : ""}`}
    >
      {btnClass ? "ADICIONADO" : "ADICIONAR"}
    </button>
  )
}

export default Add
