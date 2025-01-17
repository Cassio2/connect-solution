// routes/router.js
const express = require('express');
const router = express.Router();

// Rota para a página inicial (Hello World temporário)
router.get('/', (req, res) => {
    res.render('sobre', { title: 'Home' });
});



module.exports = router;
