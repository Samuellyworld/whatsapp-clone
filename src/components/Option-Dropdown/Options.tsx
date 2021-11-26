import * as React from 'react';
import {OptionsDiv} from './Options-Styles';

const Options = () => {
    return (
        <OptionsDiv>
         <ul>
             <li>Profile</li>
             <li>
                Dark mode
                <label className='theme-switch'>
                 <input type="checkbox" />
                 <div className='slider round'></div>
                </label> 

             </li>
             <li> Log Out</li>
         </ul>
        </OptionsDiv>
    );
}

export default Options;