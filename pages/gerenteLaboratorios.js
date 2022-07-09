import React, { useState, useEffect } from 'react'
import axios from "axios"
import Button from '@mui/material/Button';

import SortTable from '../components/table.js'
import Header from '../components/header/HeaderGerente'
import ModalLab from '../components/modal/ModalLab.js'
import ModalDelete from '../components/modal/ModalDelete'
import LoaderSpinner from '../components/LoaderSpinner';

import styles from '../styles/meusTestes.module.css';

function Estoque() {

    const [dados, setDados] = useState([]);
    const [dadosLab, setDadosLab] = useState([]);
    const [deleteID, setDeleteID] = useState('');
    const [type, setType] = useState(false);
    const [helperEffect, setHelperEffect] = useState(false);

    const [open, setOpen] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:3001/laboratorio`)
            .then((c) => {
                setDados(c.data.rows);
                setHelperEffect(false);
            }
            )
    }, [helperEffect]);

    const handleClickAdd = (laboratorio) => {
        axios.post(`http://localhost:3001/postLaboratorio`, {
            nome: laboratorio.nome,
            cep: laboratorio.cep,
            numero: laboratorio.numero,
            gerente_cpf: laboratorio.gerente_cpf,
            endereco: laboratorio.endereco,
        })
            .then(function (response) {
                setHelperEffect(true)
            })
    }

    const handleClickEdit = (laboratorio) => {
        axios.put(`http://localhost:3001/putLaboratorio/${parseInt(laboratorio.gerente_cpf)}`, {
            nome: laboratorio.nome,
            cep: laboratorio.cep,
            numero: laboratorio.numero,
            endereco: laboratorio.endereco,
        })
            .then(function (response) {
                setHelperEffect(true)
            })
    }

    const handleClickDelete = (id) => {
        axios.delete(`http://localhost:3001/deleteLaboratorio/${id[3]}`)
            .then(function (response) {
                setHelperEffect(true)
            })
    }

    const handleAdd = () => {
        setDadosLab([])
        setType(true);
        handleOpen()
    }

    const handleEdit = (lab) => {
        setDadosLab({
            nome: lab[2],
            cep: lab[0],
            numero: lab[1],
            gerente_cpf: lab[3],
            endereco: lab[4]
        })
        setType(false);
        handleOpen()
    }

    const handleDelete = (id) => {
        setDeleteID(id)
        handleOpenDelete(true)
    }

    const handleOpen = () => setOpen(true);

    const handleOpenDelete = () => setOpenDelete(true);

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
                <h1 className={styles.titulo}>Laboratório</h1>
                <div className={styles.cimaDaTabela}>
                    <ModalDelete open={openDelete} setOpen={setOpenDelete} id={deleteID} confirmModal={(id) => handleClickDelete(id)}></ModalDelete>
                    <Button className={styles.button} onClick={handleAdd}>Abrir novo laboratório</Button>
                    <ModalLab dados={dadosLab} setDados={setDadosLab} open={open} setOpen={setOpen} type={type} setType={setType} confirmModal={(laboratorio) => {
                        type ? handleClickAdd(laboratorio) : handleClickEdit(laboratorio)
                    }} />
                </div>
                <>
                    {
                        helperEffect ? <LoaderSpinner></LoaderSpinner> :
                            <SortTable InitialPageSize={10} columns={columns} data={dados}></SortTable>
                    }
                </ >

            </div>



        </div>
    )
}

export default Estoque;
