app.get("/testes", (req, res) => {
    let users = new Array();
    let connection;
    oracledb.getConnection(dbConfig)
        .then((c) => {
            connection = c;
            return connection.execute("select * from time");

        }).then((result) => {
            result.rows.forEach((elemento) => {
                let user = new Object();
                user.id = elemento[0];
                user.nome = elemento[1];
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