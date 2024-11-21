const express = require('express');
const router = express.Router();

// Main Page (index.ejs)
router.get("/", async (req, res) => {
    res.render(
        "base",
        {
            title: "Main Page",
            view: "index"
        }
    );
})

module.exports = router;