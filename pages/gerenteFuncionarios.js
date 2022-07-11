import React, { useState, useEffect } from 'react'
import SortTable from '../components/table.js'
import axios from "axios"
import Header from '../components/Header/HeaderGerente'
import ModalAddFuncionario from '../components/modal/ModalAddFuncionario.js'
import styles from '../styles/meusTestes.module.css';
import Button from '@mui/material/Button';
import ModalDelete from '../components/modal/ModalDelete'
import LoaderSpinner from '../components/LoaderSpinner';


function Funcionarios() {

    const [dados, setDados] = useState([]);
    const [deleteID, setDeleteID] = useState('');
    const [dadosFunc, setDadosFunc] = useState([]);
    const [type, setType] = useState(false);
    const [helperEffect, setHelperEffect] = useState(false);

    const [open, setOpen] = useState(false);
    const [openDelete, setOpenDelete] = React.useState(false);

    useEffect(() => {
        axios.get(`http://localhost:3001/funcionarios`)
            .then((c) => {
                console.log(c.data.rows)
                setDados(c.data.rows);
                setHelperEffect(false)
            }
            )
    }, [helperEffect]);

    const handleClickAdd = (func) => {
        console.log(func);
        axios.post(`http://localhost:3001/postFuncionarios`, {
            cpf: func.tcpf,
            nome: func.nome,
            email: func.email,
            telefone: func.numero,
            senha: func.senha,
            laboratorio_cep: func.laboratorio_cep,
            laboratorio_numero: func.laboratorio_numero
        
        })
            .then(function (response) {
                setHelperEffect(true)
            })
    }

    const handleClickEdit = (func) => {
        axios.put(`http://localhost:3001/putFuncionarios/${func.cpf}`, {
            nome: func.nome,
            telefone: func.telefone,
            email: func.email,
            senha: func.senha,
        })
            .then(function (response) {
                setHelperEffect(true)
            })
    }
    const handleClickDelete = (id) => {
        axios.delete(`http://localhost:3001/deleteFuncionarios/${id[0]}`)
            .then(function (response) {
                setHelperEffect(true)
            })

    }


    const handleEdit = (func) => {
        setDadosFunc({
            nome: func[1],
            cpf: func[0],
            email: func[2],
            numero: func[3],
            senha: func[4]
        })
        setType(false);
        handleOpen()
    }

    const handleAdd = () => {
        setDadosFunc([])
        setType(true);
        handleOpen()
    }


    const handleDelete = (func) => {
        setDeleteID(func)
        handleOpenDelete(true)
    }

    const handleOpen = () => setOpen(true)

    const handleOpenDelete = () => setOpenDelete(true);


    const handleDeleteUserClick = () => {
        setOpen(true);
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
                                    onClick={() => handleEdit(value.cell.row.original)}
                                >
                                    Editar
                                </button>{' '}
                                <div>
                                    <button
                                        className="TableButton"
                                        onClick={() => handleDelete(value.cell.row.original)}
                                    >
                                        Excluir
                                    </button>


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
                    <ModalDelete open={openDelete} setOpen={setOpenDelete} id={deleteID} confirmModal={(id) => handleClickDelete(id)}></ModalDelete>
                    <Button className={styles.button} onClick={handleAdd}>Adicionar novo funcionário</Button>
                    <ModalAddFuncionario open={open} setOpen={setOpen} dados={dadosFunc} setDados={setDadosFunc} type={type} confirmModal={(func) => {
                        type ? handleClickAdd(func) : handleClickEdit(func)
                    }} />

                </div>
                {
                    helperEffect ? <LoaderSpinner></LoaderSpinner> :
                        <SortTable InitialPageSize={3} columns={columns} data={dados}></SortTable>

                }



            </div>



        </div>
    )
}

export default Funcionarios;
