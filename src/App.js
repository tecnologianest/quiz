import {BrowserRouter, Route, Routes} from "react-router-dom";
import Credit from "./components/credit/Credit";
import Lending from "./components/lending/Lending";
import {useState} from "react";

function App() {
    //altere aqui a url de redirecionamento
    const urlRedirectLending = "https://estoaresearch.com/ideal-para-voce/emprestimo-sim-a-solucao-ideal-para-negativados/?utm_source=gdn-emp";
    const urlRedirectCreditCard = "https://estoaresearch.com/ideal-para-voce/conheca-o-cartao-superdigital-perfeito-para-quem-esta-negativado/?utm_source=gdn-cart";
    const [url] = useState(window.location.pathname);
    const [trataUrl] = useState(url.split("/"));

    if(trataUrl.length > 2){
        const urlTotal = window.location.protocol + "//" +
            window.location.host + '/' + trataUrl[1]
        window.location.href = urlTotal;
    }

    const listCredit = 3;
    const listLending = 2;
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>

                    <Route path={"/"} element={<Credit redirectFinal={urlRedirectCreditCard} list={listCredit}/>}/>
                    <Route path={"/quiz-cartao-2022"} element={<Credit redirectFinal={urlRedirectCreditCard} list={listCredit}/>}/>
                    <Route path={"/quiz-cartao-gdn-brasil-13"} element={<Credit redirectFinal={urlRedirectCreditCard} list={listCredit}/>}/>
                    <Route path={"/quiz-cartao-tab"}
                           element={<Credit redirectFinal={urlRedirectCreditCard} list={listCredit}/>}/>
                    <Route path={"/quiz-cartao-tab-2"} element={<Credit redirectFinal={urlRedirectCreditCard} list={listCredit}/>}/>

                    <Route path={"/1-2"} element={<Lending redirectFinal={urlRedirectLending} list={listLending}/>}/>
                    <Route path={"/quiz-emprestimo-gdn-brasil-13"} element={<Lending redirectFinal={urlRedirectLending} list={listLending}/>}/>
                    <Route path={"/quiz-emprestimo-tab"} element={<Lending redirectFinal={urlRedirectLending} list={listLending}/>}/>

                    <Route path={"/quiz-cartao-2022/"} element={<Credit redirectFinal={urlRedirectCreditCard} list={listCredit}/>}/>
                    <Route path={"/quiz-cartao-gdn-brasil-13/"} element={<Credit redirectFinal={urlRedirectCreditCard} list={listCredit}/>}/>
                    <Route path={"/quiz-cartao-tab/"}
                           element={<Credit redirectFinal={urlRedirectCreditCard} list={listCredit}/>}/>
                    <Route path={"/quiz-cartao-tab-2/"} element={<Credit redirectFinal={urlRedirectCreditCard} list={listCredit}/>}/>

                    <Route path={"/1-2/"} element={<Lending redirectFinal={urlRedirectLending} list={listLending}/>}/>
                    <Route path={"/quiz-emprestimo-gdn-brasil-13/"} element={<Lending redirectFinal={urlRedirectLending} list={listLending}/>}/>
                    <Route path={"/quiz-emprestimo-tab/"} element={<Lending redirectFinal={urlRedirectLending} list={listLending}/>}/>


                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
