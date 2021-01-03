const Controller = require('egg').Controller;

class BaseController extends Controller {

    async getWebBase() {
        const result = await this.app.mysql.get('webBase');
        this.ctx.body = {
            errCode: 0,
            msg: '',
            data: result
        }
    }
    
}

module.exports = BaseController;
