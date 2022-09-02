import React, {useState} from "react";
import {Col, Row} from "react-bootstrap";
import {randomInt} from "helpers/random";

export default function Sorteio() {
    const [inicial, setInicial] = useState()
    const [final, setFinal] = useState();
    const [sorteados, setSorteados] = useState([]);
    const [sorteado, setSorteado] = useState('');

    return <div style={{height: "100vh"}}
                className="d-flex container justify-content-center align-items-center">
        <Row>
            <Col sm={12} md={12} lg={8}>
                <div className="d-flex flex-column">
                    <div className="mb-2">
                        Sorteio de Números
                    </div>
                    <form onSubmit={(e) => {
                        e.preventDefault();

                        if (inicial > final) {
                            alert("O número inicial deve ser menor que o final")
                            return;
                        }

                        let numero = randomInt(+inicial, +final);
                        setSorteado(numero)
                        setSorteados([numero, ...sorteados])
                    }}>
                        <div
                            className="bg-white shadow-sm p-4 border rounded">
                            <div className="form-group">
                                <label
                                    className="form-label" htmlFor="inicio">Início</label>
                                <input
                                    defaultValue=""
                                    type="number"
                                    onChange={(e) => setInicial(e.target.value)}
                                    required={true} name="inicio" className="form-control" value={inicial}/>
                            </div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="Fim">Fim</label>
                                <input
                                    defaultValue=""
                                    onChange={(e) => setFinal(e.target.value)}
                                    type="number"
                                    required={true}
                                    name="fim" className="form-control" value={final}/>
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
                <div className="d-flex flex-column">
                    <div className="mt-md-3 mt-lg-0">
                        Último Número Sorteado
                    </div>

                    <div className="bg-white shadow-sm p-2 border rounded text-primary">
                        <span style={{fontSize: '2rem'}}>{sorteado || '-'}</span>
                    </div>

                    <div className="mt-3">
                        Números Sorteados
                    </div>

                    <div
                        style={{height: '30rem', overflowY: 'scroll'}}
                        className="bg-white shadow-sm p-2 border rounded d-flex flex-column">
                        {sorteados.map((item, i) => {
                            return <div style={{flex: 1}} className="border p-2 m-1" key={i}>
                                <span style={{fontSize: '2rem'}}>{item}</span>
                            </div>
                        })}
                    </div>
                </div>
            </Col>
        </Row>
    </div>;
}