
import React, { useState, useEffect } from 'react'
import styles from '../styles/meusTestes.module.css';
import Header from '../components/header/HeaderCliente'
import axios from "axios"
import SortTable from '../components/table.js'
import BasicModal from '../components/modal/BasicModal.js'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import LoaderSpinner from '../components/LoaderSpinner';


export default function ClienteTestes() {
    const [dados, setDados] = useState([]);
    const [helperEffect, setHelperEffect] = useState(false);

    const userAtual = useSelector((state) => state.user);

    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(`http://localhost:3001/testes`)
            .then((c) => {
                console.log(c.data.rows)
                console.log(c.data.rows)
                setDados(c.data.rows);
                setHelperEffect(false);
            }
            )
    }, [helperEffect]);


    const handleClickAdd = (teste) => {
        const id = Math.floor(Math.random() * 100 + 5);
        console.log('teste')
        console.log(userAtual)
        console.log(teste)
        axios.post(`http://localhost:3001/postTestes`, {
            id_teste: id,
            usuario_cpf: userAtual.user[0],
            time_teste: teste.time_teste,
            id_tipo_teste: parseInt(teste.id_tipo_teste),
        })
            .then(function (response) {
                console.log(response);
                setHelperEffect(true)
            })
    }


    const columns = React.useMemo(
        () => [
            {
                Header: 'ID_tipo_teste',
                accessor: '2',
            },
            {
                Header: 'usuário_CPF',
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
            // {
            //     Header: 'Resultado',
            //     accessor: '5',
            // },
            // {
            //     Header: 'Opções',
            //     accessor: 'options',
            //     Cell: (value) => {
            //         return (
            //             <>
            //                 <span className="buttons">
            //                     <button
            //                         className="TableButton"
            //                         type="button"
            //                         onClick={() => handleStaffEditClick(value.cell.row.original)}
            //                     >
            //                         Editar
            //                     </button>{' '}
            //                     <button
            //                         className="TableButton"
            //                         onClick={() => handleDeleteUserClick(value.cell.row.original)}
            //                     >
            //                         Excluir
            //                     </button>
            //                     <style jsx>{`
            //                     .TableButton{
            //                         background-color:#791E94;
            //                         color: white;
            //                         border-radius: 10px;
            //                         padding: 5px;
            //                         border-color: #791E94;
            //                     }
            //                     .buttons{
            //                     display: flex;
            //                     justify-content: space-around;
            //                     }
            //                     `}</style>
            //                 </span>


            //             </>
            //         );
            //     }
            // }
        ],
        []
    );

    return (
        <div className={styles.meusTestes}>

            <Header />
            <div >
                <h1 className={styles.titulo}>Testes Clientes</h1>
                <div className={styles.cimaDaTabela}>
                    <BasicModal confirmModal={(teste) => {
                        handleClickAdd(teste)
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