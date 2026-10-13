import styled from "styled-components";

export const Input = styled.input`
width: 300px;
margin-left:auto;
margin-right:auto;
margin-top: 20px;
border-radius: 10px;
border: 1px solid grey;
padding: 10px;
`

export const List=styled.ul`
display:flex;
justify-content: center;
gap: 30px;
list-style: none;
flex-wrap: wrap;
`

export const Item=styled.li`
display: flex;
flex-direction: column;
padding: 20px;
border:1px solid white;
border-radius: 25px;
transition: all 250ms;

&:hover{
    box-shadow: 0 0 13px 0 white;
}
`

export const Button = styled.button`
background-color:lightblue;
border-radius:25px;
border: none;
color:grey;
padding:10px;`