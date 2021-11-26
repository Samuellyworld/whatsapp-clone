import styled from 'styled-components';

export const OptionsDiv = styled.div` 
    z-index: 1000;
    top: 78px;
    position: absolute;
    width: 130px;
    height: 135px;
    background-color: white;
    border-radius: 3px;
    box-shadow: 0 2px 5px 0 #00000042, 0 2px 10px 0 rgba(0, 0, 0, .16);  
    display: flex;
    align-items: left;
    justify-content: left;
    flex-direction: column;
    

    ul {
     padding: 0 10px;
     
     
        li {
        padding: 10px 0px;
        margin-right: 16px;
        list-style: none;
        color: #000000;
        font-size: 0.9rem;
        cursor: pointer;

        &:hover {
            background: #f5f5f5;
        }
        
        .theme-switch {
         display: inline-block;
         height: 34px;
         position: relative;
         width: 60px;

         input {
             display: none;
         }

        .slider {
             background: #ccc;
             content: "🌘";
             bottom: 0;
             cursor: pointer;
             left: 0;
             position: absolute;
             right: 0;
             top: 0;
             transition: 0.4s;

           &::before {
            background: #fff;
            bottom: 4px;
            content: "☀️";
            height: 26px;
            left: 4px;
            position: absolute;
            transition: 0.4s;
            width: 24px;
            }
            }

        input:checked + .slider {
          background: grey;
           }
        input:checked + .slider::before {
            transform: translateX(26px);
        }
       .slider.round {
         border-radius: 34px;
    }

     .slider.round::before {
       border-radius: 50%;
   }
        }

    }


    }



    ` 