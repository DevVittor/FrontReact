import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Css
import './App.css';

//Pages
import Home from "./pages/Home";
import Category from './pages/Category';
import Article from './pages/Article';
import About from "./pages/About";
import Demo from "./pages/Demo";
import Error404 from "./pages/Error404";
//import Page from './pages/Page';

//Components
import NavBar from "./components/NavBar";
import Form from './components/Form';
import Shop from './pages/Shop';
//import ProductPage from './pages/ProductPage';


export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<NavBar/>}>
        <Route index exact element={<Home/>}/>
        <Route path="category" exact element={<Category/>} />
        <Route path="article" exact element={<Article/>} />
        <Route path="about" exact element={<About/>} />
        <Route path="products" exact element={<Form/>}/>
        <Route path="/:id" element={<Demo/>}/>
        <Route path="shop" exact element={<Shop/>}/>
        <Route path="*" element={<Error404/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

