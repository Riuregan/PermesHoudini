import React, { useState, useEffect } from 'react'
import SortTable from '../components/table.js'
import axios from "axios"
import Header from '../components/Header/HeaderGerente'
import ModalAddFuncionario from '../components/modal/ModalAddFuncionario.js'
import styles from '../styles/meusTestes.module.css';
import Button from '@mui/material/Button';
import ModalDelete from '../components/modal/ModalDelete'


function Funcionarios() {

    const [dados, setDados] = useState([]);
    const [open, setOpen] = useState(false);


    const handleDeleteUserClick = () => {
        setOpen(true);
    }

    const handleOpen = () => setOpen(true)

    useEffect(() => {
        axios.get(`http://localhost:3001/funcionarios`)
            .then((c) => {
                console.log(c.data.rows)
                setDados(c.data.rows);
            }
            )
    }, []);





    ;


    const handleClickAdd = () => {
        console.log(userAtual)
    }


    const columns = React.useMemo(
        () => [
            {
                Header: 'Nome',
                accessor: '1',
            },
            {
                Header: 'CPF',
                accessor: '0',
            },
            {
                Header: 'Email',
                accessor: '2',
            },
            {
                Header: 'Telefone',
                accessor: '3',
            },
            {
                Header: 'Senha',
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
                                <div>
                                    <button
                                        className="TableButton"
                                        onClick={() => handleDeleteUserClick(value.cell.row.original)}
                                    >
                                        Excluir
                                    </button>
                                    <ModalDelete open={open} setOpen={setOpen} confirmModal={(teste) => {
                                        handleClickAdd(teste)
                                    }} />

                                </div>

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
                <h1 className={styles.titulo}>Funcionários</h1>
                <div className={styles.cimaDaTabela}>
                    <Button className={styles.button} onClick={handleOpen}>Adicionar novo funcionário</Button>
                    <ModalAddFuncionario open={open} setOpen={setOpen} confirmModal={(teste) => {
                        handleClickAdd(teste)
                    }} />

                </div>

                <SortTable InitialPageSize={3} columns={columns} data={dados}></SortTable>

            </div>



        </div>
    )
}

export default Funcionarios;
