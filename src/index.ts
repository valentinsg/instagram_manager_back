import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('API de gestión de perfil de Instagram');
});

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
}); 