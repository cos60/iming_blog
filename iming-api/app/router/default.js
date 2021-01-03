module.exports = app => {
    const { router, controller } = app;
    router.get('/default/getArticleList', controller.default.article.getArticleList);
    router.get('/default/getArticleDetail', controller.default.article.getArticleDetail);
    router.get('/default/getTypeList', controller.default.article.getTypeList);
    router.get('/default/getWebBase', controller.default.base.getWebBase);
    
}
