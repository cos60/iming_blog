const Controller = require('egg').Controller;

class TypeController extends Controller {

    async getArticleType() {

        const sql = 'SELECT * FROM type';

        const result = await this.app.mysql.query(sql);
        
        this.ctx.body = {
            errCode: 0,
            list: result,
            msg: ''
        }
    }

    async addType() {
        let reqParams = this.ctx.request.body;
        console.log('reqParams', reqParams)
        const result = await this.app.mysql.insert('type',reqParams)
        const insertSuccess = result.affectedRows === 1
        const insertId = result.insertId
    
        this.ctx.body={
            errCode: insertSuccess ? 0 : 1,
            insertId:insertId
        }
    }
}

module.exports = TypeController;