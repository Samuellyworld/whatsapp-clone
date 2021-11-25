import styled from 'styled-components';

export const HomeDiv = styled.div` 
    background: #f8f9fa;
    flex: 0.65;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-bottom: 6px solid rgb(6, 215, 85);

  .home__img {
    width: 250px;
    height: 250px;
    margin-bottom: 20px;

    .__img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
    } 
}
 .home__title {
    color: #525252;
    font-size: 2rem;
    font-weight: 300;
    margin-bottom: 10px;
}

.home__text {
    color: rgba(0, 0, 0, 0.45);
    font-size: 0.85rem;
    font-weight: 500;
    max-width: 500px;
    line-height: 24px;
    display: flex;
    align-items: center;
}
  
` 