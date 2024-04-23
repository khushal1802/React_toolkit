import { useEffect } from 'react';
import './App.css';
import Header from './layout/Header';
import Main from './layout/Main';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from './Reducer/allCategorySlice';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import CardDetail from './component/CardDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import Abc from './component/Abc';
import Success from './component/Success';
import Cancel from './component/Cancel';

function App() {
  const dispatch = useDispatch()

  const state = useSelector(state => state.alldata)


  useEffect(() => {
    dispatch(getProduct())
  }, [])

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Navigate to='/main' />} />
        <Route path='/cart' element={<CardDetail />} />
        <Route path='/main' element={<Main />} />
        <Route path='/abc' element={<Abc />} />
        <Route path='/success' element={<Success />} />
        <Route path='/cancel' element={<Cancel />} />
      </Routes>
    </>
  );
}

export default App;
