// src/app.js











require('dotenv').config();
const express = require('express');
const taskRoutes = require('./routes/taskRoutes');
const { swaggerUi, swaggerSpec } = require('./swagger');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Configurar Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Usar as rotas definidas em taskRoutes
app.use('/tasks', taskRoutes);

// Iniciar o servidor
app.listen(port, () => {
    console.log(`API rodando na porta ${port}`);
});

module.exports = app;
