import React from "react";
import Styled from "styled-components";
import Img from '../images/filmPoster.jpg';

const FilmInfo = Styled.div`
    width: 600px;
    height: 460px;
    background-color: #cbffb8;
    position: relative;
    left: 200px;
`

const FilmName = Styled.h1`
    font-size: 32px;
    font-weight: bold;
    color: #d52797;
    position: absolute;
    top: 20px;
    left: 20px;
`
const FilmProducerName = Styled.h2`
    font-size: 20px;
    color: #555581;
    position: absolute;
    top: 90px;
    left: 10px;
`
const FilmYear = Styled.h2`
    font-size: 20px;
    color: #555581;
    position: absolute;
    top: 110px;
    left: 10px;
`

const FilmStudio = Styled.h2`
    font-size: 20px;
    color: #555581;
    position: absolute;
    top: 130px;
    left: 10px;
`
const FilmImage = Styled.div`
    width: 195px;
    height: 260px;
    overflow: hidden;
    background-image: url(${Img});
    position: absolute;
    top: 190px;
    left: 190px;
`

const FavouriteFilm = () => {
    return (
        <FilmInfo>
            <FilmName>Название фильма: "Чужие среди нас"</FilmName>
            <FilmProducerName> Режиссер: Джон Карпентер </FilmProducerName>
            <FilmYear>Год выпуска: 1988</FilmYear>
            <FilmStudio>Киностудия: Alive Films</FilmStudio>
            <FilmImage />
        </FilmInfo>
    );
}


export default FavouriteFilm;