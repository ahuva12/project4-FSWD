import React from "react";

function FormattingToolbar(props) {
  
    const handleChangeFormat = (value, setFormat) => {
      setFormat(value);
    };

    const handleToggleBold = () => {
      props.changeToggleBold(prevIsBold => (prevIsBold === 'normal' ? 'bold' : 'normal'));
    };

    const handleToggleItalic = () => {
      props.changeToggleItalic(prevIsItalic => (prevIsItalic === 'normal' ? 'italic' : 'normal'));
    };
  
    const handleToggleUnderline = () => {
      props.changeToggleUnderLine(prevIsUnderline => (prevIsUnderline === 'none' ? 'underline' : 'none'));
    };
  
    const handleToggleLanguage = (lan) => {
      console.log(lan)
      props.changeToggleLanguage(lan);
    };
  
    
    return (
      <div className="formattingToolbar">
        <label htmlFor="font-color">Color </label>
        <input className="font-color" type="color" onBlur={(event) => handleChangeFormat(event.target.value, props.changeColor)}/> 

        <select className="font-size" onChange={(event) => handleChangeFormat(event.target.value, props.changeSize)}>Size
            <option value="medium">Medium</option>
            <option value="small">Small</option>
            <option value="large">Large</option>
        </select>

        <select className="font-family" onChange={(event) => handleChangeFormat(event.target.value, props.changeFont)}>
          <option value="Arial">Arial</option>
          <option value="Courier New">Courier New</option>
          <option value="Georgia">Georgia</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Verdana">Verdana</option>
        </select> 

        <select className="language" onChange={(event) => handleToggleLanguage(event.target.value)}>
          <option value="english">En</option>
          <option value="hebrew">Heb</option>
        </select>

        <button onClick={handleToggleBold} style={{ fontWeight: 'bold' }}>B</button>
        <button onClick={handleToggleItalic} style={{ fontStyle: 'italic' }}>A</button>
        <button onClick={handleToggleUnderline} style={{ textDecoration: 'underline' }}>U</button>

      </div>
    );
}

export default FormattingToolbar;