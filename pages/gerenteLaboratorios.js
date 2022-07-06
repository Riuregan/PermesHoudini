import React, { useState, useEffect } from 'react'
import SortTable from '../components/table.js'
import axios from "axios"
import Header from '../components/header/HeaderCliente'
import ModalLab from '../components/modal/ModalLab.js'
import styles from '../styles/meusTestes.module.css';
import { useSelector } from "react-redux";
import Button from '@mui/material/Button';

function Estoque() {

    const [dados, setDados] = useState([]);

    const [dadosLab, setDadosLab] = useState([]);
    const [open, setOpen] = React.useState(false);
    const [type, setType] = React.useState(false);

    const userAtual = useSelector((state) => state.user);

    useEffect(() => {
        axios.get(`http://localhost:3001/laboratorio`)
            .then((c) => {
                setDados(c.data.rows);
            }
            )
    }, [dados]);

    const handleDeleteUserClick = () => {
        setOpen(true);
    }

    const handleClickAdd = (laboratorio) => {
        console.log('add')
        console.log(userAtual)
        console.log(laboratorio)
        axios.post(`http://localhost:3001/postLaboratorio`, {
            nome: laboratorio.nome,
            cep: laboratorio.cep,
            numero: laboratorio.numero,
            gerente_cpf: userAtual.user[0],
        })
            .then(function (response) {
                console.log(response);
                setDados([])
            })
    }

    const handleClickEdit = (laboratorio) => {
        console.log('edit')
        console.log(userAtual)
        console.log(laboratorio)
        axios.put(`http://localhost:3001/putLaboratorio/${laboratorio.gerente_cpf}`, {
            nome: laboratorio.nome,
            cep: laboratorio.cep,
            numero: laboratorio.numero,
        })
            .then(function (response) {
                console.log(response);
                setDados([])
            })
    }

    const handleEdit = (lab) => {
        console.log(lab);
        setDadosLab({
            nome: lab[2],
            cep: lab[0],
            numero: lab[1],
            gerente_cpf: lab[3]
        })
        setType(false);
        handleOpen()

    }
    const handleAdd = () => {
        setDadosLab([])
        setType(true);
        handleOpen()
    }

    const handleOpen = () => setOpen(true);


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
                                        onClick={() => handleDeleteUserClick(value.cell.row.original)}
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
                    <Button className={styles.button} onClick={handleAdd}>Solicitar novo teste</Button>
                    <ModalLab dados={dadosLab} setDados={setDadosLab} open={open} setOpen={setOpen} type={type} setType={setType} confirmModal={(laboratorio) => {
                        type ? handleClickAdd(laboratorio) : handleClickEdit(laboratorio)
                    }} />
                </div>

                <SortTable InitialPageSize={10} columns={columns} data={dados}></SortTable>

            </div>



        </div>
    )
}

export default Estoque;
