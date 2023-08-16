/*sirve para configurar todo el codigo de express de backend*/
import express from 'express';
import morgan from 'morgan';

const app = express()

app.use(morgan('dev'))

export default app;



/*inicializacion de express, para que la sintaxis de import funcione ,
se le anade:  "type": "module"  al archivo package.json , de esta
forma se puede conectar al localhost:3000*/



