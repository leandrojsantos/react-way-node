import styled from 'styled-components';

const textsHeader = ['CATEGORIAS','COMPRAS','FAVORITOS']

const OptionsContainer = styled.li`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;
`
const Options = styled.ul`
    margin-right: 40px;
    width: 25px;
`

function OptionsHeader() {
  return (
        <OptionsContainer>
          { textsHeader.map((loop)=>(
            <Options>
              <p>{loop}</p>
            </Options>
          ))}
        </OptionsContainer>
  )
}

export default OptionsHeader