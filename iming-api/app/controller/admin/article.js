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

    async getArticleDetail() {
        const { id } = this.ctx.query;
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
            WHERE article.id = ${id};`
        const result = await this.app.mysql.query(mysql);

        
        
        this.ctx.body = {
            errCode: 0,
            data: result.length ? result[0] : {},
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

    async edit() {
        let reqParams = this.ctx.request.body;
        const result = await this.app.mysql.update('article',reqParams)
        const insertSuccess = result.affectedRows === 1
    
        this.ctx.body={
            errCode: insertSuccess ? 0 : 1,
            msg: insertSuccess? '修改成功' : '修改失败'
        }
    }
}

module.exports = ArticleController;
