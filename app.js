const express = require("express");
const path = require("path");
const app = express();

// Configurar a pasta pública para arquivos estáticos
app.use(express.static(path.join(__dirname, '/public')));

// Configuração do EJS como view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Rota principal
const indexRouter = require("./routes/index");
app.use("/", indexRouter);

// Rotas para alunos
const categoriaRouter = require("./routes/alunos");
app.use("/alunos", categoriaRouter);

// Rotas para quem somos
const sobreRouter = require("./routes/quemsomos");
app.use("/quemsomos", sobreRouter);


// Iniciar o servidor e sincronizar com o banco de dados
app.listen(3000, () => {
    console.log("Servidor em execução na porta 3000");
});