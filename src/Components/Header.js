import React from "react";

import { Button, Wrapper } from "../Components/header.style";


export default function Header({ quickSortOnClick, mergeSortOnClick, bubbleSortOnClick, randomArray, rangeChange }) {


    return (
        <Wrapper>
            <Button disabled>Sorting Visualizer</Button>
            <Button onClick={randomArray}>Random Array</Button>
            <Button onClick={rangeChange}>Change Size</Button>
            <Button onClick={mergeSortOnClick}>Merge Sort</Button>
            <Button onClick={quickSortOnClick}>Quick Sort</Button>
            <Button onClick={bubbleSortOnClick}>Bubble Sort</Button>
            <Button >Heap Sort</Button>

        </Wrapper>
        // <Wrapper>
        //     <Button onClick={() => console.log("Clicked")}>Generate New Array</Button>
        //     <Button onClick={rangeChange}>Input Array Range</Button>
        //     <SortWrapper>
        //         <Button onClick={() => console.log("Clicked")}>Merge </Button>
        //         <Button onClick={() => console.log("Clicked")}>Quick </Button>
        //         <Button onClick={() => console.log("Clicked")}>Bubble </Button>
        //         <Button onClick={() => console.log("Clicked")}>Heap </Button>
        //     </SortWrapper>
        // </Wrapper>
    );
}