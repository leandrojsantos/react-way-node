import Header from './components/Header';
import Research from './components/Research';
import LatestRelease from './components/LatestRelease';
import styled from 'styled-components';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589);
`

function App() {
  return (
    <AppContainer>
      <Header/>
      <Research/>
      <LatestRelease/>
    </AppContainer>
  );
}

export default App;
