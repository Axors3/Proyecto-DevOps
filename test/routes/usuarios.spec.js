import supertest from 'supertest'
import {jest} from '@jest/globals'
import {createServer} from '../../src/app.js'
import * as controller from '../../src/controllers/usuarioController'



const app = createServer();



const mockData = [
    {
        id: 1,
        username:'dmop',
        email:'dmop@email.com',
        password:'password',
        telefono:'12345',
        edad:'19',
        updatedAt: "2023-03-29T23:34:36.860Z",
        createdAt: "2023-03-29T23:34:36.860Z"
    },
    {
        id: 2,
        username:'maria',
        email:'maria@email.com',
        password:'password',
        telefono:'12345',
        edad:'22',
        updatedAt: "2023-03-29T23:34:36.860Z",
        createdAt: "2023-03-29T23:34:36.860Z" 
    }
]
 


describe('testing crud methods', () => {
    
    let hola = jest.spyOn(controller,'getUsuarios').mockImplementation(jest.fn())

    test('should ', async() => {
        
        await supertest(app).get('/uadyfon/api/vendedores').send()
        expect(hola).toHaveBeenCalled()
        
    });
});
