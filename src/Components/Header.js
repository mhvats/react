import React, { useState } from 'react'
import './Header.css'
import Logo from './Images/logo.png'
function Header(props) {
    const [button, setButton] = useState('Open Dashboard');
    const [inputState, setInputState] = useState('');
    const [textState, setTextState] = useState(false);
    function handleClick() {
        setButton(prevState => {
            return !prevState;
        });
    }
    function handleInputChange(e) {
        setInputState(e.target.value)
    }
    function handleText(){
        setTextState(prevState => {
            return !prevState;
        })
    }
    return (
        <div>
            <header>
                <nav>
                    <img id='header-logo' alt='logo' src={Logo} />
                    <ul id='header-ul'>
                        <li>Home</li>
                        <li>Menu</li>
                        <li>Option</li>
                        <li>Contact</li>
                    </ul>
                    <button onClick={handleClick}>{button ? "Dashboard" : "Open Dashboard"}</button>
                </nav>
            </header>
            {button && <div id='triggered-div'>
                <input value={inputState} onChange={handleInputChange} />
                {inputState && <button onClick={handleText}>{textState ? 'Hide Text' : 'Show Text'}</button>}
                {textState && <h1>{inputState}</h1>}
            </div>}
        </div>
    )
}

export default Header
