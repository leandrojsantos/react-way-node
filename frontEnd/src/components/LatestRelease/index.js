import { dataSource } from './dataSource';
import { Title } from '../Title';
import CardRecommends from '../CardRecommends';
import imagemLivro from '../../images/livro2.png';
import styled from 'styled-components'

const LatestReleaseContainer = styled.section`
  background-color: #EBECEE;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`

const NewLatestContainer = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: pointer;
`

function LatestRelease(){
  return(
    <LatestReleaseContainer>
      <Title
        colour={"#EB9B00"}
        fontSize={"36px"}
        >ÚLTIMOS LANÇAMENTOS
      </Title>
      <NewLatestContainer>
          { dataSource.map( livro => (
              <img src={livro.src}/>
          ))}
      </NewLatestContainer>
      <CardRecommends
        title="Talvez você se interesse por"
        subtitle="Angular 11"
        description="Construindo uma aplicação com a plataforma Google"
        image={imagemLivro}
      />
    </LatestReleaseContainer>
  )
}

export default LatestRelease