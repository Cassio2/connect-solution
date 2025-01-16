const express = require('express');
const path = require("path")
const app = express();
const { engine } = require('express-handlebars');


// Configurar o Handlebars como o motor de templates
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views')

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
