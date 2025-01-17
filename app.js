// server.js
const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');
const app = express();

// Configuração do Handlebars
app.engine('handlebars', engine({
    // Aqui você pode configurar seu layout, se necessário
    defaultLayout: 'main', // Se você tiver um layout principal
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Servir arquivos estáticos (como Bootstrap e outros assets)
app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));
app.use(express.static(path.join(__dirname, 'public')));

// Rotas

app.use('/', require('./routes/router'));

// Iniciar o servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
