import request from "./request"

export function getStudentsListApi() {
  return request({
    url: "/students",
    method: "get"
  })
}
// 添加学生
export function addStudentApi(data) {
  return request( {
    url: "/students",
    method: "post",
    data
  })
}
// 获取学生信息
export function getStudentByIdApi(id) {
  return request( {
    url: `/students/${id}`,
    method: "GET"
  })
}
// 删除学生信息
export function delStudentByIdApi(id) {
  return request( {
    url: `/students/${id}`,
    method: "DELETE"

  })
}