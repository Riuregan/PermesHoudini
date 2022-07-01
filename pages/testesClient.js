import React, { useState, useEffect } from 'react'
import SortTable from '../components/table/index'
import axios from "axios"

function TestesClient() {

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
        // axios.post(`http://localhost:3001/addTestes`, {

        // })
        //     .then((c) => {
        //         //dispatch(setCurrentUser(c));
        //         Router.push('/SignupForm')
        //     })
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
        <div className="App">
            <h1>Testes Clientes</h1>
            <input placeholder="tipo teste"></input>
            <input></input>
            <button onClick={handleClickAdd}>Pedir teste</button>
            <SortTable InitialPageSize={3} columns={columns} data={dados}></SortTable>
        </div>
    )
}

export default TestesClient;
