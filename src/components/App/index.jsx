import { Context } from "../../context";
import { useState, useEffect, useRef } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Routes, Route } from 'react-router-dom';
import PageCategories from "../../pages/PageCategories";
import MainPage from "../../pages/MainPage";
import BasketPage from "../../pages/BasketPage";
import NotFoundPage from '../../pages/NotFoundPage';
import PageProducts from "../../pages/PageProducts";
import { get_all_categories } from "../../requests/categories";
import { get_all_products } from '../../requests/products';


function App() {

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const slider_container = useRef();

  let slide_number = 0;
  let slide_width = 0;

  function check_size() {
    if (window.innerWidth >= 1440) {
      slide_width = 348;

    } else if (window.innerWidth >= 1200 && window.innerWidth < 1440) {
      slide_width = 409;

    } else if (window.innerWidth >= 992 && window.innerWidth < 1200) {
      slide_width = 324;

    } else if (window.innerWidth >= 768 && window.innerWidth < 992) {
      slide_width = 384;

    } else if (window.innerWidth >= 576 || window.innerWidth < 768) {
      slide_width = 350;
    }
    return slide_width
  }
  check_size();

  const shift_left = () => {
    if (slide_width === 348) {
      if (slide_number > 0) {
        slider_container.current.style.left = --slide_number * (-slide_width) + 'px'
      } else {
        slide_number = categories.length - 4;
        slider_container.current.style.left = slide_number * (-slide_width) + 'px'
      }

    } else if (slide_width === 409 || slide_width === 324) {
      if (slide_number > 0) {
        slider_container.current.style.left = --slide_number * (-slide_width) + 'px'
      } else {
        slide_number = categories.length - 3;
        slider_container.current.style.left = slide_number * (-slide_width) + 'px'
      }

    } else if (slide_width === 384) {
      if (slide_number > 0) {
        slider_container.current.style.left = --slide_number * (-slide_width) + 'px'
      } else {
        slide_number = categories.length - 2;
        slider_container.current.style.left = slide_number * (-slide_width) + 'px'
      }

    } else if (slide_width === 350) {
      if (slide_number > 0) {
        slider_container.current.style.left = --slide_number * (-slide_width) + 'px'
      } else {
        slide_number = categories.length - 1;
        slider_container.current.style.left = slide_number + (-slide_width) + 'px'
      }
    } 
  }

  const shift_right = () => {
    if (slide_width === 348) {
      if (slide_number < categories.length - 4) {
          slider_container.current.style.left = ++slide_number * (-slide_width) + 'px'
        } else {
          slide_number = 0;
          slider_container.current.style.left = slide_number * (-slide_width) + 'px'
      }

    } else if (slide_width === 409 || slide_width === 324) {
      
      if (slide_number < categories.length - 3) {
        slider_container.current.style.left = ++slide_number * (-slide_width) + 'px'
      } else {
        slide_number = 0;
        slider_container.current.style.left = slide_number * (-slide_width) + 'px'
      }

    } else if (slide_width === 384) {
      if (slide_number < categories.length - 2) {
        slider_container.current.style.left = ++slide_number * (-slide_width) + 'px'
      } else {
        slide_number = 0;
        slider_container.current.style.left = slide_number * (-slide_width) + 'px'
      }

    } else if (slide_width === 350) {
      if (slide_number < categories.length - 1) {
        slider_container.current.style.left = ++slide_number * (-slide_width) + 'px'
      } else {
        slide_number = 0;
        slider_container.current.style.left = slide_number * (-slide_width) + 'px'
      }
    }
  }

  window.addEventListener('resize', check_size);
  
  useEffect(() => {
    get_all_categories(setCategories);
    get_all_products(setProducts);
  }, [])
  

  return (
    <Context.Provider value={{
      categories,
      slider_container,
      products,
      shift_left,
      shift_right
    }}>
      <Header />

      <Routes>
        <Route path='/all_categories' element={<PageCategories/>} />
        <Route path='/garden_project_main_page' element={<MainPage/>} />
        <Route path='/basket' element={<BasketPage />} />
        <Route path='/all_products' element={<PageProducts/>}/>
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </Context.Provider>
  );
}

export default App;
