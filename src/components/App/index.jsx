import { Context } from "../../context";
import { useState, useEffect, useRef } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Routes, Route } from 'react-router-dom';
import PageCategories from "../../pages/PageCategories";
import MainPage from "../../pages/MainPage";
import BasketPage from "../../pages/BasketPage";
import NotFoundPage from '../../pages/NotFoundPage'
import { get_all_categories } from "../../requests/products";


function App() {

  const [categories, setCategories] = useState([]);

  const slider_container = useRef();

  let slide_number = 0;

  let slide_width = 0;
  if (window.innerWidth >= 1440) {
    slide_width = 1392
  } else if (window.innerWidth >= 1200 || window.innerWidth < 1440) {
    slide_width = 1227
  }


  const shift_left = () => {
    if (slide_width === 1392) {
      if (slide_number > 0) {
        slider_container.current.style.left = --slide_number * (-slide_width) + 'px'
      } else {
        slide_number = categories.length / 4 - 1;
        slider_container.current.style.left = slide_number * (-slide_width) + 'px'
      }
    } else if (slide_width === 1227) {
      if (slide_number > 0) {
        slider_container.current.style.left = --slide_number * (-slide_width) + 'px'
      } else {
        slide_number = categories.length / 3 - 1;
        slider_container.current.style.left = slide_number * (-slide_width) + 'px'
      }
    }
  }

  const shift_right = () => {
    if (slide_width === 1392) {
        if (slide_number < categories.length / 4 - 1) {
          slider_container.current.style.left = ++slide_number * (-slide_width) + 'px'
        } else {
          slide_number = 0;
          slider_container.current.style.left = slide_number * (-slide_width) + 'px'
      }
    } else if (slide_width === 1227) {
      if (slide_number < categories.length / 3 - 1) {
      slider_container.current.style.left = ++slide_number * (-slide_width) + 'px'
      } else {
        slide_number = 0;
        slider_container.current.style.left = slide_number * (-slide_width) + 'px'
      }
    }
  }

  useEffect(() => {
    get_all_categories(setCategories);
  }, [])
  
  return (
    <Context.Provider value={{categories, slider_container, shift_left, shift_right}}>
      <Header />

      <Routes>
        <Route path='/all_categories' element={<PageCategories/>} />
        <Route path='/garden_project_main_page' element={<MainPage/>} />
        <Route path='/basket' element={<BasketPage/>} />
        <Route path='/*' element={<NotFoundPage/>}/>
      </Routes>

      <Footer />
    </Context.Provider>
  );
}

export default App;
