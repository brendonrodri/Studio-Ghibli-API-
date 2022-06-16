import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components"

const Container = styled.section`
  width: 100%;
  div{
    display: flex;
    margin: 20px;
 
  }
  
  img{
    width: 20vw;
    height: 50vh;
  }
`
const FilmeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p{
    width: 40%;
    text-align: justify;
  }

`

export default function Api() {
  const [film, setFilm] = useState([]);
  useEffect(()=>{
    filmes()
  },[])
  const filmes = () => {
    axios.get("https://ghibliapi.herokuapp.com/films").then((response) => {
      console.log(response.data);
      setFilm(response.data);
    });
  };
  return (
    <Container>
      {film.map((item) => (
        <div>
          {" "}
          
          <FilmeContainer>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description} </p>
            <p><b>Ano de lançamento:</b> {item.release_date} </p>
          </FilmeContainer>
         
        </div>
      ))}
    </Container>
  );
}