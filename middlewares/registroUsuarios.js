const {MongoClient} = require("mongodb")
const url = process.env.URLMONGO;
const database = process.env.BBDD;
const client = new MongoClient(url)
const coleccion = process.env.COLECCIONDOS;



async function registroUsuario(req,res) {
    try {
      console.log('req.token registroUsuario : ',req.usuario)

      await client.connect();
      const db = client.db(database);
      const coll = db.collection(coleccion);
      const {nombre,pwd} = req.body;
      console.log(req.body)
      let query = [{nombre:nombre,pwd:pwd}]
      
      const result = await coll.insertMany(query)
      console.log('result ',result)
      let saida = {
        mensaxe: result
      } 
      res.send(saida)
    } finally {
     
      await client.close();
     
    }
  }

  module.exports = {
    registroUsuario
  }