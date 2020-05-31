let axios=require("axios")
let url="https://api.apiopen.top/getJoke"
// 云函数入口函数
exports.main = async (data) => {
  let result=await axios.get(url,{params:data})
  return result.data
}