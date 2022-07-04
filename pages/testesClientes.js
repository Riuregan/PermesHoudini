import React, { useState, useEffect } from 'react'
import SortTable from '../components/table.js'
import axios from "axios"
import styles from '../styles/testesClientes.module.css'

function testesClientes() {

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
                Header: 'ID_TESTE',
                accessor: 'id_teste',
            },
            {
                Header: 'USUARIO_CPF',
                accessor: 'usuario_cpf',
            },
            {
                Header: 'Opções',
                accessor: 'options',
                Cell: (value) => {
                    return (
                        <>
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
                        </>
                    );
                }
            }
        ],
        []
    );


    return (
        <div className={styles.testesClientes}>
            <h1 className={styles.titulo}>Testes Clientes</h1>
            <div className={styles.barraPesquisa}>
                <input placeholder="tipo teste"></input>
                <button onClick={handleClickAdd}>Pedir teste</button>
            </div>

            <SortTable InitialPageSize={3} columns={columns} data={dados}></SortTable>

        </div>
    )
}

export default testesClientes;
