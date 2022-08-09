import React from "react";
import Styled from "styled-components";

const Timer = Styled.div`
    margin: 150px 0 0 100px;
    width: 800px;
    height: 140px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: absolute;
    top: 20px;

`
const Tab = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Group = Styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const Indicator = Styled.div`
    width: 100px;
    height: 100%;
    background: linear-gradient(to top, rgb(243, 240, 240) 50%, #e2dcdc 50%);
    font-size: 120px;
    text-align: center;
    border-radius: 10px;
    box-shadow: -5px 5px #b8b4b4;
    margin: 0 5px 0 5px;
`

const WatchWrap = () =>{
    return(
<Timer>
        <Tab>
            <Group>
                <Indicator id="hours10">0</Indicator>
                <Indicator id="hours">0</Indicator>
            </Group>
        </Tab>
        <Tab>
            <Group>
                <Indicator id="minutes10">0</Indicator>
                <Indicator id="minutes">0</Indicator>
            </Group>
        </Tab>
        <Tab>
            <Group>
                <Indicator id="seconds10">0</Indicator>
                <Indicator id="seconds">0</Indicator>
            </Group>
        </Tab>
</Timer>
    );
}

const hours10 = document.querySelector('#hours10');
const hours = document.querySelector('#hours');
const minutes10 = document.querySelector('#minutes10');
const minutes = document.querySelector('#minutes');
const seconds10 = document.querySelector('#seconds10');
const seconds = document.querySelector('#seconds');

setInterval(() => {
    let currentTime = new Date();
    let h = currentTime.getHours();
    let m = currentTime.getMinutes();
    let s = currentTime.getSeconds();

    hours10.innerText = Math.trunc(h / 10);
    hours.innerText = h % 10;
    minutes10.innerText = Math.trunc(m / 10);
    minutes.innerText = m % 10;
    seconds10.innerText = Math.trunc(s / 10);
    seconds.innerText = s % 10;
}, 100);





export default WatchWrap;

