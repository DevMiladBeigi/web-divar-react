import ContainerPage from "./components/container/ContainerPage";
import GlobalStyles from "./components/globalStyles/GlobalStyles";
import LocationModalContainer from '../src/components/header/locations/locationModal/LocationModalContainer'
function App() {
  return (
    <>
      <GlobalStyles />
      <ContainerPage />
      <LocationModalContainer/>
    </>
  );
}

export default App;
