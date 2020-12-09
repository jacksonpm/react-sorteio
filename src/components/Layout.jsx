import React, {useEffect, useState} from "react";
import {sleep} from "helpers/sleep";
import Item from "components/Item";


export default function Layout({texto, children, ...props}) {

    const [label, setLabel] = useState("Nome do botão");
    const [items, setItems] = useState({data: []});

    useEffect(() => {
        sleep(2000).then(() => {
            setLabel('MUDOU O TEXTO DINAMICAMENTE!!!')
        })
    }, [label])

    return (
        <div>
            <h1 {...props}>{children}</h1>
            <h4>{texto}</h4>
            <button onClick={() => setLabel("Teste")}>
                {label}
            </button>
            <br/>
            {items.data.length > 0 && ("Essa lista possui " + items.data.length + " Items.")}
            <ul>
                {items.data.map((item, i) => (
                    <Item key={i} nome={item.nome}/>
                ))}
            </ul>
            <button onClick={() => {
                let novosItems = items.data
                novosItems.push({nome: 'Zeca'})
                setItems({data: novosItems})
            }}>
                +
            </button>
            <button>
                -
            </button>
        </div>
    )
}