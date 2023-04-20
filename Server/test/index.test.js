const app = require('../src/app');
const session = require('supertest');
const agent = session(app);

const process = require("dotenv").config()

const emailv = process.parsed.EMAIL
const passwordv = process.parsed.PASSWORD

describe("Test de RUTAS", () => {
    describe('GET /rickandmorty/character/:id', () => {
        it('Responde con status: 200', async () => {
            await agent.get('/rickandmorty/character/1').expect(200);
        });
        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" , "episode" e "image"', async () => {
            const response = await agent.get('/rickandmorty/character/1');
            expect(response.body).toHaveProperty('id');
            expect(response.body).toHaveProperty('name');
            expect(response.body).toHaveProperty('species');
            expect(response.body).toHaveProperty('gender');
            expect(response.body).toHaveProperty('status');
            expect(response.body).toHaveProperty('origin');
            expect(response.body).toHaveProperty('image');
            expect(response.body).toHaveProperty('episode');
        })
        it('Si hay un error responde con status: 500', async () => {
            await agent.get("/rickandmorty/character/999").expect(500)
        })
    })
    describe('GET /rickandmorty/login', () => {
        it('Retorna un objeto con la propiedad access en true cuando se le pasa la información de login correcta', async () => {
            const response = await agent.get(`/rickandmorty/login?email=${emailv}&password=${passwordv}`);
            expect(response.body).toEqual({ access: true });
        });
        it('Retorna un objeto con la propiedad access en false cuando se le pasa la información de login incorrecta', async () => {
            const response = await agent.get(`/rickandmorty/login?email=sarasa&password=sarasa`);
            expect(response.body).toEqual({ access: false });
        });
    });
    describe("POST /rickandmorty/fav", () => {
        it("Lo que se le envie debe ser devuelto en un arreglo", async () => {
            const character = { id: 1, name: "Rick Sanchez", species: "Human" };
            const response = await agent.post("/rickandmorty/fav").send(character);
            expect(response.status).toBe(200);
            expect(response.body).toEqual(expect.arrayContaining([character]));
        });
        it("Debe agregar un personaje mas aal arreglo", async () => {
            const character1 = { id: 1, name: "Rick Sanchez", species: "Human" };
            const character2 = { id: 2, name: "Morty Smith", species: "Human" };
            const [response1, response2] = await Promise.all([
                agent.post("/rickandmorty/fav").send(character1),
                agent.post("/rickandmorty/fav").send(character2),
            ]);
            expect(response2.status).toBe(200);
            expect(response2.body).toEqual(expect.arrayContaining([character1, character2]));
        });
    });
    describe('DELETE /rickandmorty/fav/:id', () => {
        it('Si el ID es invalido debe devolver el array intacto', async () => {
            const id = 1000;
            const character = [{id:1, name: "Rick Sanchez", species: "Human" }, {id:2, name:"Morty Smith", species:"Human"}];
            const res = await agent.delete(`/rickandmorty/fav/${id}`);
            expect(res.status).toBe(200);
            expect(res.body).toEqual(character) 
        });

        it('Debe remover el personaje favorito si su ID es encontrado', async () => {
            const id = 1;
            const character = [{id:2, name:"Morty Smith", species:"Human"}] 
            const res = await agent.delete(`/rickandmorty/fav/${id}`);
            console.log(res.body)
            expect(res.status).toBe(200);
            expect(res.body).toEqual(character);
        });
    });
})