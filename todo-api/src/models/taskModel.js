// src/models/taskModel.js
require('dotenv').config(); 

const AWS = require('aws-sdk');
AWS.config.update({ region: process.env.AWS_REGION });
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = process.env.TABLE_NAME;

exports.createTask = async (task) => {
    const params = {
        TableName: TABLE_NAME,
        Item: task
    };
    try {
        await dynamoDb.put(params).promise();
        return task;
    } catch (error) {
        console.error('Erro ao criar a tarefa no DynamoDB:', error);
        throw error; // Re-throw o erro para que o controlador possa lidar com ele
    }
};

exports.getTasks = async () => {
    const params = {
        TableName: TABLE_NAME
    };
    const result = await dynamoDb.scan(params).promise();
    return result.Items;
};

exports.getTaskById = async (taskId) => {
    const params = {
        TableName: TABLE_NAME,
        Key: { taskId }
    };
    const result = await dynamoDb.get(params).promise();
    return result.Item;
};

exports.updateTask = async (taskId, updates) => {
    const params = {
        TableName: TABLE_NAME,
        Key: { taskId },
        UpdateExpression: 'set title = :title, description = :description',
        ExpressionAttributeValues: {
            ':title': updates.title,
            ':description': updates.description
        },
        ReturnValues: 'UPDATED_NEW'
    };
    const result = await dynamoDb.update(params).promise();
    return result.Attributes;
};

exports.deleteTask = async (taskId) => {
    const params = {
        TableName: TABLE_NAME,
        Key: { taskId }
    };
    await dynamoDb.delete(params).promise();
};
