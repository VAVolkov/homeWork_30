import React from "react";
import Styled from "styled-components";
import Img from '../images/cats.jpg';

const AnimalBlock = Styled.div`
margin-top: 50px;
width: 1000px;
height: 440px;
background-color: #cbffb8;
position: relative;
`

const AnimalsImage = Styled.div`
width: 300px;
height: 400px;
background-image: url(${Img});
background-size: cover;
position: absolute;
top: 20px;
left: 20px;
`

const AnimalsTitle = Styled.div`
position: absolute;
font-size: 40px;
color: #df5310;
top: 50px;
left: 400px;
`

const AnimalsInfo = Styled.div`
position: absolute;
font-size: 30px;
color: #grey;
top: 120px;
left: 400px;
`

const Animals = () => {
    return (
    <AnimalBlock>
        <AnimalsTitle>ОБЩИЕ ЖИВОТНЫЕ</AnimalsTitle>
        <AnimalsInfo>Называю я их Милка и Эскимосы.</AnimalsInfo>
        <AnimalsImage />
    </AnimalBlock>

    );
}

export default Animals;