const {addUser, deleteUser, getUser, updateUser} = require("../repository");
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    let _users = await getUser(req.query.search)
    res.send(_users);
});
router.get('/:id', async (req, res) => {
    let _users = await getUser()
    let id = req.params.id
    let user = _users.find(t => t.id == id);
    user ? res.send(user) : res.send(404)
})
router.post('/', async (req, res) => {
    let name = req.body.name
    let result = await addUser(name)
    res.send(JSON.stringify(204))
})
router.delete('/:id', async (req, res) => {
    let result = await deleteUser(req.params.id)
    res.send(JSON.stringify(200))
})
router.put('/', async (req, res) => {
    const name = req.body.name;
    const id = req.body.id;
    await updateUser(id,name);
    res.send(JSON.stringify(200))
})


module.exports = router;