const oracledb = require("oracledb");
const express = require("express");
const app = express();
const cors = require("cors");
oracledb.autoCommit = true

oracledb.initOracleClient({
    libDir: "C:\\Users\\vitor\\Desktop\\instantclient_21_6",
});

app.use(express.json());
app.use(cors());

const dbConfig = {
    user: "eclbdit119",
    password: "SamuelLBDI12022",
    connectionString: "bdengcomp_high",
}

app.get("/lab", (req, res) => {
    let users = new Array();
    let connection;
    oracledb.getConnection(dbConfig)
        .then((c) => {
            connection = c;
            return connection.execute("select * from time");

        }).then((result) => {
            // result.rows.forEach((elemento) => {
            //     let user = new Object();
            //     user.id = elemento[0];
            //     user.nome = elemento[1];
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

});

// GET TESTES


app.get("/testes", (req, res) => {
    let users = new Array();
    let connection;
    console.log(req.body)
    oracledb.getConnection(dbConfig)
        .then((c) => {
            connection = c;
            return connection.execute("select * from testes");

        }).then((result) => {
            result.rows.forEach((elemento) => {
                let user = new Object();
                user.id_teste = elemento[0];
                user.usuario_cpf = elemento[1];
                users.push(user);
            });
            res.status(200).json(users);
        }).then((app) => {
            if (connection) {
                connection.close();
            }
        }).catch((error) => {
            res.status(500).json({ message: error.message || "Some error occurred!" });
        });

});

////LOGIN CLIENT

app.get("/loginClient/:cpf/:senha", (req, res) => {
    let users = new Array();
    console.log('3')
    let connection;
    console.log(req.params.senha);
    console.log(req.params.cpf);
    oracledb.getConnection(dbConfig)
        .then((c) => {
            console.log('2')
            connection = c;
            return connection.execute("select * from usuario where cpf = :cpf and senha = :senha", {
                cpf: req.params.cpf,
                senha: req.params.senha
            });
        })
        .then((result) => {
            res.status(200).json(result);
        }).then((app) => {
            if (connection) {
                connection.close();
            }
        }).catch((error) => {
            res.status(500).json({ message: error.message || "Some error occurred!" });
        });

})

//LOGIN FUNC

app.get("/loginFunc/:cpf/:senha", (req, res) => {
    let users = new Array();
    let connection;
    console.log(req.params.senha);
    oracledb.getConnection(dbConfig)
        .then((c) => {
            console.log('1');
            connection = c;
            return connection.execute("select * from funcionarios where cpf = :cpf and senha = :senha", {
                cpf: req.params.cpf,
                senha: req.params.senha
            });
        }).then((result) => {
            console.log('func')
            console.log(result);
            res.status(200).json(result);
        }).then((app) => {
            if (connection) {
                connection.close();
            }
        }).catch((error) => {
            res.status(500).json({ message: error.message || "Some error occurred!" });
        });

})




app.post('/create', (req, res) => {
    oracledb.getConnection(dbConfig)
        .then((c) => {
            connection = c;
            return connection.execute(`insert into time (id, nome) values (:id, :nome)`, {
                id: 33,
                nome: 'efgigdfff'
            }, { autoCommit: true });
        }).then((result) => {
            console.log(result)
            res.status(201).json("User successfully created!");
        }).then(() => {
            if (connection) {
                connection.close();
            }
        }).catch((error) => {
            res.status(500).json({ message: error.message || "Some error occurred!" });
        });
});

app.delete('/delete/:userId', (req, res) => {
    oracledb.getConnection(dbConfig)
        .then((c) => {
            connection = c;
            return connection.execute("DELETE FROM time WHERE id = :id",
                {
                    id: req.params.userId
                }, { autoCommit: true });
        }).then(() => {
            res.status(200).json("User successfully deleted!");
        }).then(() => {
            if (connection) {
                connection.close();
            }
        }).catch((error) => {
            res.status(500).json({ message: error.message || "Some error occurred!" });
        });
});

app.put('/update/:userId', (req, res) => {
    oracledb.getConnection(dbConfig)
        .then((c) => {
            connection = c;
            return connection.execute("UPDATE time SET nome = :nome WHERE id = :id",
                {
                    id: req.params.userId,
                    nome: req.body.nome,
                }, { autoCommit: true });
        }).then(() => {
            res.status(200).json("User successfully updated! ID: " + req.params.userId);
        }).then(() => {
            if (connection) {
                connection.close();
            }
        }).catch((error) => {
            res.status(500).json({ message: error.message || "Some error occurred!" });
        });
});

app.listen(3001, () => {
    console.log("rodando na porta 3001");
});
