import React, { useState, useEffect } from 'react'
import SortTable from '../components/table.js'
import axios from "axios"
import styles from '../styles/estoque.module.css'
import ModalMateriais from '../components/modal/ModalMateriais'

function GerenteMateriais() {

    const [dados, setDados] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3001/materiais`)
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
                Header: 'ID_material',
                accessor: '0',
            },
            {
                Header: 'Nome',
                accessor: '1',
            },
            {
                Header: 'Quantidade',
                accessor: '2',
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
            <h1 className={styles.titulo}>Estoque</h1>
            <div className={styles.cimaDaTabela}>
                <ModalMateriais confirmModal={(teste) => {
                    handleClickAdd(teste)
                }} />
            </div>

            <SortTable InitialPageSize={10} columns={columns} data={dados}></SortTable>

        </div>
    )
}

export default GerenteMateriais;
