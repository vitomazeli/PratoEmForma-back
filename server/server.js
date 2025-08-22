const express = require("express");
const { PrismaClient } = require("@prisma/client");
const cors = require("cors");

const prisma = new PrismaClient();
const app = express();

app.use(cors()); // permite frontend se conectar
app.use(express.json());

// Rota de cadastro
app.post("/cadastro", async (req, res) => {
  const { email, senha } = req.body;

  try {
    const novoUsuario = await prisma.usuario.create({
      data: { email, senha },
    });
    res.json(novoUsuario);
  } catch (error) {
    res.status(400).json({ error: "Erro ao cadastrar. Email pode já estar em uso." });
  }
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
