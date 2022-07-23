import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Main from "./Main";
import "./App.style.css";
import { sleep } from "../helpers";
import { bubbleSort, mergeSort, quickSort } from "../helpers/sorts";

function App() {

  const [size, setSize] = useState(10);
  const [arr, setArr] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [currentNext, setCurrentNext] = useState(null);

  useEffect(() => {
    updateList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size]);

  // useEffect(() => {
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [arr]);

  const updateList = () => {
    const randomArr = Array.from({ length: size }, () =>
      generateRandomInteger(50, 500)
    );
    setArr(randomArr);
  };

  const generateRandomInteger = (min, max) => {
    return Math.floor(min + Math.random() * (max + 1 - min))
  }

  const rangeChange = () => {
    const range = prompt("Enter the size of the array ( between 5 to 100)");
    if (range < 5 || range > 100) {
      rangeChange();
    } else {
      setSize(range);
    }

  };

  const generateRandomArray = () => {
    const sizeOfList = generateRandomInteger(5, 100);
    const randomArr = Array.from({ length: sizeOfList }, () =>
      generateRandomInteger(50, 500)
    );
    setArr(randomArr);
  };

  const bubbleOnClick = async () => {
    // const sortedArr = bubbleSort(arr);
    // const inputArr = arr;
    let len = arr.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        setCurrentIndex(arr[i]);
        setCurrentNext(arr[j] + 1);
        if (arr[j] > arr[j + 1]) {
          let tmp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = tmp;
          setArr([...arr]);
        }
      }
      await sleep(2000);
    }
  }

  const mergeOnClick = () => {
    const sortedArr = mergeSort(arr);
    const new_arr = [...sortedArr];
    setArr(new_arr);
    console.log(new_arr);
  }

  const quickOnClick = () => {
    const sortedArr = quickSort(arr);
    const new_arr = [...sortedArr];
    setArr(new_arr);
    console.log(new_arr);
  }

  return (
    <div className="App">
      <Header
        rangeChange={rangeChange}
        randomArray={generateRandomArray}
        bubbleSortOnClick={bubbleOnClick}
        mergeSortOnClick={mergeOnClick}
        quickSortOnClick={quickOnClick}
      />
      <Main data={arr} currentIndex={currentIndex} nextIndex={currentNext} />
    </div>
  );
}

export default App;
