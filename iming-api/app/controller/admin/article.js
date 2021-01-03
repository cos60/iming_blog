const Controller = require('egg').Controller;

class ArticleController extends Controller {
    async index() {
        this.ctx.body = 'artcleapi'
    }

    async getArticleList() {
        const mysql =  `
            SELECT article.id as id,
            article.title as title,
            article.content as content,
            article.keyword as keyword,
            article.intro as intro,
            article.viewCount as viewCount,
            article.addTime as addTime,
            article.typeId as typeId,
            article.status as status,
            type.typeName as typeName
            FROM article LEFT JOIN type ON article.typeId = type.id
        `
        const result = await this.app.mysql.query(mysql);
        
        this.ctx.body = {
            errCode: 0,
            list: result,
            msg: ''
        }
    }

    async add() {
        let reqParams = this.ctx.request.body;
        const result = await this.app.mysql.insert('article',reqParams)
        const insertSuccess = result.affectedRows === 1
        const insertId = result.insertId
    
        this.ctx.body={
            errCode: insertSuccess ? 0 : 1,
            insertId:insertId
        }
    }
}

module.exports = ArticleController;
