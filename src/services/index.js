
/** put all routes together here and export out  */

const router = require("express").Router();

const articlesRouter = require("./articles")
const authorsRouter = require("./authors")


router.use("/articles",articlesRouter)
router.use("/authors",authorsRouter)
module.exports = router