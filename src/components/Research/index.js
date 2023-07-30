import Input from '../Input';
import { useState } from 'react';
import { dataSource } from './dataSource';
import styled from 'styled-components';

const SectionContainer = styled.section`
        background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
        color: #FFF;
        text-align: center;
        padding: 85px 0;
        height: 270px;
        width: 100%;
`

const Title = styled.h2`
        color: #FFF;
        font-size: 36px;
        text-align: center;
        width: 100%;
`

const Subtitle = styled.h3`
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 40px;

`

const ResultContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

function Research () {

  const [typedText, setTypedText] = useState([])

  return (
    <SectionContainer>
      <Title>Já sabe por onde começar ?</Title>
      <Subtitle>Use o campo abaixo para encontra o deseja.</Subtitle>
      <Input 
        placeholder='Pesquisa'
        onBlur={ event => {
          const textResearch = event.target.value
          const searchResult = dataSource.filter( livro => livro.name.includes(textResearch))
          setTypedText(searchResult)
        }}
      />

      { typedText.map(livro => (
        <ResultContainer>
            <img src={livro.src}/>
            <p>{livro.name}</p>
        </ResultContainer>
      ))}
    </SectionContainer>
  )
}

export default Research;