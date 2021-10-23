import './App.css';
import Header from './components/shared/Header/Header';
import Footer from './components/shared/Footer/Footer';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import ListFood from '../src/components/structure/ListFood/ListFood';
import Search from '../src/components/structure/SearchFood/SearchFood';
import ServiceFood from '../src/components/structure/ServiceFood/ServiceFood';
import BlogFood from '../src/components/structure/BlogFood/BlogFood';
import JoinFood from '../src/components/structure/JoinFood/JoinFood';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home />
      <Search />
      <ListFood />     
      <ServiceFood /> 
      <BlogFood />
      <JoinFood />
      <Footer/>
    </div>
  );
}

export default App;