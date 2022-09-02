import React, {useState} from "react";
import {Col, Row} from "react-bootstrap";
import {randomInt} from "helpers/random";

export default function Sorteio() {
    const [inicial, setInicial] = useState()
    const [final, setFinal] = useState();
    const [sorteados, setSorteados] = useState([]);
    const [sorteado, setSorteado] = useState(0);
    const [flagRepetido, setFlagRepetido] = useState(true);


    const sortear = () => {
        if (inicial >= final || final <= inicial) {
            alert("O número inicial deve ser menor que o final")
            return;
        }

        let numero = randomInt(inicial, final);
        if (sorteados.indexOf(numero) >= 0 && flagRepetido) {
            return;
        }

        setSorteado(numero)
        setSorteados([numero, ...sorteados])
    }

    return <div className="d-flex container justify-content-center align-items-center pt-0 pt-lg-4">
        <Row>
            <Col sm={12} md={12} lg={8}>
                <div className="d-flex flex-column">
                    <div className="my-2">
                        <h5>Sorteio de Números</h5>
                    </div>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        sortear()
                    }}>
                        <div
                            className="bg-white shadow-sm p-4 border rounded">
                            <div className="form-group">
                                <label
                                    className="form-label" htmlFor="inicio">Início</label>
                                <input
                                    defaultValue=""
                                    type="number"
                                    id="inicio"
                                    onChange={(e) => setInicial(parseInt(e.target.value))}
                                    required={true}
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="fim">Fim</label>
                                <input
                                    defaultValue=""
                                    id="fim"
                                    onChange={(e) => setFinal(parseInt(e.target.value))}
                                    type="number"
                                    required={true}
                                    className="form-control"
                                />
                            </div>

                            <div className="form-check mt-3">
                                <input className="form-check-input"
                                       type="checkbox"
                                       onChange={(e) => {
                                           setFlagRepetido(e.target.checked)
                                       }}
                                       checked={flagRepetido}
                                       id="flag_repetido"
                                />
                                <label className="form-check-label" htmlFor="flag_repetido">
                                    Não sortear o mesmo número 2x
                                </label>
                            </div>

                            <button className="btn btn-lg btn-primary mt-3">
                                Sortear
                            </button>
                        </div>
                    </form>
                </div>
            </Col>
            <Col
                sm={12} md={12} lg={4}>
                <div className="d-flex flex-column" style={{minWidth: '20rem'}}>
                    <div className="my-2">
                        <h5>Último Número Sorteado</h5>
                    </div>

                    <div className="bg-white shadow-sm p-2 border rounded text-primary">
                        <span style={{fontSize: '2rem'}}>{sorteado || '-'}</span>
                    </div>

                    <div className="my-2">
                        <h6>Números Sorteados</h6>
                    </div>

                    <div
                        style={{height: '30rem', overflowY: 'scroll'}}
                        className="bg-white shadow-sm p-2 border rounded d-flex flex-column">
                        {sorteados.map((item, i) => {
                            return <div className="border p-2 m-1" key={i}>
                                <span style={{fontSize: '1.4rem'}}>{item}</span>
                            </div>
                        })}
                    </div>
                </div>
            </Col>
        </Row>
    </div>;
}