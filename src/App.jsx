import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { ImgContextProvider } from "./context/imgContext";
import { TextContextProvider } from "./context/textContext";

const wrapper = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
};

const App = () => {
  return (
    <div style={wrapper}>
      <ImgContextProvider>
        <TextContextProvider>
          <Header />
          <Main />
          <Footer />
        </TextContextProvider>
      </ImgContextProvider>
    </div>
  );
}

export default App;
