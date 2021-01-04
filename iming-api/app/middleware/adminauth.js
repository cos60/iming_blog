module.exports = options => {
    return async function adminauth(ctx, next) {
        console.log('ctx.session.openId', ctx.session.openId);
        if (ctx.session.openId) {
            await next();
        } else {
            ctx.body={
                errCode: 1,
                data: '',
                msg: '没有登陆'
            }
        }
    }
}
