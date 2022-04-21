import {useState} from 'react'
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {Routes, Route} from "react-router"
import {BrowserRouter as Router} from "react-router-dom"
import About from "./components/About";

function App() {

    const [input, setInput] = useState("");

    return (
        <Router>
            <div className="App">
                <Header/>
                <Routes>
                    <Route path="/" element={<Main input={input} setInput={setInput}/>}/>
                    <Route path="/about" element={<About/>}/>
                </Routes>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
