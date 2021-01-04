module.exports = app => {
    const { router, controller } = app;
    var adminauth = app.middleware.adminauth();
    router.post('/admin/login', controller.admin.login.login);
    router.get('/admin/index', adminauth, controller.admin.article.index);
    router.get('/admin/article/getArticleList', adminauth, controller.admin.article.getArticleList);
    router.get('/admin/article/getArticleDetail', adminauth, controller.admin.article.getArticleDetail);
    router.post('/admin/article/add', adminauth, controller.admin.article.add);
    router.post('/admin/article/edit', adminauth, controller.admin.article.edit);

    router.get('/admin/type/getArticleType', adminauth, controller.admin.type.getArticleType);
    router.post('/admin/type/addType', adminauth, controller.admin.type.addType);
}
