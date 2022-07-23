import styled from 'styled-components';

export const Button = styled.p`
color: #fff;
cursor :pointer;
font-size; 12px;
font-family: Arial, Helvetica, sans-serif;
line-height:20px;
&:hover{
color: #000;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-conten: center;
    justify-content: space-evenly;
    height: 50px;
    width: 100%;
    background-color: #FA5 ;
    padding-left: 25px;
    padding-right: 25px;
    
`
export const SortWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-content: center;
    width: 300px;
    justify-content: space-evenly;
   
`

export const RangeWrapper = styled.div`
   
    align-conten: center;
    width: 200px;
    justify-content: space-evenly;
   
`

// color: #14CCA7;