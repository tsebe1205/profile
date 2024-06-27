import logo from './logo.svg';
import './App.css';
import {Main} from "./components/Main"
import {Nav}from "./components/Nav"
import {About} from "./components/About"
import {Skills} from "./components/Skills"
import {Experience} from "./components/Experience"
import {Work} from "./components/Work"
import {Footer} from './components/Footer';


function App() {
  return (
    
<div>
<Nav/>
<Main/>
<About/>
<Skills/>
<Experience/>
<Work/>
<Footer/>
</div>
  );
}

export default App;
