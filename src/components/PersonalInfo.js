import React from "react";
import Styled from "styled-components";
import Img from '../images/I_am.jpg';


const Information = Styled.div`
    margin-top: 50px;
    width: 1000px;
    height: 720px;
    background-color: #cbffb8;
    position: relative;
`

const PersonalName = Styled.div`
    font-size: 40px;
    font-weight: bold;
    color: #424144;
    position: absolute;
    top: 20px;
    left: 176px;
`

const PersonalImage = Styled.div`
    width: 600px;
    height: 400px;
    overflow: hidden;
    background-image: url(${Img});
    background-size: cover;
    position: absolute;
    top: 300px;
    left: 190px;
`

const Info = Styled.h2`
    font-size: 26px;
    color: #555581;
    position: absolute;
    top: 70px;
    left: 20px;
`


const PersonalInfo = () => {
    return (
        <Information>
                <PersonalName>Волков Владимир Александрович</PersonalName>
                <Info>телефон: 0681802045 <br />
                email: green_stone@ukr.net <br />
                город: Запорожье <br />
                опыт работы: более 10 лет <br />
                навыки: инженер-проектировщик электроприводов <br />
                инетересы: программирование, туристические походы, фотография</Info>
                <PersonalImage />
        </Information>
    );
}


export default PersonalInfo;