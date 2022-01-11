import { useState } from 'react';

const Add = () => {

  const [btnClass, setBtnClass] = useState(false);

  return (
    <button
      onClick={() => { btnClass ? setBtnClass(false) : setBtnClass(true); }}
      className={`btnClass ${btnClass ? "btnClicked" : ""}`}
    >
      {btnClass ? <> <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.5 6L9.5 17L4.5 12" stroke="#1C1C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg> ADICIONADO </> : "ADICIONAR"}
    </button>
  )
}

export default Add
