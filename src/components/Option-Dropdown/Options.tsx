import * as React from 'react';
import {OptionsDiv} from './Options-Styles';


const Options = () => {

    const[themeModeName, setThemeModeName] = React.useState("")
    
 const switchTheme = (event) => {
    if(event.target.checked) {
            document.body.setAttribute('class', 'dark');
            localStorage.setItem('theme', 'dark');
            setThemeModeName('Dark Mode')

        } else {
            document.body.setAttribute('class', 'light');
            localStorage.setItem('theme', 'light')
            setThemeModeName("Light Mode")
        }
    }

    const getThemeNameOnLoad: any = localStorage.getItem('theme') 

 

    return (
        <OptionsDiv>
         <ul>
             <li>Profile</li>
             <li>
                {  themeModeName ||  ` ${getThemeNameOnLoad?.charAt(0).toUpperCase() + getThemeNameOnLoad?.slice(1)} Mode  ` }
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