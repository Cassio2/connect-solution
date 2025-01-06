const express = require('express');
const path = require("path")
const app = express();


// Configurar o EJS como o mecanismo de template
app.set('view engine', 'ejs');

// Configuração para servir arquivos estáticos
app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));

// Definir a pasta de visualizações
app.set('views', path.join(__dirname, 'views'));

// Servir arquivos estáticos (CSS, imagens, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Rotas
const indexRoutes = require('./routes/router');
app.use('/', indexRoutes)



const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
