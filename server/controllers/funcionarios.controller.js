import oracledb from "oracledb";
import { dbConfig } from '../dbConfig.js'
oracledb.autoCommit = true

//get laboratorios
export function getFuncionarios(req, res) {
    let users = new Array();
    let connection;
    console.log(req.body)
    oracledb.getConnection(dbConfig)
        .then((c) => {
            connection = c;
            return connection.execute("select * from funcionarios");

        }).then((result) => {
            res.status(200).json(result);
        }).then((app) => {
            if (connection) {
                connection.close();
            }
        }).catch((error) => {
            res.status(500).json({ message: error.message || "Some error occurred!" });
        });

};


//put usuario
export function putFuncionarios(req, res) {
    let connection;
    oracledb.getConnection(dbConfig)
        .then((c) => {
            connection = c;
            return connection.execute("update funcionarios SET nome = :nome , senha = :senha WHERE cpf = :cpf",
                {
                    cpf: req.params.cpf,
                    nome: req.body.nome,
                    senha: req.body.senha
                });
        }).then((c) => {
            res.status(200).json(c);
        }).then(() => {
            if (connection) {
                connection.close();
            }
        }).catch((error) => {
            res.status(500).json({ message: error.message || "Some error occurred!" });
        });
};
//put funcionarios
export function putFuncionariosTabela(req, res) {
    let connection;
    oracledb.getConnection(dbConfig)
        .then((c) => {
            connection = c;
            return connection.execute("update funcionarios SET nome = :nome ,telefone = :telefone, email = :email, senha = :senha WHERE cpf = :cpf",
                {
                    nome: req.body.nome,
                    telefone: req.body.telefone,
                    email: req.body.email,
                    senha: req.body.senha,

                });
        }).then((c) => {
            res.status(200).json(c);
        }).then(() => {
            if (connection) {
                connection.close();
            }
        }).catch((error) => {
            res.status(500).json({ message: error.message || "Some error occurred!" });
        });
}
//post funcionarios
export function postFuncionarios(req, res) {
    let connection;
    oracledb.getConnection(dbConfig)
        .then((c) => {
            connection = c;
            return connection.execute(" insert into funcionarios (cpf,nome,email,telefone,senha, laboratorio_cep, laboratorio_numero) values (:cpf,:nome,:email,:telefone,:senha, :laboratorio_cep, :laboratorio_numero)",
                {
                    cpf: req.body.cpf,
                    nome: req.body.nome,
                    email: req.body.email,
                    telefone: req.body.telefone,
                    senha: req.body.senha,
                    laboratorio_cep: req.body.laboratorio_cep,
                    laboratorio_numero: req.body.laboratorio_numero
                });
        }).then((c) => {
            res.status(200).json(c);
        }).then(() => {
            if (connection) {
                connection.close();
            }
        }).catch((error) => {
            res.status(500).json({ message: error.message || "Some error occurred!" });
        });
}
//delete funcionarios
export function deleteFuncionariosTabela(req, res) {
    let connection;
    oracledb.getConnection(dbConfig)
        .then((c) => {
            connection = c;
            return connection.execute("DELETE FROM funcionarios WHERE cpf = :cpf",
                {
                    cpf: req.params.cpf
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