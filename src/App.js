import {BrowserRouter, Route, Routes} from "react-router-dom";
import Credit from "./components/credit/Credit";
import Lending from "./components/lending/Lending";

function App() {

    return (<div className="App">
        <BrowserRouter basename="/">
            <Routes>

                {/* Brasil */}
                <Route path={"/quiz-cartao"} element={<Credit
                    redirectFinal={"?utm_source=gdn-cart"}
                    lang={"pt-BR"}/>}/>
                <Route path={"/quiz-cartao-fb"} element={<Credit
                    redirectFinal={"?utm_source=fb-cart"}
                    lang={"pt-BR"}/>}/>
                <Route path={"/quiz-cartao-tk"} element={<Credit
                    redirectFinal={"?utm_source=tiktok-cart"}
                    lang={"pt-BR"}/>}/>
                <Route path={"/quiz-cartao-tab"} element={<Credit
                    redirectFinal={"?utm_source=tab-cart"}
                    lang={"pt-BR"}/>}/>

                <Route path={"/quiz-emprestimo"} element={<Lending
                    redirectFinal={"?utm_source=gdn-emp"}
                    lang={"pt-BR"}/>}/>
                <Route path={"/quiz-emprestimo-fb"} element={<Lending
                    redirectFinal={"?utm_source=fb-emp"}
                    lang={"pt-BR"}/>}/>
                <Route path={"/quiz-emprestimo-mx-tk"} element={<Lending
                    redirectFinal={"?utm_source=tiktok-emp"}
                    lang={"pt-BR"}/>}/>
                <Route path={"/quiz-emprestimo-tab"} element={<Lending
                    redirectFinal={"?utm_source=tab-emp"}
                    lang={"pt-BR"}/>}/>

                {/* Espanha */}
                <Route path={"/es/quiz-cartao"} element={<Credit
                    redirectFinal={"?utm_source=gdn-cart-esp"} lang={"es-ES"}/>}/>
                <Route path={"/es/quiz-cartao-fb"} element={<Credit
                    redirectFinal={"?utm_source=fb-cart-esp"} lang={"es-ES"}/>}/>
                <Route path={"/es/quiz-cartao-tk"} element={<Credit
                    redirectFinal={"?utm_source=tiktok-cart-esp"} lang={"es-ES"}/>}/>
                <Route path={"/es/quiz-cartao-tab"} element={<Credit
                    redirectFinal={"?utm_source=tab-cart-esp"} lang={"es-ES"}/>}/>

                <Route path={"/es/quiz-emprestimo"} element={<Lending
                    redirectFinal={"?utm_source=gdn-emp-esp"} lang={"es-ES"}/>}/>
                <Route path={"/es/quiz-emprestimo-fb"} element={<Lending
                    redirectFinal={"?utm_source=fb-emp-esp"} lang={"es-ES"}/>}/>
                <Route path={"/es/quiz-emprestimo-tk"} element={<Lending
                    redirectFinal={"?utm_source=tiktok-emp-esp"} lang={"es-ES"}/>}/>
                <Route path={"/es/quiz-emprestimo-tab"} element={<Lending
                    redirectFinal={"?utm_source=tab-emp-esp"} lang={"es-Es"}/>}/>

                {/* EUA */}

                <Route path={"/en-us/quiz-cartao"} element={<Credit
                    redirectFinal={"?utm_source=gdn-cart-en-us"} lang={"en-US"}/>}/>
                <Route path={"/en-us/quiz-cartao-fb"} element={<Credit
                    redirectFinal={"?utm_source=fb-cart-en-us"} lang={"en-US"}/>}/>
                <Route path={"/en-us/quiz-cartao-tk"} element={<Credit
                    redirectFinal={"?utm_source=tiktok-cart-en-us"} lang={"en-US"}/>}/>
                <Route path={"/en-us/quiz-cartao-tab"} element={<Credit
                    redirectFinal={"?utm_source=tab-cart-en-us"} lang={"en-US"}/>}/>

                <Route path={"/en-us/quiz-emprestimo"} element={<Lending
                    redirectFinal={"?utm_source=gdn-emp-en-us"} lang={"en-US"}/>}/>
                <Route path={"/en-us/quiz-emprestimo-fb"} element={<Lending
                    redirectFinal={"?utm_source=fb-emp-en-us"} lang={"en-US"}/>}/>
                <Route path={"/en-us/quiz-emprestimo-tk"} element={<Lending
                    redirectFinal={"?utm_source=tiktok-emp-en-us"} lang={"en-US"}/>}/>
                <Route path={"/en-us/quiz-emprestimo-tab"} element={<Lending
                    redirectFinal={"?utm_source=tab-emp-en-us"} lang={"en-US"}/>}/>

                {/* Chile */}

                <Route path={"/es-cl/quiz-cartao"} element={<Credit
                    redirectFinal={"?utm_source=gdn-cart-chile"} lang={"es-CL"}/>}/>
                <Route path={"/es-cl/quiz-cartao-fb"} element={<Credit
                    redirectFinal={"?utm_source=fb-cart-chile"} lang={"es-CL"}/>}/>
                <Route path={"/es-cl/quiz-cartao-tk"} element={<Credit
                    redirectFinal={"?utm_source=tiktok-cart-chile"} lang={"es-CL"}/>}/>
                <Route path={"/es-cl/quiz-cartao-tab"} element={<Credit
                    redirectFinal={"?utm_source=tab-cart-chile"} lang={"es-CL"}/>}/>

                <Route path={"/es-cl/quiz-emprestimo"} element={<Lending
                    redirectFinal={"?utm_source=gdn-emp-chile"} lang={"es-CL"}/>}/>
                <Route path={"/es-cl/quiz-emprestimo-fb"} element={<Lending
                    redirectFinal={"?utm_source=fb-emp-chile"} lang={"es-CL"}/>}/>
                <Route path={"/es-cl/quiz-emprestimo-tk"} element={<Lending
                    redirectFinal={"?utm_source=tiktok-emp-chile"} lang={"es-CL"}/>}/>
                <Route path={"/es-cl/quiz-emprestimo-tab"} element={<Lending
                    redirectFinal={"?utm_source=tab-emp-chile"} lang={"es-CL"}/>}/>

                {/* Colombia */}

                <Route path={"/es-co/quiz-cartao"} element={<Credit
                    redirectFinal={"?utm_source=gdn-cart-col"} lang={"es-CO"}/>}/>
                <Route path={"/es-co/quiz-cartao-fb"} element={<Credit
                    redirectFinal={"?utm_source=fb-cart-col"} lang={"es-CO"}/>}/>
                <Route path={"/es-co/quiz-cartao-tk"} element={<Credit
                    redirectFinal={"?utm_source=tiktok-cart-col"} lang={"es-CO"}/>}/>
                <Route path={"/es-co/quiz-cartao-tab"} element={<Credit
                    redirectFinal={"?utm_source=tab-cart-col"} lang={"es-CO"}/>}/>

                <Route path={"/es-co/quiz-emprestimo"} element={<Lending
                    redirectFinal={"?utm_source=gdn-emp-col"} lang={"es-CO"}/>}/>
                <Route path={"/es-co/quiz-emprestimo-fb"} element={<Lending
                    redirectFinal={"?utm_source=fb-emp-col"} lang={"es-CO"}/>}/>
                <Route path={"/es-co/quiz-emprestimo-tk"} element={<Lending
                    redirectFinal={"?utm_source=tiktok-emp-col"} lang={"es-CO"}/>}/>
                <Route path={"/es-co/quiz-emprestimo-tab"} element={<Lending
                    redirectFinal={"?utm_source=tab-emp-col"} lang={"es-CO"}/>}/>

                {/* Mexico */}

                <Route path={"/es-mx/quiz-cartao"} element={<Credit
                    redirectFinal={"?utm_source=gdn-cart-mx"} lang={"es-MX"}/>}/>
                <Route path={"/es-mx/quiz-cartao-fb"} element={<Credit
                    redirectFinal={"?utm_source=fb-cart-mx"} lang={"es-MX"}/>}/>
                <Route path={"/es-mx/quiz-cartao-tk"} element={<Credit
                    redirectFinal={"?utm_source=tiktok-cart-mx"} lang={"es-MX"}/>}/>
                <Route path={"/es-mx/quiz-cartao-tab"} element={<Credit
                    redirectFinal={"?utm_source=tab-cart-mx"} lang={"es-MX"}/>}/>


                <Route path={"/es-mx/quiz-emprestimo"} element={<Lending
                    redirectFinal={"?utm_source=gdn-emp-mx"} lang={"es-MX"}/>}/>
                <Route path={"/es-mx/quiz-emprestimo-fb"} element={<Lending
                    redirectFinal={"?utm_source=fb-emp-mx"} lang={"es-MX"}/>}/>
                <Route path={"/es-mx/quiz-emprestimo-tk-mx"} element={<Lending
                    redirectFinal={"?utm_source=tiktok-emp-mx"} lang={"es-MX"}/>}/>
                <Route path={"/es-mx/quiz-emprestimo-tab"} element={<Lending
                    redirectFinal={"?utm_source=tab-emp-mx"} lang={"es-MX"}/>}/>

                {/* Peru */}

                <Route path={"/es-pe/quiz-cartao"} element={<Credit
                    redirectFinal={"?utm_source=gdn-cart-peru"} lang={"es-PE"}/>}/>
                <Route path={"/es-pe/quiz-cartao-fb"} element={<Credit
                    redirectFinal={"?utm_source=fb-cart-peru"} lang={"es-PE"}/>}/>
                <Route path={"/es-pe/quiz-cartao-tk"} element={<Credit
                    redirectFinal={"?utm_source=tiktok-cart-peru"} lang={"es-PE"}/>}/>
                <Route path={"/es-pe/quiz-cartao-tab"} element={<Credit
                    redirectFinal={"?utm_source=tab-cart-peru"} lang={"es-PE"}/>}/>

                <Route path={"/es-pe/quiz-emprestimo"} element={<Lending
                    redirectFinal={"?utm_source=gdn-emp-peru"} lang={"es-PE"}/>}/>
                <Route path={"/es-pe/quiz-emprestimo-fb"} element={<Lending
                    redirectFinal={"?utm_source=fb-emp-peru"} lang={"es-PE"}/>}/>
                <Route path={"/es-pe/quiz-emprestimo-tk"} element={<Lending
                    redirectFinal={"?utm_source=tiktok-emp-peru"} lang={"es-PE"}/>}/>
                <Route path={"/es-pe/quiz-emprestimo-tab"} element={<Lending
                    redirectFinal={"?utm_source=tab-emp-peru"} lang={"es-PE"}/>}/>

                {/* Africa do Sul */}

                <Route path={"/en-za/quiz-cartao"} element={<Credit
                    redirectFinal={"?utm_source=gdn-cart-en-as"} lang={"en-AZ"}/>}/>
                <Route path={"/en-za/quiz-cartao-fb"} element={<Credit
                    redirectFinal={"?utm_source=fb-cart-en-as"} lang={"en-AZ"}/>}/>
                <Route path={"/en-za/quiz-cartao-tk"} element={<Credit
                    redirectFinal={"?utm_source=tiktok-cart-en-as"} lang={"en-AZ"}/>}/>
                <Route path={"/en-za/quiz-cartao-tab"} element={<Credit
                    redirectFinal={"?utm_source=tab-cart-en-as"} lang={"en-AZ"}/>}/>

                <Route path={"/en-za/quiz-emprestimo"} element={<Lending
                    redirectFinal={"?utm_source=gdn-emp-en-as"} lang={"en-AZ"}/>}/>
                <Route path={"/en-za/quiz-emprestimo-fb"} element={<Lending
                    redirectFinal={"?utm_source=fb-emp-en-as"} lang={"en-AZ"}/>}/>
                <Route path={"/en-za/quiz-emprestimo-tk"} element={<Lending
                    redirectFinal={"?utm_source=tiktok-emp-en-as"} lang={"en-AZ"}/>}/>
                <Route path={"/en-za/quiz-emprestimo-tab"} element={<Lending
                    redirectFinal={"?utm_source=tab-emp-en-as"} lang={"en-AZ"}/>}/>


                <Route path={"*"} element={<Credit
                    redirectFinal={"?utm_source=gdn-cart"} lang={"pt-BR"}/>}/>
            </Routes>
        </BrowserRouter>
    </div>);
}

export default App;
