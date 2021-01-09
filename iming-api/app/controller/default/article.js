const Controller = require('egg').Controller;

class ArticleController extends Controller {

    async getArticleList() {
        const { page, pageSize, title = '', typeId = '' } = this.ctx.query;
        let mysql = '', mysql2 = ''
        if (page == -1) {
            mysql =  `
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
                FROM article LEFT JOIN type ON article.typeId = type.id;
            `
        } else {
            mysql =  `
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
                WHERE title LIKE '%${title}%'
                ${typeId ? `AND typeId = ${typeId}` : ''}
                limit ${page * pageSize},${page * pageSize + pageSize};
            `
        }

        mysql2 =  `
            SELECT COUNT(*) AS total
            FROM article LEFT JOIN type ON article.typeId = type.id
        `;

        const result = await this.app.mysql.query(mysql);
        const result2 = await this.app.mysql.query(mysql2);
        
        this.ctx.body = {
            errCode: 0,
            data: {
                list: result,
                total: result2[0].total,
            },
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

        if (result.length > 0) {
            const row = {
                id: id,
                viewCount: result[0].viewCount + 1
            }
            const updateRes = await this.app.mysql.update('article', row);
        } 
    }

    async getTypeList() {
        const mysql = `
        SELECT a.typeId as typeId,
        b.typeName as typeName,
        COUNT(*) as count
        FROM article a LEFT JOIN type b ON a.typeId = b.id group by typeId;
        `;
        const result = await this.app.mysql.query(mysql);
        this.ctx.body = {
            errCode: 0,
            data: result,
            msg: ''
        }
    }
}

module.exports = ArticleController;
