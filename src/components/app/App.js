import './../../style/index.scss';
import './app.scss'
import Header from "../header/Header";
import Homepage from "../../pages/homepage/Homepage";
import Footer from "../footer/Footer";
function App() {
    return (
        <div>
            <Header/>
            <Homepage/>
            <Footer/>
        </div>
    )
}

export default App;