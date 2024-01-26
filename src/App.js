import {Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>

            <Footer/>
        </div>
    );
}

export default App;
