const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Rota de teste
app.get("/ping", (req, res) => {
  res.json({ message: "Servidor está rodando!" });
});

// Rota de cadastro
app.post("/cadastro", (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ error: "Email e senha são obrigatórios!" });
  }

  // Aqui futuramente você pode salvar no banco com Prisma
  console.log("Novo cadastro:", email, senha);

  res.status(201).json({ message: "Cadastro realizado com sucesso!" });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
