import { Route, Routes } from "react-router-dom";
import EmptyCard from "./components/EmptyCard/EmptyCard";
import Layout from "./components/Layout/Layout";
import Main from "./components/Main/Main";



const App = () => {
  return (

    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<EmptyCard />} />
        <Route path='main/:holiday' element={<Main />} />
      </Route>
      <Route path='singleCard/:idText/:idImg' element={<Main/>}/>
    </Routes>

  );
}

export default App;
