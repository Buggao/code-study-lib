import request from "./request"

export function getStudentsListApi() {
  return request({
    url: "/students",
    method: "get"
  })
}

export function addStudentApi(data) {
  return request( {
    url: "/students",
    method: "post",
    data
  })
}

export function getStudentByIdApi(id) {
  return request( {
    url: `/students/${id}`,
    method: "GET"
  })
}

export function delStudentByIdApi(id) {
  return request( {
    url: `/students/${id}`,
    method: "DELETE"

  })
}