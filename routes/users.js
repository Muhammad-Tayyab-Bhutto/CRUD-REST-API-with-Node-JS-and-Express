import express from "express";
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

// let users = [
    // {
    //     firstName: "Muhammad",
    //     lastName: "Tayyab",
    //     cms_id: 286,
    //     semester: "forth"
    // },
    // {
    //     firstName: "Ali",
    //     lastName: "Ahmed",
    //     cms_id: 287,
    //     semester: "forth"
    // }
// ]
let users = [];

// All routes in here are starting with /users
// finds all users
router.get('/', (req, res) =>{
    res.send(users);
});

// create user
router.post('/', (req, res) => {
    const user = req.body;
    users.push({...user, id: uuidv4()});
    res.send(`User with the name ${user.firstName} ${user.lastName} added to the database!`)
});

// finds user details
router.get('/:id', (req, res) => {
    const{ id } = req.params;

    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser);
});

// delete user from database
router.delete('/:id', (req, res) =>{
    const { id } = req.params;
    //  user.id !== id; then it will remove the element 
    users = users.filter((user) => user.id !== id);

    res.send(`User with the id ${id} deleted from database!`);
});

// Updating user
router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const {firstName, lastName, cms_id, semester} = req.body;
    const user = users.find((user) => user.id === id);
    if (firstName){
        user.firstName = firstName;
    }
    if (lastName){
        user.lastName = lastName;
    }
    if (cms_id){
        user.cms_id = cms_id;
    }
    if (semester){
        user.semester = semester;
    }

    res.send(`User with the id ${id} updated in database!`);
})
export default router;