import React, { useState, useEffect } from 'react'
import SortTable from '../components/table.js'
import axios from "axios"
import styles from '../styles/estoque.module.css'

function estoque() {

    const [dados, setDados] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3001/testes`)
            .then((c) => {
                console.log(c)
                setDados(c.data);
            }
            )
    }, []);


    const handleClickAdd = () => {
        console.log(userAtual)
    }


    const columns = React.useMemo(
        () => [
            {
                Header: 'Nome',
                accessor: 'nome',
            },
            {
                Header: 'CEP',
                accessor: 'cep',
            },
            {
                Header: 'Numero',
                accessor: 'numero',
            },
            {
                Header: 'Opções',
                accessor: 'options',
                Cell: (value) => {
                    return (
                        <>
                            <span className="buttons">
                                <button
                                    className="TableButton"
                                    type="button"
                                    onClick={() => handleStaffEditClick(value.cell.row.original)}
                                >
                                    Editar
                                </button>{' '}
                                <button
                                    className="TableButton"
                                    onClick={() => handleDeleteUserClick(value.cell.row.original)}
                                >
                                    Excluir
                                </button>
                                <style jsx>{`
                                .TableButton{
                                    background-color:#791E94;
                                    color: white;
                                    border-radius: 10px;
                                    padding: 5px;
                                    border-color: #791E94;
                                }
                                .buttons{
                                display: flex;
                                justify-content: space-around;
                                }
                                `}</style>
                            </span>


                        </>
                    );
                }
            }
        ],
        []
    );


    return (
        <div className={styles.estoque}>
            <h1 className={styles.titulo}>Laborátorios</h1>

            <SortTable InitialPageSize={3} columns={columns} data={dados}></SortTable>

        </div>
    )
}

export default estoque;
