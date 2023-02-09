import ContainerPage from "./components/container/ContainerPage";
import GlobalStyles from "./components/globalStyles/GlobalStyles";
import CategoryProvide from "./components/context/categoryContext";
import { Container } from "./components/myDivarModal/IdentityAccept/IdentityAcceptPage/Container";
function App() {
  return (
    <>
      <CategoryProvide>
    <Container/>
        <GlobalStyles />
        <ContainerPage />
      </CategoryProvide>
    </>
  );
}

export default App;
