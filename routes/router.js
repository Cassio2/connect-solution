const express=require("express")
const router=express.Router()



// Rota para a página inicial
router.get('/', (req, res) => {
    res.render('home', { title: 'Página Inicial' });
});

// Rota para a página "Sobre"
router.get('/about', (req, res) => {
    res.render('sobre', { title: 'Sobre' });
});

// Rota para a página de contato
router.get('/contact', (req, res) => {
    res.render('contactos', { title: 'Contato' });
});


module.exports=router