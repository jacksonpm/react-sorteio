import React, {useState, useEffect} from "react";
import {Col, Row} from "react-bootstrap";

export default function Sorteio() {
    const [inicial, setInicial] = useState()
    const [final, setFinal] = useState();
    const [sorteados, setSorteados] = useState([]);
    const [sorteado, setSorteado] = useState('');


    useEffect(() => {
        if (sorteado > 0) {
            setSorteados([...sorteados, sorteado])
        }
    }, [sorteado])


    return <div style={{height: "100vh"}}
                className="d-flex justify-content-center align-items-center">
        <Row>
            <Col sm={12} md={12} lg={8}>
                <div className="mb-2">
                    Sorteio de Números
                </div>
                <form onSubmit={(e) => {
                        e.preventDefault();
                        setSorteado(inicial)
                    }}>
                    <div className="bg-white shadow-sm p-4 border rounded">
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
            </Col>
            <Col
                sm={12} md={12} lg={4}>
                <div style={{minWidth: '14rem'}}>
                    <div className="mt-md-3 mt-lg-0">
                        Último Número Sorteado
                    </div>

                    <div className="bg-white shadow-sm p-2 border rounded">
                        <span style={{fontSize: '2rem'}}>{sorteado || '-'}</span>
                    </div>

                    <div className="mt-3">
                        Números Sorteados
                    </div>

                    <div
                        style={{height: '30rem', overflowY: 'scroll'}}
                        className="bg-white shadow-sm p-2 border rounded">
                        {sorteados.map((item, i ) => {
                            return <div className="border p-2 mt-2" key={i}>
                                <span style={{fontSize: '2rem'}}>{item}</span>
                            </div>
                        })}
                    </div>
                </div>
            </Col>
        </Row>
    </div>;
}