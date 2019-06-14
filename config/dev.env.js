var merge = require('webpack-merge')
var prodEnv = require('./prod.env')
//将你跑的命令行字符串分割成数组并去掉前两个
let params = process.argv.splice(2)  //[ '--', 'MODE=test', '--', 'wx' ]
let data = {}
params.forEach(item => {
  let p = item.split("=")
  data[p[0]] = p[1]
})
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  MODE: `"${data.MODE || 'test'}"`
})
