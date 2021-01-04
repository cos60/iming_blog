const Controller = require('egg').Controller;

class LoginController extends Controller {

    async login() {

        const { password , userName } = this.ctx.request.body;
        if (password === 'testPassword' && userName === 'iming') {
            const openId = Date.now();
            this.ctx.session.openId = { openId }
            this.ctx.body = {
                errCode: 0,
                data: { openId },
                msg: '登陆成功！'
            }
        } else {
            this.ctx.body = {
                errCode: 1,
                data: '',
                msg: '帐号密码错误'
            }
        }

        
        
    }
}

module.exports = LoginController;