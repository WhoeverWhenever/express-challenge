function getAllArticles(articlesData) {
    return (req, res) => {
        res.json(articlesData);
    }
}

function postArticle(articlesData) {
    return (req, res) => {
        articlesData.push(req.body);
        res.json(articlesData);
    }
}

function changeTagsByArticleName(articlesData) {
    return (req, res) => {
        const { articleName } = req.params;
        const articleUpdate = req.body;
        const articleDoc = articlesData.find((article) => {
            return article.name === articleName;
        });
        articleDoc.tags = articleUpdate.patch;
        res.json(articleDoc);
    }
}

module.exports = {
    getAllArticles,
    postArticle,
    changeTagsByArticleName
}