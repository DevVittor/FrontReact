import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Css
import './App.css';

//Pages
import Home from "./pages/Home";
import Category from './pages/Category';
import Article from './pages/Article';
import About from "./pages/About";
import Error404 from "./pages/Error404";
import Page from './pages/Page';

//Components
import NavBar from "./components/NavBar";
import Form from './components/Form';
import Shop from './pages/Shop';


export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<NavBar/>}>
        <Route index element={<Home/>}/>
        <Route path="category" element={<Category/>} />
        <Route path="article" element={<Article/>} />
        <Route path="about" element={<About/>} />
        <Route path="products" element={<Form/>}/>
        <Route path="products/:id" element={<Page/>}/>
        <Route path="shop" element={<Shop/>}/>
        <Route path="*" element={<Error404/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

