import * as React from 'react';
import {HomeDiv} from './Intro-Styles';
import introImgLight from '../../assets/home_intro.jpg';
import introImgDark from '../../assets/intro-connection-dark.jpg';

const Home =({...props}) => {


   return (
     <HomeDiv> 
       <div className="home__img">
				<img
                    id="image"
					src={props.storedTheme==='dark' ? introImgDark : introImgLight}
					alt="home_page"
					className="__img"
				/>
		</div>
        <h1 className="home__title"> Keep your phone connected </h1>
		<p className="home__text">
				WhatsApp connects to your phone to sync messages. To reduce data usage,
				connect your phone to Wi-Fi.
		</p>
     </HomeDiv>
   );

}


export default Home;