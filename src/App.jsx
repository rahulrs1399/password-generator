import { useState } from 'react'
import './App.css'
import Checkbox from './components/CheckBox';
import usePasswordGenerator from './hooks/use-password-generator';

function App() {

  const [length, setLength] = useState(4);
  const [checkboxs, setCheckboxs] = useState([
    { title: "Include Uppercase Letters", state: false },
    { title: "Include Lowercase Letters", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include Symbols", state: false },
  ])
  const [copied, setCopied] = useState(false);

  const handleCheckBox = (i) => {
    const updateCheckBox = [...checkboxs];
    updateCheckBox[i].state = !updateCheckBox[i].state
    setCheckboxs(updateCheckBox);

  }

  const handleCopyText = () => {
    navigator.clipboard.writeText(password.value);
    setCopied(true);
    console.log(password);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  }

  const {password, errorMessage, generatePassword} = usePasswordGenerator();
  console.log(password);
  // console.log(length);

  return (
    <>
      <div className='container'>
        {/* password text and copy button */}
        {password && <div className="header">
          <div className='password__text'>{password}</div>
          <button 
          className='password__button'
          onClick={() => handleCopyText()}
          >
            {copied ? "Copied" : "Copy"}
          </button>
        </div>}

        {/* Character length */}
        <div className='Character__lenght'>
          <span className=''>
            <lable>Character Length</lable>
            <lable>{length}</lable>
          </span>
          <input
            type="range"
            min="4"
            max="20"
            value={length}
            onChange={(e) => setLength(e.target.value)} />
        </div>

        {/* checkboxs */}
        <div className="checkBoxs">
          {
            checkboxs.map((checkbox, index) => {
              return (
                <Checkbox
                  key={index}
                  title={checkbox.title}
                  onChange={() => handleCheckBox(index)}
                  state={checkbox.state}
                />
              )
            })
          }
        </div>
        {/* Strength Check */}
        <div className='Strength__check'>

        </div>

        {/* Error message */}
        {
          errorMessage && <div className='error__message'>{errorMessage}</div>
        }
        {/* Generate button */}
        <div className='generate_button'>
          <button onClick={() => generatePassword(checkboxs, length)}>Generate password</button>
        </div>
      </div>

    </>
  )
}

export default App
