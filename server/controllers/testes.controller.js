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
            return connection.execute(" select * from testes where funcionarios_cpf = :cpf or funcionarios_cpf is null", {
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


//put materiais

export function putTestes(req, res) {
    let connection;
    oracledb.getConnection(dbConfig)
        .then((c) => {
            console.log(req.body)
            console.log(req.params)
            connection = c;
            return connection.execute("update testes SET funcionarios_cpf = :funcionarios_cpf , time_entrega = :time_entrega, resultado = :resultado WHERE id_teste = :id_teste",
                {
                    funcionarios_cpf: req.body.funcionarios_cpf,
                    time_entrega: req.body.time_entrega,
                    resultado: req.body.resultado,
                    id_teste: req.params.id_teste
                });
        }).then((c) => {
            console.log('FFF')
            res.status(200).json(c);
        }).then(() => {
            if (connection) {
                connection.close();
            }
        }).catch((error) => {
            res.status(500).json({ message: error.message || "Some error occurred!" });
        });
};


//delete testes
export function deleteTestes(req, res) {
    let connection;
    oracledb.getConnection(dbConfig)
        .then((c) => {
            connection = c;
            return connection.execute("DELETE FROM testes WHERE id_teste = :id_teste",
                {
                    id_teste: req.params.id_teste
                });
        }).then(() => {
            res.status(200).json("User successfully deleted!");
        }).then(() => {
            if (connection) {
                connection.close();
            }
        }).catch((error) => {
            res.status(500).json({ message: error.message || "Some error occurred!" });
        });
};