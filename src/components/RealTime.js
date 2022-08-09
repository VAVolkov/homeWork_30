import React from "react";
import Styled from "styled-components";
import WatchWrap from "../components/WatchWrap";

const TimeBlock = Styled.div`
    margin-top: 50px;
    width: 1000px;
    height: 450px;
    background-color: #cbffb8;
    position: relative;
`

const BlockName = Styled.div`
    text-transform: uppercase;
    font-size: 50px;
    color: #555581;
    position: absolute;
    top: 20px;
    left: 135px;
`

const RealTime = () => {
    return (
    <TimeBlock>
        <BlockName>Часы реального времени</BlockName>
        <WatchWrap />
    </TimeBlock>
    )
}


export default RealTime;