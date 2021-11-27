import * as React from 'react';
import {OptionsDiv} from './Options-Styles';

const Options = () => {

    const[mode, setMode] = React.useState("")
    
 const switchTheme = (event) => {
    if(event.target.checked) {
            document.body.setAttribute('class', 'dark');
            localStorage.setItem('theme', 'dark');
            setMode('Dark mode')

        } else {
            document.body.setAttribute('class', 'light');
            localStorage.setItem('theme', 'light')
            setMode("Light Mode")
        }
    }

    const getThemeNameOnLoad = localStorage.getItem('theme') 

 

    return (
        <OptionsDiv>
         <ul>
             <li>Profile</li>
             <li>
                {  mode || getThemeNameOnLoad }
                <label className='theme-switch'>
                 <input type="checkbox" onChange={switchTheme}/>
                 <div className='slider round'></div>
                </label> 

             </li>
             <li> Log Out</li>
         </ul>
        </OptionsDiv>
    );
}

export default Options;