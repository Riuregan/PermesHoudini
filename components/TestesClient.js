import React, { useState, useEffect } from 'react'
import SortTable from './table/index'
import axios from "axios"
import { selectCurrentUser } from '../store/user/user.selector'
import { useSelector } from "react-redux";
import { Provider } from "react-redux";
import { store } from "../store/store";

function TestesClient() {

    const [dados, setDados] = useState([]);
    const userAtual = useSelector(selectCurrentUser);

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
