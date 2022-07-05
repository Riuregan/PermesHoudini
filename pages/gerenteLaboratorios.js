import React, { useState, useEffect } from 'react'
import SortTable from '../components/table.js'
import axios from "axios"
import Header from '../components/Header'
import BasicModal from '../components/BasicModal.js'
import styles from '../styles/meusTestes.module.css';

function Estoque() {

    const [dados, setDados] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3001/laboratorio`)
            .then((c) => {
                console.log(c.data.rows)
                setDados(c.data.rows);
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
                accessor: '2',
            },
            {
                Header: 'CEP',
                accessor: '0',
            },
            {
                Header: 'Numero',
                accessor: '1',
            },
            {
                Header: 'gerente_CPF',
                accessor: '3',
            },
            {
                Header: 'Endereço',
                accessor: '4',
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
        <div className={styles.meusTestes}>
            <Header></Header>

            <div >
                <h1 className={styles.titulo}>Laboratório</h1>
                <div className={styles.cimaDaTabela}>
                    <BasicModal confirmModal={(teste) => {
                        handleClickAdd(teste)
                    }} />
                </div>

                <SortTable InitialPageSize={3} columns={columns} data={dados}></SortTable>

            </div>



        </div>
    )
}

export default Estoque;
