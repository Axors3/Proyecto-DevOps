import request from 'supertest'
import { createServer } from '../../src/app.js'
import * as usuarioController from '../../src/controllers/usuarioController.js'

// Mock the sequelize module
jest.mock('sequelize', () => {
  const mockSequelize = jest.genMockFromModule('sequelize')
  mockSequelize.prototype.define = jest.fn()
  mockSequelize.prototype.close = jest.fn()
  mockSequelize.prototype.authenticate = jest.fn()
  return mockSequelize
})

const app = createServer();

describe('Test the usuario endpoints', () => {
  
  test('La ruta uadyfon/api/usuarios debe llamar a get usuarios', async () => {
    // Mock the getUsuarios function to return a Promise that resolves to an object with a rows property
    const mockedGetUsuarios = jest.spyOn(usuarioController, 'getUsuarios');
    mockedGetUsuarios.mockResolvedValueOnce({
      rows: [{
        id: 1,
        username: 'MockedUser',
        email: 'mockeduser@email.com',
        password: 'password',
        telefono: '9991234567',
        edad: 22
      }]
    });

    // Test if the server response is as expected
    const response = await request(app).get('/uadyfon/api/usuarios');
    expect(response.status).toBe(200)
    expect(mockedGetUsuarios).toHaveBeenCalled();
  });
}); 

