import React from 'react';
import img from '../../assets/Whats.png';
import google from '../../assets/google.png';
import Button from '@material-ui/core/Button';
import { LoginDiv } from './Login-Styles';

const Login = () => {
    const signIn = (e) => {
        e.preventDefault();

    }
   return (
     <LoginDiv>
         <div className='login__container'>
          <img src={img} alt='whatsapp-logo' />
          <div className='login__text'>
            <h1>Sign in to whatsapp</h1>
          </div>
          <Button onClick={signIn}>
            Sign in with Google 
             <img src={google} alt='google'/>
          </Button>
         </div>
     </LoginDiv>

   )
}


export default Login;