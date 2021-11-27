import * as React from 'react';
import {OptionsDiv} from './Options-Styles';

const Options = () => {
 const switchTheme = (event) => {
    if(event.target.checked) {
            document.body.setAttribute('class', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.setAttribute('class', 'light');
            localStorage.setItem('theme', 'light')
        }
    }

    return (
        <OptionsDiv>
         <ul>
             <li>Profile</li>
             <li>
                Dark mode
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