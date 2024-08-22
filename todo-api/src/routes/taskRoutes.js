// src/routes/taskRoutes.js
require('dotenv').config(); 
const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.post('/', taskController.createTask);
/**
 * @openapi
 * /tasks:
 *   post:
 *     summary: Cria uma nova tarefa
 *     description: Cria uma nova tarefa na lista de tarefas.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: Comprar mantimentos
 *               description:
 *                 type: string
 *                 example: Comprar leite, ovos e pão
 *     responses:
 *       201:
 *         description: Tarefa criada com sucesso
 *       500:
 *         description: Erro ao criar a tarefa
 */

router.get('/', taskController.getTasks);
/**
 * @openapi
 * /tasks:
 *   get:
 *     summary: Lista todas as tarefas
 *     description: Retorna uma lista de todas as tarefas.
 *     responses:
 *       200:
 *         description: Lista de tarefas
 *       500:
 *         description: Erro ao listar as tarefas
 */

router.get('/:id', taskController.getTaskById);
/**
 * @openapi
 * /tasks/{id}:
 *   get:
 *     summary: Obtém uma tarefa específica
 *     description: Retorna uma tarefa com base no ID fornecido.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Tarefa encontrada
 *       404:
 *         description: Tarefa não encontrada
 *       500:
 *         description: Erro ao obter a tarefa
 */
router.put('/:id', taskController.updateTask);
/**
 * @openapi
 * /tasks/{id}:
 *   put:
 *     summary: Atualiza uma tarefa
 *     description: Atualiza uma tarefa existente com base no ID fornecido.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Tarefa atualizada
 *       500:
 *         description: Erro ao atualizar a tarefa
 */

router.delete('/:id', taskController.deleteTask);

/**
 * @openapi
 * /tasks/{id}:
 *   delete:
 *     summary: Deleta uma tarefa
 *     description: Remove uma tarefa com base no ID fornecido.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Tarefa deletada com sucesso
 *       500:
 *         description: Erro ao deletar a tarefa
 */

module.exports = router;










