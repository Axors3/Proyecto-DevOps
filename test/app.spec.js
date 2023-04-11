import app from '../src/app.js'
import request from 'supertest'

describe('debe existir la ruta principal y sus endpoints', () => {
    
    test('GET /uadyfon/api', async () => {
        
        const resp = await request(app).get('/uadyfon/api').send()
        expect(resp.ok).toBeTruthy();

    });

    test('GET /uadyfon/api/usuarios', async () => {
        
        const resp = await request(app).get('/uadyfon/api/usuarios').send()
        expect(resp.ok).toBeTruthy();

    });

    test('GET /uadyfon/api/vendedores', async () => {
        
        const resp = await request(app).get('/uadyfon/api/vendedores').send()
        expect(resp.ok).toBeTruthy();

    });

    test('GET /uadyfon/api/telefonos', async () => {
        
        const resp = await request(app).get('/uadyfon/api/telefonos').send()
        expect(resp.ok).toBeTruthy();

    });

    test('GET /uadyfon/api/planes', async () => {
        
        const resp = await request(app).get('/uadyfon/api/planes').send()
        expect(resp.ok).toBeTruthy();

    });

    test('GET /uadyfon/api/clientes', async () => {
        
        const resp = await request(app).get('/uadyfon/api/clientes').send()
        expect(resp.ok).toBeTruthy();

    });
});