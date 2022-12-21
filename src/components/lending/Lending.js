import {useEffect, useState} from "react";
import logo from "../../assets/images/brand/logo.svg"
import arrowLeft from "../../assets/images/icons/arrow-left.svg"
import arrowRight from "../../assets/images/icons/arrow-right.svg"

// stage 1
import money1 from "../../assets/images/icons/money/money-1.svg"
import money2 from "../../assets/images/icons/money/money-2.svg"
import money3 from "../../assets/images/icons/money/money-3.svg"
import money4 from "../../assets/images/icons/money/money-4.svg"
import money5 from "../../assets/images/icons/money/money-5.svg"

//stage 2
import calendar1 from "../../assets/images/icons/calendar/calendar-1.svg"
import calendar2 from "../../assets/images/icons/calendar/calendar-2.svg"
import calendar3 from "../../assets/images/icons/calendar/calendar-3.svg"
import calendar4 from "../../assets/images/icons/calendar/calendar-4.svg"
import calendar5 from "../../assets/images/icons/calendar/calendar-5.svg"

//stage 3
import group1 from "../../assets/images/icons/group/1.svg"
import group2 from "../../assets/images/icons/group/2.svg"
import group3 from "../../assets/images/icons/group/3.svg"
import group4 from "../../assets/images/icons/group/4.svg"
import group5 from "../../assets/images/icons/group/5.svg"

//stage 4
import yes1 from "../../assets/images/icons/negated/yes.svg"
import no2 from "../../assets/images/icons/negated/no.svg"
import yesno3 from "../../assets/images/icons/negated/no-yes.svg"

//stage 5
import finalbg from "../../assets/images/icons/final/bg.svg"


import {ProgressBar} from "react-bootstrap";

import iconLoading from "../../assets/images/loading.png";

