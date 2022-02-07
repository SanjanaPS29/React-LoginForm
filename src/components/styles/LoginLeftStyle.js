import styled from "styled-components";

export const Background=styled.div
`

width: 480px;
height: 535px;
left: 0px;
top: 0px;
background-color:#518EF8 ;
;

`

export const Ellipse=styled.div` 
position: absolute;
width: 100px;
height: 100px;
left: ${(props=> props.left)};
top: ${(props=> props.top)};
border-radius:50%;
background: radial-gradient(100% 100% at 50% 0%, #7DACFD 0%, #1461E8 100%);
`

export const RoundedRectangle=styled.div`
position: absolute;
width: 100px;
height: 370px;
left:  ${(props=> props.left)};
top: ${(props=> props.top)};


background: #FFFFFF;
opacity: 0.1;
border-radius: 100px;
transform: rotate(-135deg);

`