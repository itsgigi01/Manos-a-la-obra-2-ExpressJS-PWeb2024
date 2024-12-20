const express = require("express");
const router = express.Router();
const {
    createTask,
    updateTask,
    deleteTask,
    getTaskById,
    getTasks,
} = require("../controller/task");  




// Obtener todas las tareas
router.get("/", getTasks); 

// Obtener tarea segun id (ID personalizado)
router.get("/:id", getTaskById);  

// Crear una nueva tarea
router.post("/", createTask);  

// Actualizar una tarea existente
router.put("/:id", updateTask);  

// Eliminar una tarea
router.delete("/:id", deleteTask);  

module.exports = router;
