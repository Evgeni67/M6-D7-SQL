const router = require("express").Router();

const db = require("../../utils/db");

router.get("/", async (req, res, next) => {
  try {
    const { rows } = await db.query("SELECT * FROM authors;");
    res.send(rows);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});
router.get("/:id", async (req, res, next) => {
    try {
      const { rows } = await db.query(`SELECT * FROM authors WHERE id= ${req.params.id};`);
      res.send(rows);
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  });
  router.post("/", async (req, res, next) => {
    try {
        const {name,img,id} = req.body
      const result = await
       db.query(`INSERT INTO authors (name,img,id) VALUES ('${name}','${img}','${id}');`);
      res.send("Added");
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  });
  router.put("/:id", async (req, res, next) => {
    try {
        const {name,img,id} = req.body
      const result = await
       db.query(`UPDATE authors SET name='${name}',img='${img}',id=${req.params.id}`);
      res.send("Added");
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  });
  router.delete("/:id", async (req, res, next) => {
    try {
        const query = `DELETE FROM authors WHERE id = ${req.params.id}`
      const result = await
       db.query(query);
      res.send("Author delted successfully");
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  });
module.exports = router;
