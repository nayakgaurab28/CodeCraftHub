// src/routes/userRoutes.js
const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', authMiddleware, (req, res) => {
    res.json({ userId: req.user.id });
});

module.exports = router;