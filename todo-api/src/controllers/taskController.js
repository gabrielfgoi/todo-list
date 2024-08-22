// src/controllers/taskController.js

const taskModel = require('../models/taskModel');
const { v4: uuidv4 } = require('uuid');

exports.createTask = async (req, res) => {
    const { title, description } = req.body;
    const taskId = uuidv4();
    const task = {
        taskId,
        title,
        description,
        createdAt: new Date().toISOString(),
    };

    try {
        await taskModel.createTask(task);
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar a tarefa', details: error.message });
    }
};


exports.getTasks = async (req, res) => {
    try {
        const tasks = await taskModel.getTasks();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar as tarefas' });
    }
};

exports.getTaskById = async (req, res) => {
    try {
        const task = await taskModel.getTaskById(req.params.id);
        if (task) {
            res.json(task);
        } else {
            res.status(404).json({ error: 'Tarefa não encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao obter a tarefa' });
    }
};

exports.updateTask = async (req, res) => {
    const { title, description } = req.body;
    const updates = { title, description };

    try {
        const updatedTask = await taskModel.updateTask(req.params.id, updates);
        res.json(updatedTask);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar a tarefa' });
    }
};

exports.deleteTask = async (req, res) => {
    try {
        await taskModel.deleteTask(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar a tarefa' });
    }
};
