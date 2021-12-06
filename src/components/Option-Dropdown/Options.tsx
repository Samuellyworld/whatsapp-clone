import * as React from 'react';
import {OptionsDiv} from './Options-Styles';

import introImgLight from '../../assets/home_intro.jpg';
import introImgDark from '../../assets/intro-connection-dark.jpg';


const Options = () => {

    const[themeModeName, setThemeModeName] = React.useState("")
    
 const switchTheme = (event: { target: { checked: any; }; }) => {
    if(event.target.checked) {
            document.body.setAttribute('class', 'dark');
            localStorage.setItem('theme', 'dark');
            // Notice the "!" at the end of line
            document?.getElementById("image")!?.setAttribute('src', introImgDark)
            setThemeModeName('Dark Mode')

        } else {
            document.body.setAttribute('class', 'light');
            localStorage.setItem('theme', 'light')
            document?.getElementById("image")!?.setAttribute('src', introImgLight)
            setThemeModeName("Light Mode")
        }
    }

    const getThemeNameOnLoad: any = document.body.getAttribute("class");


    React.useEffect(() => {
        if(getThemeNameOnLoad === "dark") {
            const checkbox : any= document.getElementById("checkbox");
            checkbox.checked = true;
        }
    }, [getThemeNameOnLoad])
   
     

 

    return (
        <OptionsDiv>
         <ul>
             <li>Profile</li>
             <li>
                {  themeModeName ||  ` ${getThemeNameOnLoad?.charAt(0).toUpperCase() + getThemeNameOnLoad?.slice(1)} Mode  ` }
                <label className='theme-switch'>
                 <input type="checkbox" id="checkbox" onChange={switchTheme}/>
                 <div className='slider round'></div>
                </label> 

             </li>
             <li> Log Out</li>
         </ul>
        </OptionsDiv>
    );
}

export default Options;