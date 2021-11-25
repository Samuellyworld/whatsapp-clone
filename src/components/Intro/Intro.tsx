import * as React from 'react';
import {HomeDiv} from './Intro-Styles';
import introImgLight from '../../assets/home_intro.jpg';

const Home =() => {
   return (
     <HomeDiv> 
       <div className="home__img-wrapper">
				<img
					src={introImgLight}
					alt="home_page"
					className="home__img"
				/>
		</div>
     </HomeDiv>
   );

}


export default Home;