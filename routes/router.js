const express = require("express");
const router = express.Router();

const users = [];

router.get("/", (req, res) => {
    if (users.length === 0) {
        res.redirect("/add-user");
    } else {
        res.redirect("/users");
    }
});

router.get("/add-user", (req, res) => {
    res.render("form");
});

router.post("/add-user", (req, res) => {
    console.log(req.body.name);
    users.push({ name: req.body.name });
    res.redirect("/users");
});

router.get("/users", (req, res) => {
    res.render("users", { users });
});

module.exports = router;
