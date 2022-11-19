import { Context } from "../../context";
import { useState, useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Routes, Route } from 'react-router-dom';
import PageCategories from "../../pages/PageCategories";
import MainPage from "../../pages/MainPage";
import BasketPage from "../../pages/BasketPage";
import { get_all_categories } from "../../requests/products";

function App() {

  const [categories, setCategories] = useState([]);


  useEffect(() => {
    get_all_categories(setCategories)
  }, [])
  


  return (
    <Context.Provider value={{categories}}>
      <Header />

      <Routes>
        <Route path='/all_categories' element={<PageCategories />} />
        <Route path='/garden_project_main_page' element={<MainPage />} />
        <Route path='/basket' element={<BasketPage/>}/>
      </Routes>

      <Footer />
    </Context.Provider>
  );
}

export default App;
