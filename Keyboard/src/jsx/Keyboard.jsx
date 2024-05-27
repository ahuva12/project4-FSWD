import React from 'react';
import EmojiPicker from './EmojiPicker';

function Keyboard(props) {

    const handleAddChar = (char) => {

    props.setPreviousStates(prevStates => [...prevStates, props.currText]);
    const sizeMap = {
      small: '14px',
      medium: '22px',
      large: '30px'
    };
    const fontSize = sizeMap[props.size] || sizeMap.medium;

    if (typeof char === 'object') {
      props.setText(prevText => prevText + `<span style="font-size:${fontSize}; ">${char.target.value}</span>`);
    }
    else if (char === '\n') {
      props.setText(prevText => prevText + '<span><br /></span>');
    } else if (char === ' ') {
      props.setText(prevText => prevText + `<span style="text-decoration:${props.isUnderline};">&nbsp;</span>`);
    } else {
      props.setText(prevText => prevText + `<span style="color:${props.color}; 
                                      font-size:${fontSize}; 
                                      font-family:${props.font}; 
                                      font-weight:${props.isBold}; 
                                      font-style:${props.isItalic}; 
                                      text-decoration:${props.isUnderline}">${char}</span>`);
    }
  };

  const handleDelChar = () => {
    props.setPreviousStates(previousStates => [...previousStates, props.currText]);
    const updatedText = props.currText.replace(/<span[^>]*>[^<]*<\/span>$|<span><br\s?\/?><\/span>$/, '');
    props.setText(updatedText);
    console.log(props.currText)

  };

  const handleDeleteAllText = () => {
    props.setPreviousStates(previousStates => [...previousStates, props.currText]);
    props.setText('');
  };

  const handleUndoLastAction = () => {
    if (props.prevStates.length > 0) {
      const lastState = props.prevStates.pop();
      props.setText(lastState);
      props.setPreviousStates([...props.prevStates]);
    }
  };

  
    const englishLetters = 'abcdefghijklmnopqrstuvwxyz.,?!":'.split('');
    const hebrewLetters = 'ןםףץךאבגדהוזחטיכלמנסעפצקרשת.,?!":'.split('');
    const letters = props.language === 'english' ? englishLetters : hebrewLetters;
  
    return (
      <div className="keyboard">
        {letters.map((char) => (
          <button key={char} onClick={() =>handleAddChar(char)}>
            {char}
          </button>
        ))}
        <button onClick={() => handleAddChar(' ')}>Space</button>
        <button onClick={() => handleAddChar('\n')}>Enter</button>
        <button onClick={() => handleDelChar()}>Del</button>
        <div>
        <button onClick={() => handleDeleteAllText()}>Delete All</button>
        <button onClick={() => handleUndoLastAction()}>Undo Last Action</button>
        </div>
        <EmojiPicker addEmoji={handleAddChar}/>
      </div>
    );
}

export default Keyboard;

