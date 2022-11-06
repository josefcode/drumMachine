
import {useEffect, useRef} from 'react';

export default function DrumpPad({keyboard, id , audio, onclick, onkeydown}) {

  const ref = useRef(null);

  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <>
    <div 
    className="drum-pad" 
    id = {id} 
    onClick={onclick} 
    ref={ref} 
    tabIndex={-1} 
    onKeyDown={onkeydown}
    >
    <audio 
    className="clip" 
    id= {keyboard}
    src={audio} 
    ></audio>
    {keyboard}
    </div>
    </>

  )
}

