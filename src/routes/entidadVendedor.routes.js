import { Router } from "express";
const router = Router();

router.get('/vendedores',(req,res)=>res.send('obteniendo vendedores'));

router.post('/vendedores',(req,res)=>res.send('Creando vendedores'));

router.put('/vendedores',(req,res)=>res.send('actualizando vendedores'));

router.delete('/vendedores',(req,res)=>res.send('eliminando vendedores'));

export default router