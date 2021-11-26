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
         width: 44px;
         margin-top: -25px;
         margin-bottom : 12px;
         margin-left: 74px;

         input {
             display: none;
         }

        .slider {
             background: #ccc;
             content: "🌘";
             bottom: 4px;
             cursor: pointer;
             left: 0px;
             position: absolute;
             right: 0px;
             top: 6px;
             transition: 0.4s;

           &::before {
            background: #fff;
            bottom: 2px;
            content: "☀️";
            height: 20px;
            left: 3px;
            position: absolute;
            transition: 0.4s;
            width: 20px;
            }
            }

        input:checked + .slider {
          background: grey;
           }
        input:checked + .slider::before {
            transform: translateX(19px);
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