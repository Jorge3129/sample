import {useState} from 'react'
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const f = () => ["a", "b"];

function App() {

    const [input, setInput] = useState("");
    const [a, b] = f()

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
