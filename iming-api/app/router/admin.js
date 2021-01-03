module.exports = app => {
    const { router, controller } = app;
    router.get('/admin/index', controller.admin.article.index);
    router.get('/admin/article/getArticleList', controller.admin.article.getArticleList);
    router.post('/admin/article/add', controller.admin.article.add);

    router.get('/admin/type/getArticleType', controller.admin.type.getArticleType);
    router.post('/admin/type/addType', controller.admin.type.addType);

}