const Lending = (props) => {

    const list = props.list;
    useEffect(() => {
        localStorage.clear();
    }, []);

    const [urlRedirect] = useState(props.redirectFinal)

    let [stage, setStage] = useState(1);
    const [totalStage] = useState(4);


    const [lastStage, setLastStage] = useState(0);

    const [email, setEmail] = useState(null);
    const [name, setName] = useState(null);


    const [loading, setLoading] = useState(false);

    const [progressSteps] = useState(100 / totalStage);

    let [progressStatus, setProgressStatus] = useState(0);
    const handleChecked = (id, optionStage, globalStage) => {
        let global = document.querySelector(`.${globalStage}`);
        let boxCards = global.querySelectorAll(".box-item-card");
        labelActive(boxCards, optionStage, id);

    }

    function labelActive(boxCards, optionStage, id) {
        boxCards.forEach(box => {
            let label = box.querySelector(".form-check-label");
            let labelId = label.getAttribute("for");

            if (labelId === id) {
                label.classList.add("active");
                setStage(stage += 1);
                setProgressStatus(progressStatus += progressSteps);
                localStorage.setItem(optionStage, id);
            } else {
                label.classList.remove("active");
            }
        })
    }

    const handleBefore = () => {
        if (stage > 1) {
            setProgressStatus(progressStatus -= progressSteps)
            setStage(stage -= 1);
        }
    }
    const handleAfter = () => {
        if (stage < lastStage) {
            setProgressStatus(progressStatus += progressSteps)
            setStage(stage += 1);
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setProgressStatus(progressStatus += progressSteps)
        setStage(stage += 1);
        const options = {
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/json; charset=UTF-8",
                'Cache-Control': 'no-cache'
            }),
            body: JSON.stringify({
                'name': name,
                'email': email,
                'list': list
            }),

        }
        await fetch(`/backend/quiz-proxy.php`, options);

       setTimeout(function () {
            window.location.href = urlRedirect;
        });
    }

    useEffect(() => {
        if (stage >= lastStage) {
            setLastStage(stage);
        }
    }, [stage]);


    useEffect(() => {
        if (stage < lastStage) {
            let global = document.querySelector(`.stage${stage}`);
            let boxCards = global.querySelectorAll(".box-item-card");
            boxCards.forEach(box => {
                let label = box.querySelector(".form-check-label");
                let labelId = label.getAttribute("for");

                if (labelId === localStorage.getItem(`option-stage${stage}`)) {
                    label.classList.add("active");
                } else {
                    label.classList.remove("active");
                }
            })
        }
    }, [progressStatus]);


    useEffect(() => {
        if (stage < lastStage) {
            let global = document.querySelector(`.stage${stage}`);
            let boxCards = global.querySelectorAll(".box-item-card");
            boxCards.forEach(box => {
                let label = box.querySelector(".form-check-label");
                let labelId = label.getAttribute("for");

                if (labelId === localStorage.getItem(`option-stage${stage}`)) {
                    label.classList.add("active");
                } else {
                    label.classList.remove("active");
                }
            })
        }
    }, [progressStatus]);


    return (<main>
        <header className={"container"}>
            <div className="row justify-content-center">
                <div className="col-12 logo d-flex  justify-content-center">
                    <img src={logo} alt=""/>
                </div>
                <div className="col progress-bar">
                    <div className="row row-cols-3 justify-content-between justify-content-lg-center">
                        <div className="col-auto">
                            <button className={"btn p-0 d-flex"} onClick={() => handleBefore()}>
                                <img src={arrowLeft} alt=""/>
                            </button>
                        </div>
                        <div className="col-9 col-lg-5 d-flex align-items-center">
                            <div className="col-12">
                                <ProgressBar now={progressStatus} animated/>
                            </div>
                        </div>
                        <div className="col-auto">
                            <button className={"btn p-0 d-flex"}>
                                <img src={arrowRight} alt="" onClick={() => handleAfter()}/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <section className={"container stages position-relative"}>
            <div className="d-flex justify-content-center ">
                {stage === 1 &&
                    <div className="col-12 stage stage1">
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
                                <div className="row gy-4 justify-content-center">

                                    <div className="col-auto box-item-card">
                                        <div className="card h-100">
                                            <label className="form-check-label h-100" htmlFor="option1">
                                                <div className="card-body h-100 position-relative">
                                                    <div className="col">
                                                        <input className="form-check-input m-0 p-0" type="radio"
                                                               name="option-stage1" id="option1" value={"option1"}
                                                               onClick={() => {
                                                                   handleChecked("option1", "option-stage1", "stage1")
                                                               }}
                                                               defaultChecked={localStorage.getItem("option-stage1") === "option1" || false}/>
                                                    </div>
                                                    <div className="col d-flex justify-content-center">
                                                        <img src={money1} alt=""/>
                                                    </div>
                                                    <div className="col d-flex justify-content-center">
                                                        <p>Até R$ 1.000,00</p>
                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="col-auto box-item-card">
                                        <div className="card h-100">
                                            <label className="form-check-label h-100" htmlFor="option2">
                                                <div className="card-body h-100 position-relative">
                                                    <div className="col ">
                                                        <input className="form-check-input m-0 p-0" type="radio"
                                                               name="option-stage1" id="option2" onClick={() => {
                                                            handleChecked("option2", "option-stage1", "stage1")
                                                        }}
                                                               defaultChecked={localStorage.getItem("option-stage1") === "option2" || false}/>
                                                    </div>
                                                    <div className="col d-flex justify-content-center">
                                                        <img src={money2} alt="teste"/>
                                                    </div>
                                                    <div className="col d-flex justify-content-center">
                                                        <p>Até R$ 2.000,00</p>
                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="col-auto box-item-card">
                                        <div className="card h-100">
                                            <label className="form-check-label h-100" htmlFor="option3">
                                                <div className="card-body position-relative h-100">
                                                    <div className="col ">
                                                        <input className="form-check-input m-0 p-0" type="radio"
                                                               name="option-stage1" id="option3" onClick={() => {
                                                            handleChecked("option3", "option-stage1", "stage1")
                                                        }}
                                                               defaultChecked={localStorage.getItem("option-stage1") === "option3" || false}/>

                                                    </div>
                                                    <div className="col d-flex justify-content-center">
                                                        <img src={money3} alt=""/>
                                                    </div>
                                                    <div className="col d-flex justify-content-center">
                                                        <p>Até R$ 5.000,00</p>
                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="col-auto  box-item-card">
                                        <div className="card h-100">
                                            <label className="form-check-label h-100" htmlFor="option4">
                                                <div className="card-body h-100 position-relative">
                                                    <div className="col ">
                                                        <input className="form-check-input m-0 p-0" type="radio"
                                                               name="option-stage1" id="option4" onClick={() => {
                                                            handleChecked("option4", "option-stage1", "stage1")
                                                        }}
                                                               defaultChecked={localStorage.getItem("option-stage1") === "option4" || false}/>

                                                    </div>
                                                    <div className="col d-flex justify-content-center">
                                                        <img src={money4} alt=""/>
                                                    </div>
                                                    <div className="col d-flex justify-content-center">
                                                        <p>Até R$ 15.000,00</p>
                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="col-auto  box-item-card">
                                        <div className="card h-100">
                                            <label className="form-check-label h-100" htmlFor="option5">
                                                <div className="card-body h-100 position-relative">
                                                    <div className="col ">
                                                        <input className="form-check-input m-0 p-0" type="radio"
                                                               name="option-stage1" id="option5" onClick={() => {
                                                            handleChecked("option5", "option-stage1", "stage1")
                                                        }}
                                                               defaultChecked={localStorage.getItem("option-stage1") === "option5" || false}/>

                                                    </div>
                                                    <div className="col d-flex justify-content-center">
                                                        <img src={money5} alt=""/>
                                                    </div>
                                                    <div className="col d-flex justify-content-center">
                                                        <p>Mais de R$ 15.000,00</p>
                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>}
                {stage === 2 &&
                    <div className="col-12 stage stage2">

                        <div className="col box-interact">
                            <div className="row">
                                <div className="col d-flex align-items-center box-title">
                                    <h2>Em quanto tempo gostaria de pagar?</h2>
                                </div>
                            </div>

                            <div className="col box-card">
                                <div className="row gy-4 justify-content-center">

                                    <div className="col-auto box-item-card">
                                        <div className="card h-100">
                                            <label className="form-check-label h-100" htmlFor="option1">
                                                <div className="card-body h-100 position-relative">
                                                    <div className="col">
                                                        <input className="form-check-input m-0 p-0" type="radio"
                                                               name="option-stage2" id="option1" onClick={() => {
                                                            handleChecked("option1", "option-stage2", "stage2")
                                                        }}
                                                               defaultChecked={localStorage.getItem("option-stage2") === "option1" || false}/>
                                                    </div>
                                                    <div className="col d-flex justify-content-center">
                                                        <img src={calendar1} alt=""/>
                                                    </div>
                                                    <div className="col d-flex justify-content-center">
                                                        <p>Até 1 ano</p>
                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="col-auto box-item-card">
                                        <div className="card h-100">
                                            <label className="form-check-label h-100" htmlFor="option2">
                                                <div className="card-body h-100 position-relative">
                                                    <div className="col ">
                                                        <input className="form-check-input m-0 p-0" type="radio"
                                                               name="option-stage2" id="option2" onClick={() => {
                                                            handleChecked("option2", "option-stage2", "stage2")
                                                        }}
                                                               defaultChecked={localStorage.getItem("option-stage2") === "option2" || false}/>
                                                    </div>
                                                    <div className="col d-flex justify-content-center">
                                                        <img src={calendar2} alt="teste"/>
                                                    </div>
                                                    <div className="col d-flex justify-content-center">
                                                        <p>Até 2 anos</p>
                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="col-auto box-item-card">
                                        <div className="card h-100">
                                            <label className="form-check-label h-100" htmlFor="option3">
                                                <div className="card-body position-relative h-100">
                                                    <div className="col ">
                                                        <input className="form-check-input m-0 p-0" type="radio"
                                                               name="option-stage2" id="option3" onClick={() => {
                                                            handleChecked("option3", "option-stage2", "stage2")
                                                        }}
                                                               defaultChecked={localStorage.getItem("option-stage2") === "option3" || false}/>

                                                    </div>
                                                    <div className="col d-flex justify-content-center">
                                                        <img src={calendar3} alt=""/>
                                                    </div>
                                                    <div className="col d-flex justify-content-center">
                                                        <p>Até 3 anos</p>
                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="col-auto  box-item-card">
                                        <div className="card h-100">
                                            <label className="form-check-label h-100" htmlFor="option4">
                                                <div className="card-body h-100 position-relative">
                                                    <div className="col ">
                                                        <input className="form-check-input m-0 p-0" type="radio"
                                                               name="option-stage2" id="option4" onClick={() => {
                                                            handleChecked("option4", "option-stage2", "stage2")
                                                        }}
                                                               defaultChecked={localStorage.getItem("option-stage2") === "option4" || false}/>

                                                    </div>
                                                    <div className="col d-flex justify-content-center">
                                                        <img src={calendar4} alt=""/>
                                                    </div>
                                                    <div className="col d-flex justify-content-center">
                                                        <p>Até 4 anos</p>
                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="col-auto  box-item-card">
                                        <div className="card h-100">
                                            <label className="form-check-label h-100" htmlFor="option5">
                                                <div className="card-body h-100 position-relative">
                                                    <div className="col ">
                                                        <input className="form-check-input m-0 p-0" type="radio"
                                                               name="option-stage2" id="option5" onClick={() => {
                                                            handleChecked("option5", "option-stage2", "stage2")
                                                        }}
                                                               defaultChecked={localStorage.getItem("option-stage2") === "option5" || false}/>

                                                    </div>
                                                    <div className="col d-flex justify-content-center">
                                                        <img src={calendar5} alt=""/>
                                                    </div>
                                                    <div className="col d-flex justify-content-center">
                                                        <p>Até 5 anos ou mais</p>
                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>}
                {stage === 3 &&
                    <div className="col-12 stage stage3">

                        <div className="col box-interact">
                            <div className="row">
                                <div className="col d-flex align-items-center box-title">
                                    <h2>Em qual grupo você se encaixa?</h2>
                                </div>
                            </div>

                            <div className="col box-card">
                                <div className="row gy-4 justify-content-center">

                                    <div className="col-auto box-item-card">
                                        <div className="card h-100">
                                            <label className="form-check-label h-100" htmlFor="option1">
                                                <div className="card-body h-100 position-relative">
                                                    <div className="col">
                                                        <input className="form-check-input m-0 p-0" type="radio"
                                                               name="option-stage3" id="option1" onClick={() => {
                                                            handleChecked("option1", "option-stage3", "stage3")
                                                        }}
                                                               defaultChecked={localStorage.getItem("option-stage3") === "option1" || false}/>
                                                    </div>
                                                    <div className="col d-flex justify-content-center">
                                                        <img src={group1} alt=""/>
                                                    </div>
                                                    <div className="col d-flex justify-content-center">
                                                        <p>Autônomo / MEI</p>
                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="col-auto box-item-card">
                                        <div className="card h-100">
                                            <label className="form-check-label h-100" htmlFor="option2">
                                                <div className="card-body h-100 position-relative">
                                                    <div className="col ">
                                                        <input className="form-check-input m-0 p-0" type="radio"
                                                               name="option-stage3" id="option2" onClick={() => {
                                                            handleChecked("option2", "option-stage3", "stage3")
                                                        }}
                                                               defaultChecked={localStorage.getItem("option-stage3") === "option2" || false}/>
                                                    </div>
                                                    <div className="col d-flex justify-content-center">
                                                        <img src={group2} alt="teste"/>
                                                    </div>
                                                    <div className="col d-flex justify-content-center">
                                                        <p>CLT</p>
                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="col-auto box-item-card">
                                        <div className="card h-100">
                                            <label className="form-check-label h-100" htmlFor="option3">
                                                <div className="card-body position-relative h-100">
                                                    <div className="col ">
                                                        <input className="form-check-input m-0 p-0" type="radio"
                                                               name="option-stage3" id="option3" onClick={() => {
                                                            handleChecked("option3", "option-stage3", "stage3")
                                                        }}
                                                               defaultChecked={localStorage.getItem("option-stage3") === "option3" || false}/>

                                                    </div>
                                                    <div className="col d-flex justify-content-center">
                                                        <img src={group3} alt=""/>
                                                    </div>
                                                    <div className="col d-flex justify-content-center">
                                                        <p>Aposentadoria/
                                                            Pensionista</p>
                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="col-auto  box-item-card">
                                        <div className="card h-100">
                                            <label className="form-check-label h-100" htmlFor="option4">
                                                <div className="card-body h-100 position-relative">
                                                    <div className="col ">
                                                        <input className="form-check-input m-0 p-0" type="radio"
                                                               name="option-stage3" id="option4" onClick={() => {
                                                            handleChecked("option4", "option-stage3", "stage3")
                                                        }}
                                                               defaultChecked={localStorage.getItem("option-stage3") === "option4" || false}/>

                                                    </div>
                                                    <div className="col d-flex justify-content-center">
                                                        <img src={group4} alt=""/>
                                                    </div>
                                                    <div className="col d-flex justify-content-center">
                                                        <p>Funcionário
                                                            Público</p>
                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="col-auto  box-item-card">
                                        <div className="card h-100">
                                            <label className="form-check-label h-100" htmlFor="option5">
                                                <div className="card-body h-100 position-relative">
                                                    <div className="col ">
                                                        <input className="form-check-input m-0 p-0" type="radio"
                                                               name="option-stage3" id="option5" onClick={() => {
                                                            handleChecked("option5", "option-stage3", "stage3")
                                                        }}
                                                               defaultChecked={localStorage.getItem("option-stage3") === "option5" || false}/>

                                                    </div>
                                                    <div className="col d-flex justify-content-center">
                                                        <img src={group5} alt=""/>
                                                    </div>
                                                    <div className="col d-flex justify-content-center">
                                                        <p>Desempregado</p>
                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>}
                {stage === 4 &&
                    <div className="col-12 stage stage4">

                        <div className="col box-interact">
                            <div className="row">
                                <div className="col d-flex align-items-center box-title">
                                    <h2>E por último... Você está negativado?</h2>
                                </div>
                            </div>

                            <div className="col box-card">
                                <div className="row gy-4 justify-content-center">

                                    <div className="col-auto box-item-card">
                                        <div className="card h-100">
                                            <label className="form-check-label h-100" htmlFor="option1">
                                                <div className="card-body h-100 position-relative">
                                                    <div className="col">
                                                        <input className="form-check-input m-0 p-0" type="radio"
                                                               name="option-stage4" id="option1" onClick={() => {
                                                            handleChecked("option1", "option-stage4", "stage4")
                                                        }}
                                                               defaultChecked={localStorage.getItem("option-stage4") === "option1" || false}/>
                                                    </div>
                                                    <div className="col d-flex justify-content-center">
                                                        <img src={yes1} alt=""/>
                                                    </div>
                                                    <div className="col d-flex justify-content-center">
                                                        <p>Sim</p>
                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="col-auto box-item-card">
                                        <div className="card h-100">
                                            <label className="form-check-label h-100" htmlFor="option2">
                                                <div className="card-body h-100 position-relative">
                                                    <div className="col ">
                                                        <input className="form-check-input m-0 p-0" type="radio"
                                                               name="option-stage4" id="option2" onClick={() => {
                                                            handleChecked("option2", "option-stage4", "stage4")
                                                        }}
                                                               defaultChecked={localStorage.getItem("option-stage4") === "option2" || false}/>
                                                    </div>
                                                    <div className="col d-flex justify-content-center">
                                                        <img src={no2} alt="teste"/>
                                                    </div>
                                                    <div className="col d-flex justify-content-center">
                                                        <p>Não</p>
                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="col-auto box-item-card">
                                        <div className="card h-100">
                                            <label className="form-check-label h-100" htmlFor="option3">
                                                <div className="card-body position-relative h-100">
                                                    <div className="col ">
                                                        <input className="form-check-input m-0 p-0" type="radio"
                                                               name="option-stage4" id="option3" onClick={() => {
                                                            handleChecked("option3", "option-stage4", "stage4")
                                                        }}
                                                               defaultChecked={localStorage.getItem("option-stage4") === "option3" || false}/>

                                                    </div>
                                                    <div className="col d-flex justify-content-center">
                                                        <img src={yesno3} alt=""/>
                                                    </div>
                                                    <div className="col d-flex justify-content-center">
                                                        <p>Já estive</p>
                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>}
                {stage >= 5 &&
                    <div className="col-12 stage box-form">

                        <div className="col box-interact">
                            <div className="col box-title">
                                <h1>Estamos quase lá!</h1>
                                <p>Insira seus dados para ver nossa recomendação</p>
                            </div>
                            <div className="col-12 position-relative">

                                <div className="row row-cols-2 justify-content-center">
                                    <div
                                        className="col-auto d-flex box-img justify-content-center order-1 order-lg-0">
                                        <img src={finalbg} alt=""/>
                                    </div>
                                    <div
                                        className="col-auto d-flex align-items-center mx-lg-5 mt-5 mt-lg-0 order-0 order-lg-1 position-relative">

                                        <form className={"col-12 form"} onSubmit={handleSubmit}>
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputEmail1"
                                                       className="form-label">Nome</label>
                                                <input type="text" className="form-control" id="exampleInputEmail1"
                                                       aria-describedby="emailHelp"
                                                       onChange={(e) => setName(e.target.value)} required={true}/>
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputPassword1"
                                                       className="form-label">E-mail</label>
                                                <input type="email" className="form-control"
                                                       id="exampleInputPassword1"
                                                       onChange={(e) => setEmail(e.target.value)} required={true}/>
                                            </div>
                                            <div className="mb-3 form-check">
                                                <input type="checkbox" className="form-check-input"
                                                       id="exampleCheck1" defaultChecked={true}/>
                                                <label className="form-check-label email" htmlFor="exampleCheck1">Li
                                                    e concordo com os termos de serviço e aceito receber
                                                    comunicações da ESTOA, que poderão ser canceladas a qualquer
                                                    momento.</label>
                                            </div>
                                            <div className="col cta">
                                                <button type="submit" className="btn btn-primary w-100"
                                                        disabled={loading}>

                                                    {!loading && <span>Ver meu empréstimo</span>}
                                                    {loading && <span>Analisando as Informações...</span>}

                                                </button>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>}


            </div>
        </section>

        <footer className={"w-100 d-flex justify-content-center"}>
            <a href="#">Termos de uso </a>&nbsp;|&nbsp;
            <a href="#">Política de privacidade</a>
        </footer>
    </main>);
}
export default Lending;