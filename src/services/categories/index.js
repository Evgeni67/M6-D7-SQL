const router = require("express").Router();

const db = require("../../utils/db");


router.get("/", async (req, res, next) => {
    try {
      const { rows } = await db.query("SELECT * FROM categories;");
      res.send(rows);
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  });
  router.get("/:id", async (req, res, next) => {
    try {
      const { rows } = await db.query(`SELECT * FROM categories WHERE id = ${req.params.id};`);
      res.send(rows);
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  });
  router.post("/", async (req, res, next) => {
    try {
        const{name,img,id} = req.body
        const query = `INSERT INTO categories (name,img,id) VALUES('${name}', '${img}', ${id})`
      const result = await db.query(query);
      res.send(result);
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  });
 router.delete("/:id",async(req,res,next) => {
     try{
         const query = `DELETE FROM categories WHERE id = ${req.params.id}`
         const result = await db.query(query)
         res.send("deleted")
     }catch(e){
         console.log(e)
     }
 })
 router.put("/:id",async(req,res,next)=>{
     try{
         const{name,img} = req.body
         const query = `UPDATE categories SET name = '${name}', img = '${img}', id = ${req.params.id}`
         const result = await db.query(query)
         res.send("updated")
     }catch (e) {
         console.log(e)
     }
 })
module.exports = router;
