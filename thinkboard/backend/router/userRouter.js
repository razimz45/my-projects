import express from 'express';
import { addNote, deleteNote, findNote, getAllNotes, updateNote } from '../controllers/userController.js';





const router=express.Router();


router.get('/',getAllNotes)
router.get('/:id',findNote)
router.post('/',addNote)
router.put('/:id',updateNote)
router.delete('/:id',deleteNote)








export default router;
