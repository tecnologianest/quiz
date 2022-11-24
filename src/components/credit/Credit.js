import {useEffect, useState} from "react";
import logo from "../../assets/images/brand/logo.svg"
import arrowLeft from "../../assets/images/icons/arrow-left.svg"
import arrowRight from "../../assets/images/icons/arrow-right.svg"
import money1 from "../../assets/images/icons/money-1.svg"
import money2 from "../../assets/images/icons/money-2.svg"
import money3 from "../../assets/images/icons/money-3.svg"
import money4 from "../../assets/images/icons/money-4.svg"
import money5 from "../../assets/images/icons/money-5.svg"
import {ProgressBar} from "react-bootstrap";

const Credit = () => {
    const [initialStage, setInitialStage] = useState(0)
    const [progressNumber, setProgressNumber] = useState(0);


    useEffect(() => {
        const stageProgress = 100 / document.querySelectorAll(".stage").length;
        setInitialStage(stageProgress);
    }, []);

    return (
        <main>
            <header className={"container"}>
                <div className="row justify-content-center">
                    <div className="col-12 logo d-flex justify-content-center">
                        <img src={logo} alt=""/>
                    </div>
                    <div className="col progress-bar">
                        <div className="row row-cols-3 justify-content-center">
                            <div className="col-auto">
                                <button className={"btn p-0 d-flex"}>
                                    <img src={arrowLeft} alt=""/>
                                </button>
                            </div>
                            <div className="col-5 d-flex align-items-center">
                                <div className="col-12">
                                    <ProgressBar now={initialStage} animated/>
                                </div>
                            </div>
                            <div className="col-auto">
                                <button className={"btn p-0 d-flex"}>
                                    <img src={arrowRight} alt=""/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section className={"container stages"}>
                <div className="row">
                    <div className="col-12 stage one">
                        <div className="col box-title">
                            <h1>Descubra qual é o melhor empréstimo para você</h1>
                            <p>(Leva menos de 1 minuto)</p>
                        </div>
                        <div className="col box-interact">
                            <div className="row">
                                <div className="col d-flex align-items-center box-title">
                                    <h2>De quanto precisa?</h2>
                                </div>
                            </div>

                            <div className="col box-card">
                                <div className="row row-cols-3 row-cols-lg-5 g-2 g-lg-5 justify-content-center">

                                    <div className="col">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="col">
                                                    <div className="check"></div>
                                                </div>
                                                <div className="col d-flex justify-content-center">
                                                    <img src={money1} alt=""/>
                                                </div>
                                                <div className="col d-flex justify-content-center">
                                                    <p>Até R$ 1.000,00</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <div className="col">
                                                    <div className="check"></div>
                                                </div>
                                                <div className="col d-flex justify-content-center">
                                                    <img src={money2} alt=""/>
                                                </div>
                                                <div className="col d-flex justify-content-center">
                                                    <p>Até R$ 2.000,00</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <div className="col">
                                                    <div className="check"></div>
                                                </div>
                                                <div className="col d-flex justify-content-center">
                                                    <img src={money3} alt=""/>
                                                </div>
                                                <div className="col d-flex justify-content-center">
                                                    <p>Até R$ 5.000,00</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <div className="col">
                                                    <div className="check"></div>
                                                </div>
                                                <div className="col d-flex justify-content-center">
                                                    <img src={money4} alt=""/>
                                                </div>
                                                <div className="col d-flex justify-content-center">
                                                    <p>Até R$ 15.000,00</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <div className="col">
                                                    <div className="check"></div>
                                                </div>
                                                <div className="col d-flex justify-content-center">
                                                    <img src={money5} alt=""/>
                                                </div>
                                                <div className="col d-flex justify-content-center">
                                                    <p>Mais de R$
                                                        15.000,00</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 stage one">
                        <div className="col box-interact">
                            <div className="row">
                                <div className="col d-flex align-items-center box-title">
                                    <h2>De quanto precisa?</h2>
                                </div>
                            </div>

                            <div className="col box-card">
                                <div className="row row-cols-3 row-cols-lg-5 g-2 g-lg-5 justify-content-center">

                                    <div className="col">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="col">
                                                    <div className="check"></div>
                                                </div>
                                                <div className="col d-flex justify-content-center">
                                                    <img src={money1} alt=""/>
                                                </div>
                                                <div className="col d-flex justify-content-center">
                                                    <p>Até R$ 1.000,00</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <div className="col">
                                                    <div className="check"></div>
                                                </div>
                                                <div className="col d-flex justify-content-center">
                                                    <img src={money2} alt=""/>
                                                </div>
                                                <div className="col d-flex justify-content-center">
                                                    <p>Até R$ 2.000,00</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <div className="col">
                                                    <div className="check"></div>
                                                </div>
                                                <div className="col d-flex justify-content-center">
                                                    <img src={money3} alt=""/>
                                                </div>
                                                <div className="col d-flex justify-content-center">
                                                    <p>Até R$ 5.000,00</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <div className="col">
                                                    <div className="check"></div>
                                                </div>
                                                <div className="col d-flex justify-content-center">
                                                    <img src={money4} alt=""/>
                                                </div>
                                                <div className="col d-flex justify-content-center">
                                                    <p>Até R$ 15.000,00</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <div className="col">
                                                    <div className="check"></div>
                                                </div>
                                                <div className="col d-flex justify-content-center">
                                                    <img src={money5} alt=""/>
                                                </div>
                                                <div className="col d-flex justify-content-center">
                                                    <p>Mais de R$
                                                        15.000,00</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 stage one">
                        <div className="col box-interact">
                            <div className="row">
                                <div className="col d-flex align-items-center box-title">
                                    <h2>De quanto precisa?</h2>
                                </div>
                            </div>

                            <div className="col box-card">
                                <div className="row row-cols-3 row-cols-lg-5 g-2 g-lg-5 justify-content-center">

                                    <div className="col">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="col">
                                                    <div className="check"></div>
                                                </div>
                                                <div className="col d-flex justify-content-center">
                                                    <img src={money1} alt=""/>
                                                </div>
                                                <div className="col d-flex justify-content-center">
                                                    <p>Até R$ 1.000,00</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <div className="col">
                                                    <div className="check"></div>
                                                </div>
                                                <div className="col d-flex justify-content-center">
                                                    <img src={money2} alt=""/>
                                                </div>
                                                <div className="col d-flex justify-content-center">
                                                    <p>Até R$ 2.000,00</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <div className="col">
                                                    <div className="check"></div>
                                                </div>
                                                <div className="col d-flex justify-content-center">
                                                    <img src={money3} alt=""/>
                                                </div>
                                                <div className="col d-flex justify-content-center">
                                                    <p>Até R$ 5.000,00</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <div className="col">
                                                    <div className="check"></div>
                                                </div>
                                                <div className="col d-flex justify-content-center">
                                                    <img src={money4} alt=""/>
                                                </div>
                                                <div className="col d-flex justify-content-center">
                                                    <p>Até R$ 15.000,00</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <div className="col">
                                                    <div className="check"></div>
                                                </div>
                                                <div className="col d-flex justify-content-center">
                                                    <img src={money5} alt=""/>
                                                </div>
                                                <div className="col d-flex justify-content-center">
                                                    <p>Mais de R$
                                                        15.000,00</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 stage one">
                        <div className="col box-interact">
                            <div className="row">
                                <div className="col d-flex align-items-center box-title">
                                    <h2>De quanto precisa?</h2>
                                </div>
                            </div>

                            <div className="col box-card">
                                <div className="row row-cols-3 row-cols-lg-5 g-2 g-lg-5 justify-content-center">

                                    <div className="col">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="col">
                                                    <div className="check"></div>
                                                </div>
                                                <div className="col d-flex justify-content-center">
                                                    <img src={money1} alt=""/>
                                                </div>
                                                <div className="col d-flex justify-content-center">
                                                    <p>Até R$ 1.000,00</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <div className="col">
                                                    <div className="check"></div>
                                                </div>
                                                <div className="col d-flex justify-content-center">
                                                    <img src={money2} alt=""/>
                                                </div>
                                                <div className="col d-flex justify-content-center">
                                                    <p>Até R$ 2.000,00</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <div className="col">
                                                    <div className="check"></div>
                                                </div>
                                                <div className="col d-flex justify-content-center">
                                                    <img src={money3} alt=""/>
                                                </div>
                                                <div className="col d-flex justify-content-center">
                                                    <p>Até R$ 5.000,00</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <div className="col">
                                                    <div className="check"></div>
                                                </div>
                                                <div className="col d-flex justify-content-center">
                                                    <img src={money4} alt=""/>
                                                </div>
                                                <div className="col d-flex justify-content-center">
                                                    <p>Até R$ 15.000,00</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <div className="col">
                                                    <div className="check"></div>
                                                </div>
                                                <div className="col d-flex justify-content-center">
                                                    <img src={money5} alt=""/>
                                                </div>
                                                <div className="col d-flex justify-content-center">
                                                    <p>Mais de R$
                                                        15.000,00</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 stage one">
                        <div className="col box-interact">
                            <div className="row">
                                <div className="col d-flex align-items-center box-title">
                                    <h2>De quanto precisa?</h2>
                                </div>
                            </div>

                            <div className="col box-card">
                                <div className="row row-cols-3 row-cols-lg-5 g-2 g-lg-5 justify-content-center">

                                    <div className="col">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="col">
                                                    <div className="check"></div>
                                                </div>
                                                <div className="col d-flex justify-content-center">
                                                    <img src={money1} alt=""/>
                                                </div>
                                                <div className="col d-flex justify-content-center">
                                                    <p>Até R$ 1.000,00</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <div className="col">
                                                    <div className="check"></div>
                                                </div>
                                                <div className="col d-flex justify-content-center">
                                                    <img src={money2} alt=""/>
                                                </div>
                                                <div className="col d-flex justify-content-center">
                                                    <p>Até R$ 2.000,00</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <div className="col">
                                                    <div className="check"></div>
                                                </div>
                                                <div className="col d-flex justify-content-center">
                                                    <img src={money3} alt=""/>
                                                </div>
                                                <div className="col d-flex justify-content-center">
                                                    <p>Até R$ 5.000,00</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <div className="col">
                                                    <div className="check"></div>
                                                </div>
                                                <div className="col d-flex justify-content-center">
                                                    <img src={money4} alt=""/>
                                                </div>
                                                <div className="col d-flex justify-content-center">
                                                    <p>Até R$ 15.000,00</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <div className="col">
                                                    <div className="check"></div>
                                                </div>
                                                <div className="col d-flex justify-content-center">
                                                    <img src={money5} alt=""/>
                                                </div>
                                                <div className="col d-flex justify-content-center">
                                                    <p>Mais de R$
                                                        15.000,00</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 stage one">
                        <div className="col box-interact">
                            <div className="row">
                                <div className="col d-flex align-items-center box-title">
                                    <h2>De quanto precisa?</h2>
                                </div>
                            </div>

                            <div className="col box-card">
                                <div className="row row-cols-3 row-cols-lg-5 g-2 g-lg-5 justify-content-center">

                                    <div className="col">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="col">
                                                    <div className="check"></div>
                                                </div>
                                                <div className="col d-flex justify-content-center">
                                                    <img src={money1} alt=""/>
                                                </div>
                                                <div className="col d-flex justify-content-center">
                                                    <p>Até R$ 1.000,00</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <div className="col">
                                                    <div className="check"></div>
                                                </div>
                                                <div className="col d-flex justify-content-center">
                                                    <img src={money2} alt=""/>
                                                </div>
                                                <div className="col d-flex justify-content-center">
                                                    <p>Até R$ 2.000,00</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <div className="col">
                                                    <div className="check"></div>
                                                </div>
                                                <div className="col d-flex justify-content-center">
                                                    <img src={money3} alt=""/>
                                                </div>
                                                <div className="col d-flex justify-content-center">
                                                    <p>Até R$ 5.000,00</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <div className="col">
                                                    <div className="check"></div>
                                                </div>
                                                <div className="col d-flex justify-content-center">
                                                    <img src={money4} alt=""/>
                                                </div>
                                                <div className="col d-flex justify-content-center">
                                                    <p>Até R$ 15.000,00</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <div className="col">
                                                    <div className="check"></div>
                                                </div>
                                                <div className="col d-flex justify-content-center">
                                                    <img src={money5} alt=""/>
                                                </div>
                                                <div className="col d-flex justify-content-center">
                                                    <p>Mais de R$
                                                        15.000,00</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
export default Credit;