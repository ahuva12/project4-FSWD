import { useState } from 'react'
import Keyboard from './Keyboard'
import DisplayText from './DisplayText'
import FormattingToolbar from './FormattingToolbar';
import '../css/App.css'

function App() {
  const [text, setText] = useState('');
  const [previousStates, setPreviousStates] = useState([]);
  const [selectedColor, setSelectedColor] = useState('#000000'); 
  const [selectedSize, setSelectedSize] = useState('medium'); 
  const [selectedFont, setSelectedFont] = useState('Arial');
  const [isBold, setIsBold] = useState('normal'); 
  const [isItalic, setIsItalic] = useState('normal');
  const [isUnderline, setIsUnderline] = useState('none'); 
  const [language, setLanguage] = useState('english'); 

  return (
    <>
    <h1 className='welcome'>Welcome to your Notepad+++</h1>
    <FormattingToolbar changeColor={setSelectedColor}
                       changeSize={setSelectedSize}
                       changeFont={setSelectedFont}
                       changeToggleBold={setIsBold}
                       changeToggleItalic={setIsItalic} 
                       changeToggleUnderLine={setIsUnderline}
                       changeToggleLanguage={setLanguage} />
    <DisplayText text={text}/>
    <Keyboard setText={setText}
              currText={text}
              prevStates={previousStates}
              setPreviousStates={setPreviousStates}
              size={selectedSize}
              font={selectedFont}
              color={selectedColor}
              isBold={isBold}
              isItalic={isItalic}
              isUnderline={isUnderline}
              language={language} />
    </>
  )
}

export default App
