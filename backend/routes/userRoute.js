import express from 'express'
import {
    getUsers,
    getUserById,
    saveUser,
    updateUser,
    deleteUser
} from '../controllers/userControllers.js';

const router = express.Router();

router.get('/users',getUsers);
router.get('/users/:id',getUserById);
router.get('/users',saveUser);
router.get('/users/:id',updateUser);
router.get('/users/:id',deleteUser)

export default router