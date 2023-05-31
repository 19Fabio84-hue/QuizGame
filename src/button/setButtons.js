import React, { useState } from 'react';
import { nanoid } from 'nanoid';

export default function SetButtons(props) {
    const [isheld, setIsheld] = useState(false);
  const [buttonArray, setButtonArray] = useState(pushArray());

  function getArray() {
    return { id: nanoid(), isheld: isheld };
  }

  function pushArray() {
    const dice = [];
    for (let i = 0; i < 1; i++) {
      dice.push(getArray());
    }
    return dice;
  }

  function Button({ value }) {
    

    const handleClick = () => {
      setIsheld(!isheld);
    };

    const styles = { backgroundColor: isheld ? 'green' :  '#FFF' };
    const stylesCheck = {
      backgroundColor: props.correct ? 'rgba(27, 159, 62,0.8)' : isheld ? 'rgb(195, 40, 63,0.5)'  :'rgb(221, 224, 238)'  };
   
    return (
      <div>
       
          <button className="main-btn" disabled={props.check && true} style={props.check ? stylesCheck  : styles} onClick={handleClick}>
            {value}
          </button>
     
      </div>
    );
  }

  const buttonFinal = buttonArray.map((get) => (    
    <Button key={get.id} check={props.check} correct={props.correct} isheld={get.isheld} value={props.value} />
    
  ));

  return <>{buttonFinal}</>;
}