const router = require("express").Router();

const db = require("../../utils/db");

router.get("/", async (req, res, next) => {
  try {
    const { rows } = await db.query("SELECT * FROM articles;");
    res.send(rows);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});
router.get("/:id", async (req, res, next) => {
    try {
      const { rows } = await db.query(`SELECT * FROM articles WHERE id = ${req.params.id};`);
      res.send(rows);
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  });
  router.post("/", async (req, res, next) => {
    try {
        const {headline,subhead,content,category,author,cover,id} = req.body
      const result = await
       db.query(`INSERT INTO articles (headline,subhead,content,category,author,cover,id) VALUES ('${headline}','${subhead}','${content}','${category}','${author}','${cover}','${id}');`);
      res.send("Added");
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  });
  router.put("/:id", async (req, res, next) => {
    try {
        const {headline,subhead,content,category,author,cover,id} = req.body
        const query = `UPDATE articles SET headline='${headline}',subhead='${subhead}', content='${content}', category='${category}', author='${author}', cover='${cover}', id='${id}' WHERE id=${req.params.id}`
      const result = await db.query(query);
      res.send(result);
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  });
  router.delete("/:id", async (req, res, next) => {
    try {
        const query = `DELETE FROM articles WHERE id = ${req.params.id}`
      const result = await db.query(query);
      res.send("Deleted");
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  });
module.exports = router;
