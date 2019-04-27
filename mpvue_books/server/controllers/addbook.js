// 新增图书
// 1.获取豆瓣信息
// 2.写入数据库
const {mysql} = require('../qcloud')
const https = require('https')
module.exports = async (ctx) => {
    const data = ctx.request.body
    // console.log('添加图书', data.isbn, data.open_id)
    if (data.isbn && data.open_id) {
        // 数据查找以后返回一个数组
        const findRes = await mysql('books').select().where('isbn', data.isbn)
        if (findRes.length) {
            ctx.state = {
                code: -1,
                data: {
                    msg: '图书已经存在'
                }
            }
            return
        }
        let url = 'https://api.douban.com/v2/book/isbn/' + data.isbn + '?apikey=0df993c66c0c636e29ecbb5344252a4a'
        const bookinfo = await getJSON(url)
        // 豆瓣评分
        const rate = bookinfo.rating.average
        const {title, image, alt, publisher, summary, price} = bookinfo
        const tags = bookinfo.tags.map(v => {
            return `${v.title} ${v.count}`
        }).join(',')
        // 作者
        const author = bookinfo.author.join(',')
        // console.log({
        //     isbn: data.isbn, open_id: data.open_id, rate, title, image, alt, publisher, summary, price, tags, author
        // })
        try {
            // 添加到数据库
            await mysql('books').insert({
                isbn: data.isbn, open_id: data.open_id, rate, title, image, alt, publisher, summary, price, tags, author
            })
            ctx.state.data = {
                title,
                msg: 'success'
            }
        } catch (e) {
            ctx.state = {
                code: -1,
                data: {
                    mas: '新增失败' + e.sqlMessage
                }
            }
        }
    }
}
// node 自带的https
function getJSON (url) {
    return new Promise((resolve, reject) => {
        https.get(url, res => {
            let urlData = ''
            // 每次获取新data数据时候 urlData 累加
            res.on('data', data => {
                urlData += data
            })
            res.on('end', data => {
                const bookinfo = JSON.parse(urlData)
                if (bookinfo.title) {
                    resolve(bookinfo)
                }
                reject(bookinfo)
            })
        })
    })
}
