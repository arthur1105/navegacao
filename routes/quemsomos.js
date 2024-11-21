const express = require('express');
const router = express.Router();

// List alunos - Show.ejs
router.get("/", async (req, res) => {
    res.render(
        "base",
        {
            title: "Quem somos nós ",
            view: "quemsomos"
        }
    );
})
 
module.exports = router;