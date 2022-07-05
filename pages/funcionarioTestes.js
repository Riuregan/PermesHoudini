import React, { useState, useEffect } from 'react'
import SortTable from '../components/table.js'
import axios from "axios"
import Header from '../components/Header'
import BasicModal from '../components/BasicModal.js'
import styles from '../styles/meusTestes.module.css';
import { useSelector } from "react-redux";

function FuncionarioTestes() {

    const [dados, setDados] = useState([]);

    const userAtual = useSelector((state) => state.user);

    useEffect(() => {
        console.log(userAtual.user[0])
        console.log('userAtual.user[0]')
        axios.get(`http://localhost:3001/testesFunc/${userAtual.user[0]}`)
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
                Header: 'Usuario_CPF',
                accessor: '1',
            },
            {
                Header: 'ID_tipo_teste',
                accessor: '2',
            },
            {
                Header: 'Time_teste',
                accessor: '3',
            },
            {
                Header: 'Time_entrega',
                accessor: '4',
            },
            {
                Header: 'Funcionario_CPF',
                accessor: '6',
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


                <SortTable InitialPageSize={3} columns={columns} data={dados}></SortTable>

            </div>



        </div>
    )
}

export default FuncionarioTestes;
