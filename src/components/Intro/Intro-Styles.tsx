import styled from 'styled-components';


export const HomeDiv = styled.div` 
    background: var(--home-bg-body);
    flex: 0.65;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

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

.home__text:first-of-type {
    padding-bottom: 30px;
    border-bottom: 1px solid rgba(74, 74, 74, 0.08);
}

/* .dark .home{
    background: rgb(38, 45, 49);
    border-bottom-color: #056162; */


/* .dark .home__title {
    color: rgba(241, 241, 242, 0.88);
} */


  
` 