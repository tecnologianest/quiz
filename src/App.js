import {BrowserRouter, Route, Routes} from "react-router-dom";
import Credit from "./components/credit/Credit";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Credit/>}/>
                    <Route path={"/lending"} element={""}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
