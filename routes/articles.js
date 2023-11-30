const express = require("express");
const articlesController = require("../controllers/articles.ctrl");
const articleDocs = require("../mocks/article-docs");
const articleMdware = require("../middlewares/articles.mdware");

const router = express.Router();

router.get("/", articlesController.getAllArticles(articleDocs));

router.post("/addArticle", articleMdware.validatePost, articlesController.postArticle(articleDocs));

router.patch("/updateArticle/:articleName", articlesController.changeTagsByArticleName(articleDocs));

module.exports = router;