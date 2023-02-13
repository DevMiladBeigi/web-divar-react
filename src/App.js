import ContainerPage from "./components/container/ContainerPage";
import GlobalStyles from "./components/globalStyles/GlobalStyles";
import Container from "./components/secondPage/Container";
import { CategoryContext } from "./components/context/categoryContext";
import { useContext } from "react";

function App() {
  const { isShow } = useContext(CategoryContext);

  return (
    <>
      {isShow ? <Container /> : null}
      <GlobalStyles />
      {isShow ? null : <ContainerPage />}
    </>
  );
}

export default App;
