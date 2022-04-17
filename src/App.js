import {useState} from 'react'
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {

    const [input, setInput] = useState("");

    return (
        <div className="App">
            <Header/>
            Input: {input}
            <Main setInput={setInput}/>
            <Footer/>
        </div>
    );
}

export default App;
