import {BrowserRouter, Route, Routes} from "react-router-dom";
import Credit from "./components/credit/Credit";
import Lending from "./components/lending/Lending";
import {useState} from "react";
import credit from "./components/credit/Credit";

function App() {
    //altere aqui a url de redirecionamento
    const [url] = useState(window.location.pathname);
    const [trataUrl] = useState(url.split("/"));

    if(trataUrl.length > 2){
        const urlTotal = window.location.protocol + "//" +
            window.location.host + '/' + trataUrl[1]
        window.location.href = urlTotal;
    }

    const listCredit = 8;
    const listLending = 7;
    const lendingName = "formdoemprestimo"
    const creditName = "formdocartcredito"
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>

                    <Route path={"/"} element={<Credit redirectFinal={"https://estoaresearch.com/ideal-para-voce/conheca-o-cartao-superdigital-perfeito-para-quem-esta-negativado/?utm_source=gdn-cart"} list={listCredit}/>}/>

                    <Route path={"/quiz-cartao"} element={<Credit redirectFinal={"https://estoaresearch.com/ideal-para-voce/conheca-o-cartao-superdigital-perfeito-para-quem-esta-negativado/?utm_source=gdn-cart"} list={listCredit} nameForm={creditName}/>}/>
                    <Route path={"/quiz-cartao-fb"} element={<Credit redirectFinal={"https://estoaresearch.com/ideal-para-voce/conheca-o-cartao-superdigital-perfeito-para-quem-esta-negativado/?utm_source=fb-cart"} list={listCredit} nameForm={creditName}/>}/>
                    <Route path={"/quiz-cartao-tk"} element={<Credit redirectFinal={"https://estoaresearch.com/ideal-para-voce/conheca-o-cartao-superdigital-perfeito-para-quem-esta-negativado/?utm_source=tiktok-cart"} list={listCredit} nameForm={creditName}/>}/>
                    <Route path={"/quiz-cartao-tab"} element={<Credit redirectFinal={"https://estoaresearch.com/ideal-para-voce/conheca-o-cartao-superdigital-perfeito-para-quem-esta-negativado/?utm_source=tab-cart"} list={listCredit} nameForm={creditName}/>}/>

                    <Route path={"/quiz-emprestimo"} element={<Lending redirectFinal={"https://estoaresearch.com/ideal-para-voce/emprestimo-sim-a-solucao-ideal-para-negativados/?utm_source=gdn-emp"} list={listLending} nameForm={lendingName}/>}/>
                    <Route path={"/quiz-emprestimo-fb"} element={<Lending redirectFinal={"https://estoaresearch.com/ideal-para-voce/emprestimo-sim-a-solucao-ideal-para-negativados/?utm_source=fb-cart"} list={listLending} nameForm={lendingName}/>}/>
                    <Route path={"/quiz-emprestimo-tk"} element={<Lending redirectFinal={"https://estoaresearch.com/ideal-para-voce/emprestimo-sim-a-solucao-ideal-para-negativados/?utm_source=tiktok-cart"} list={listLending} nameForm={lendingName}/>}/>
                    <Route path={"/quiz-emprestimo-tab"} element={<Lending redirectFinal={"https://estoaresearch.com/ideal-para-voce/emprestimo-sim-a-solucao-ideal-para-negativados/?utm_source=tab-emp"} list={listLending} nameForm={lendingName}/>}/>

                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
