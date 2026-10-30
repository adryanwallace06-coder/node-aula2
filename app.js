import express from 'express';
import pets from "./pets.js";

const app = express();
const port = 3000;

app.get('/', (requisicao, resposta) =>{
    resposta.send(pets);
});

app.get("/:nome", (requisicao, resposta) =>{
    const nomeInformado = requisicao.params.nome.toLowerCase();
    const pet = pets.find((infoPet) => infoPet.nome === nomeInformado);

    resposta.send(pet);
});

app.get("/:tutor", (requisicao, resposta) =>{
    const tutorInformado = requisicao.params.tutor.toLowerCase();
    const tutorPet = tutor.find((infoTutor) => infoTutor.tutor === tutorInformado);

    resposta.send(tutorPet);
});


app.listen(port, () => console.log(`Servidor rodando na porta ${port}!`));
