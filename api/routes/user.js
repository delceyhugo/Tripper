const express = require('express')
const userCtrl = require('../controllers/user')
const auth = require('../middleware/auth')
const router = express.Router()
// Schéma de données    
const User = require('../models/user')




// Crée un utilisateur
router.post('/signup', userCtrl.signup)
// Connecter un utilisateur
router.post('/login', userCtrl.login)
// Afficher les utilisateurs
router.get('/getAllUsers', auth, userCtrl.getAllUsers)
// Modifier un utilisateur
router.put('/modify/:id', auth, userCtrl.modifyUser)
// Supprimer un utilisateur 
router.delete('/delete/:id', auth, userCtrl.deleteUser)


module.exports = router;