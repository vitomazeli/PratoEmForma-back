const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;


app.use(cors());
app.use(express.json());

app.get("/ping", (req, res) => {
  res.json({ message: "Servidor está rodando!" });
});

app.post("/cadastro", (req, res) => {
    const { nome, email, senha } = req.body;

    // AQUI: a verificação agora inclui a variável `nome`
    if (!nome || !email || !senha) {
        return res.status(400).json({ error: "Nome, email e senha são obrigatórios!" });
    }

    // O console.log também é atualizado para mostrar o nome
    console.log("Novo cadastro:", nome, email, senha);

    res.status(201).json({ message: "Cadastro realizado com sucesso!" });
});

app.post("/login", (req, res) => {
    const { email, senha } = req.body;

    if (!email || !senha) {
        return res.status(400).json({ error: "Email e senha são obrigatórios!" });
    }

    // Lógica para verificar o email e a senha no banco de dados
    // ...

    // Exemplo de resposta de sucesso (você deve adaptar)
    res.status(200).json({ message: "Login realizado com sucesso!" });
});


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

// ... (seu código atual de setup)

// Rota de login


// ... (sua rota de cadastro e o app.listen)


