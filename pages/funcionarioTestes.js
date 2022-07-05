import React, { useState, useEffect } from 'react'
import SortTable from '../components/table.js'
import axios from "axios"
import Header from '../components/header/HeaderCliente'
import styles from '../styles/meusTestes.module.css';
import { useSelector } from "react-redux";

function FuncionarioTestes() {


    const [dados, setDados] = useState([]);

    const userAtual = useSelector((state) => state.user);

    // useEffect(() => {
    //     //console.log(userAtual.user[0])
    //     console.log('userAtual.user[0]')
    //     axios.get(`http://localhost:3001/testesFunc/${userAtual.user[0]}`)
    //         .then((c) => {
    //             console.log(c.data.rows)
    //             setDados(c.data.rows);
    //         }
    //         )
    // }, []);


    const handleClickAdd = () => {
        console.log(userAtual)
    }


    const columns = React.useMemo(
        () => [
            {
                Header: 'ID_tipo_teste',
                accessor: '2',
            },
            {
                Header: 'usuario_cpf',
                accessor: '1',
            },
            {
                Header: 'funcionario_cpf',
                accessor: '6',
            },
            {
                Header: 'Data da coleta',
                accessor: '3',
            },
            {
                Header: 'Data da entrega',
                accessor: '4',
            },
            {
                Header: 'Opções',
                accessor: '5',
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
                <h1 className={styles.titulo}>Testes</h1>

                <SortTable InitialPageSize={3} columns={columns} data={dados}></SortTable>

            </div>



        </div>
    )
}

export default FuncionarioTestes;
