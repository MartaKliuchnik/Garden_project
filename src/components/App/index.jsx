import { Context } from "../../context";
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route, useLocation } from 'react-router-dom';
import PageCategories from "../../pages/PageCategories";
import MainPage from "../../pages/MainPage";
import BasketPage from "../../pages/BasketPage";
import NotFoundPage from '../../pages/NotFoundPage';
import Layout from "../Layout";
import ProductsContainer from "../ProductsContainer";
import PageProductDescription from "../../pages/PageProductDescription";
import { loadCategories } from '../../store/asyncActions/categories';
import FormModal from "../FormModal";
import { loadProducts } from "../../store/asyncActions/products";

function App() {
  const [modalActive, setModalActive] = useState(false);
  const categories = useSelector(state => state.categories);
  const dispatch = useDispatch();

  const location = useLocation();
  // console.log(location)
  const background = location.state && location.state.background;
  
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

    useEffect(() => {
      dispatch(loadCategories());
      dispatch(loadProducts())
    }, [])
  
  window.addEventListener('resize', check_size);

  return ( 
    
    <Context.Provider value={{
      categories,
      slider_container,
      shift_left,
      shift_right,
      modalActive,
      setModalActive
    }}>
      
      
      <Routes location={background || location}>
        <Route path='/' element={<Layout/>}>
          <Route index element={<MainPage/>}/>
          <Route path='/all_categories' element={<PageCategories />} />
          <Route path='/basket' element={<BasketPage />} />

          <Route path='/all_categories/categories/:id_category' element={<ProductsContainer />} />
          <Route path='/categories/:id_category' element={<ProductsContainer />} />

          <Route path='/all_categories/categories/:id_category/product/:id_product' element={<PageProductDescription/>}/>
          <Route path='/categories/:id_category/product/:id_product' element={<PageProductDescription />} />
          <Route path='/product/:id_product' element={<PageProductDescription />} />

          <Route path='registration' element={<FormModal type_form='registration' />}/>
          <Route path='/login' element={<FormModal type_form='login' />} />
          <Route path='/reset_password' element={<FormModal type_form='reset_password' />} />
          
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>

      {background && (
        <Routes>
          <Route path='registration' 
            element={<FormModal type_form='registration' />}/>
          <Route path='login' 
            element={<FormModal type_form='login' />} />
          <Route path='reset_password' 
            element={<FormModal type_form='reset_password' />} />
        </Routes>
      )}
    </Context.Provider>
  );
}

export default App;
