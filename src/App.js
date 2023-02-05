import ContainerPage from "./components/container/ContainerPage";
import GlobalStyles from "./components/globalStyles/GlobalStyles";
import CategoryProvide from "./components/context/categoryContext";
function App() {
  return (
    <>
      <CategoryProvide>
        <GlobalStyles />
        <ContainerPage />
      </CategoryProvide>
    </>
  );
}

export default App;
