
import React, { useState, useEffect } from 'react'
import LoginForm from '../components/LoginForm';
import { Provider } from "react-redux";
import { store } from "../store/store";
import styles from '../styles/meusTestes.module.css';
import SignupForm from '../components/SignupForm'
import Header from '../components/Header'
import axios from "axios"
import SortTable from '../components/table.js'
import BasicModal from '../components/BasicModal.js'


export default function meusExames() {
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
                Header: 'Data da coleta',
                accessor: 'dataColeta',
            },
            {
                Header: 'Data da entrega',
                accessor: 'dataEntrega',
            },
            {
                Header: 'Nome do funcionário',
                accessor: 'nomeFuncionário',
            },
            {
                Header: 'Laborátorio',
                accessor: 'laboratorio',
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

            <Header />
            <div >
                <h1 className={styles.titulo}>Testes Clientes</h1>
                <div className={styles.cimaDaTabela}>
                    <div className={styles.barraPesquisa}>
                        <input placeholder="tipo teste"></input>
                        <button onClick={handleClickAdd}>Pedir teste</button>
                    </div>
                    <BasicModal />
                </div>

                <SortTable InitialPageSize={3} columns={columns} data={dados}></SortTable>

            </div>



        </div>
    )

}