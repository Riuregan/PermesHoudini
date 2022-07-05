import oracledb from "oracledb";
import { dbConfig } from '../dbConfig.js'
oracledb.autoCommit = true

//get Testes
export function getTestes(req, res) {
    let users = new Array();
    let connection;
    console.log(req.body)
    oracledb.getConnection(dbConfig)
        .then((c) => {
            connection = c;
            return connection.execute("select * from testes");

        }).then((result) => {
            // result.rows.forEach((elemento) => {
            // let user = new Object();
            // user.id_teste = elemento[0];
            // user.usuario_cpf = elemento[1];
            //     users.push(user);
            // });
            res.status(200).json(result);
        }).then((app) => {
            if (connection) {
                connection.close();
            }
        }).catch((error) => {
            res.status(500).json({ message: error.message || "Some error occurred!" });
        });

};

//get Testes Func
export function getTestesFunc(req, res) {
    let users = new Array();
    let connection;
    console.log(req.params.cpf)
    console.log('FUNCCCCCCC')
    oracledb.getConnection(dbConfig)
        .then((c) => {
            connection = c;
            return connection.execute("select * from testes where funcionarios_cpf != :cpf and funcionarios_cpf = ''", {
                cpf: req.params.cpf,
            });
        }).then((result) => {
            console.log('FUNCC')
            console.log(result)
            // result.rows.forEach((elemento) => {
            // let user = new Object();
            // user.id_teste = elemento[0];
            // user.usuario_cpf = elemento[1];
            //     users.push(user);
            // });
            res.status(200).json(result);
        }).then((app) => {
            if (connection) {
                connection.close();
            }
        }).catch((error) => {
            res.status(500).json({ message: error.message || "Some error occurred!" });
        });

};

//post Testes
export function postTestes(req, res) {
    let users = new Array();
    let connection;
    console.log(req.body.id_teste)
    console.log(req.body.usuario_cpf)
    console.log(req.body.time_teste)
    console.log(req.body.id_tipo_teste)
    console.log('req.body')
    oracledb.getConnection(dbConfig)
        .then((c) => {
            connection = c;
            return connection.execute("insert into testes (id_teste, usuario_cpf,id_tipo_teste,time_teste ) values(:id_teste,:usuario_cpf,:id_tipo_teste, :time_teste)", {
                id_teste: req.body.id_teste,
                usuario_cpf: req.body.usuario_cpf,
                id_tipo_teste: req.body.id_tipo_teste,
                time_teste: req.body.time_teste,
            });

        }).then((result) => {
            console.log('result')
            console.log(result)
            res.status(200).json(result);
        }).then((app) => {
            if (connection) {
                connection.close();
            }
        }).catch((error) => {
            res.status(500).json({ message: error.message || "Some error occurred!" });
        });

};