import * as React from 'react';
import {HomeDiv} from './Intro-Styles';
import introImgLight from '../../assets/home_intro.jpg';
import introImgDark from '../../assets/intro-connection-dark.jpg';

const Home =() => {
 const getTheme = document.body.classList.contains("dark")
   return (
     <HomeDiv> 
       <div className="home__img">
				<img
                    id="image"
					src={getTheme ? introImgDark : introImgLight}
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