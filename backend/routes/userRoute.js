import express from 'express'
import {
    getUser,
    getUserById,
    saveUser,
    update,
    deleteUser
} from '../controllers/userControllers.js';

const router = express.Router();

router.get('/users',getUser);
router.get('/users/:id',getUserById);
router.get('/users',saveUser);
router.get('/users/:id',update);
router.get('/users/:id',deleteUser)

export default router