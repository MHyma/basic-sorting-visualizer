import React from "react";
import styled from 'styled-components';
import { Button } from "../Components/header.style"

export default function Main({ nextIndex, currentIndex, data }) {
    // eslint-disable-next-line no-restricted-globals
    const width = screen.width / data.length;
    console.log("data => ", data);
    return (
        <Container>
            <BlockContainer>
                <>
                    {data.map((size, i) => (

                        <Bar
                            height={`${size}px`}
                            width={`${width}px`}
                            key={i}
                            active={currentIndex === size}
                            style={nextIndex === size ? { backgroundColor: "green" } : null}
                        >
                            {data.length < 20 && <Button disabled>{size}</Button>}
                        </Bar>
                    ))}
                </>
            </BlockContainer>
            <Step>
                <Button disabled={true}>Made By Hymavathi</Button>
            </Step>
        </Container>
    );
}

const Container = styled.div`
position:absolute;
bottom:0;
width:100%;

`
const BlockContainer = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:flex-end;
`

const Step = styled.div`
display:flex;
justify-content: center;
align-items:center;
width:100%;
height:50px;
background-color:#FA5;
border:1px solid white;
`

const Bar = styled.div`
display:flex;
align-items: center;
justify-content: center;
width:${(props) => props.width};
height: ${(props) => props.height};
background-color: ${(props) => (props.active ? "red" : "#FA5")};
${props => props.style}
margin-right:2px;
`