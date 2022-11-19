import Header from "../Header";
import Footer from "../Footer";
import { Routes, Route } from 'react-router-dom';
import PageCategories from "../../pages/PageCategories";
import MainPage from "../../pages/MainPage";
import BasketPage from "../../pages/BasketPage";

function App() {

  return (
    <div>
      <Header />

      <Routes>
        <Route path='/all_categories' element={<PageCategories />} />
        <Route path='/garden_project_main_page' element={<MainPage />} />
        <Route path='/basket' element={<BasketPage/>}/>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
