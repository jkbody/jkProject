const {mysql} = require('../qcloud')

module.exports = async (ctx) => {
    const books = await mysql('books').select('*')
    ctx.state.data = {
        msg: '获取成功',
        books
    }
}
