const express = require('express');
const router = express.Router();

// List alunos - Show.ejs
router.get("/", async (req, res) => {
    res.render(
        "base",
        {
            title: "alunos",
            view: "alunos/show"
        }
    );
})

// Add alunos - Add.ejs
router.get("/add", async (req, res) => {
    res.render(
        "base",
        {
            title: "Add alunos",
            view: "alunos/add"
        }
    );
})

// Edit alunos - Edit.ejs
router.get("/edit", async (req, res) => {
    res.render(
        "base",
        {
            title: "Edit alunos",
            view: "alunos/edit"
        }
    );
})

router.get("../views/quemsomos", async (req, res) => {
    res.render(
        "base",
        {
            title: "Quem somos",
            view: "quemsomos"
        }
    );
})

module.exports = router;