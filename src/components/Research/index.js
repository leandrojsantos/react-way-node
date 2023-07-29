import Input from '../Input';
import { useState } from 'react';
import styled from 'styled-components'

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

function Research () {

  const [ typedText, setNewTypedText] = useState('')

  return (
    <SectionContainer>
      <Title>Já sabe por onde começar ?</Title>
      <Subtitle>Use o campo abaixo para encontra o deseja.</Subtitle>
      <Input 
        placeholder='Pesquisa'
        onBlur={event => setNewTypedText(event.target.value)}
      />
      <p>{typedText}</p>
    </SectionContainer>
  )
}

export default Research;