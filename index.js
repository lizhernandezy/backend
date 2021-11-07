const mqtt = require('mqtt')
const express = require('express');
const { application } = require('express');
const apiRouter = require('./routes/api'); //importa un fichero
require('./db');
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', apiRouter);

// Puerto habilitado para que se esté ejecutando server 3000
app.listen(3000, ()=>{
  console.log('Servidor arrancado!');
})

// Puerto habilitado para conectar con el Broker 1883
const TCP_URL = 'mqtt://localhost:1883'
const clientId = `mqtt_${Math.random().toString(16).slice(3)}`

const client = mqtt.connect(TCP_URL, {
    clientId,
    clean: true,
    connectTimeout: 4000,
    username: 'emqx',
    password: 'public',
    reconnectPeriod: 1000,
  })
  
  //const topic = '/nodejs/mqtt'
  const topic = 'prueba2'
  client.on('connect', () => {
    console.log('Connected')
    client.subscribe([topic], () => {
      console.log(`Subscribe to topic '${topic}'`)
    })
    client.publish(topic, 'Holaaaa', { qos: 0, retain: false }, (error) => {
      if (error) {
        console.error(error)
      }
    })
  })

  client.on('message', (topic, payload) => {
    console.log('Received Message:', topic, payload.toString())
    //const jsonstring = JSON.stringify(payload);
    //console.log(jsonstring);
    //console.log(typeof(jsonstring));
  })

 



//npm start - ejecutar el proyecto