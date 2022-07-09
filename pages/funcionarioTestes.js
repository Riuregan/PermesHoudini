import React, { useState, useEffect } from 'react'
import SortTable from '../components/table.js'
import axios from "axios"
import Header from '../components/header/HeaderFuncionario'
import styles from '../styles/meusTestes.module.css';
import { useSelector } from "react-redux";
import ModalEditTest from '../components/modal/ModalEditTest'
import ModalDelete from '../components/modal/ModalDelete'
import LoaderSpinner from '../components/LoaderSpinner';

function FuncionarioTestes() {


    const [dados, setDados] = useState([]);
    const [dadosEdit, setDadosEdit] = useState([]);
    const [helperEffect, setHelperEffect] = useState(false);
    const [deleteID, setDeleteID] = useState('');

    const [open, setOpen] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);

    const userAtual = useSelector((state) => state.user);

    useEffect(() => {
        axios.get(`http://localhost:3001/testesFunc/${userAtual.user[0]}`)
            .then((c) => {
                setHelperEffect(false)
                setDados(c.data.rows);
            }
            )
    }, [helperEffect]);

    const handleClickEdit = (value) => {
        console.log(value.funcionarios_cpf)
        console.log(value.id_teste)
        console.log(value.time_entrega)
        console.log(value.resultado)
        axios.put(`http://localhost:3001/putTestes/${parseInt(value.id_teste)}`, {
            funcionarios_cpf: value.funcionarios_cpf,
            time_entrega: value.time_entrega,
            resultado: value.resultado,
        })
            .then(function (response) {
                setHelperEffect(true)
            })
    }


    const handleEdit = (teste) => {
        console.log(teste)
        setDadosEdit({
            id_teste: teste[0],
            funcionarios_cpf: teste[6],
            time_entrega: teste[4],
            resultado: teste[5]
        })
        handleOpen()
    }

    const handleClickDelete = (id) => {
        console.log(id)
        axios.delete(`http://localhost:3001/deleteTestes/${id[0]}`)
            .then(function (response) {
                setHelperEffect(true)
            })

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
                Header: 'ID_tipo_teste',
                accessor: '2',
            },
            {
                Header: 'Usuario_CPF',
                accessor: '1',
            },
            {
                Header: 'Funcionario_CPF',
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

            <Header />
            <div >
                <h1 className={styles.titulo}>Testes</h1>
                <ModalDelete open={openDelete} setOpen={setOpenDelete} id={deleteID} confirmModal={(id) => handleClickDelete(id)}></ModalDelete>
                <ModalEditTest dados={dadosEdit} setDados={setDadosEdit} open={open} setOpen={setOpen} confirmModal={(value) => handleClickEdit(value)}></ModalEditTest>
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

export default FuncionarioTestes;
