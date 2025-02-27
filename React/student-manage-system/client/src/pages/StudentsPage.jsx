import React, { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom"
import { getStudentsListApi } from "../api/studentApis"
import MyInfo from '../components/MyInfo'

export default function StudentsPage() {
  
  let [studentsList, setStudentsList] = useState([])
  let [searchValue, setSearchValue] = useState("")
  let [msgInfo, setMsgInfo ] = useState({
    isShow: false,
    message: "",
    type: ""
  })

  let location = useLocation();

  useEffect( () => {
    getStudentsListApi().then( res => { 
      let _studentArray = res.map( item => {
        return (
          <tr key={item.id} className="p-2 m-2 border" style={{margin: "8px", height: "40px", border: "1px solid #ccc"}}>
            <td style={{padding: "0 8px", border: "1px solid #5f7f9f"}}>{item.name}</td>
            <td style={{padding: "0 8px", border: "1px solid #5f7f9f"}}>{item.gender === "male" ? "男" : "女" }</td>
            <td style={{padding: "0 8px", border: "1px solid #5f7f9f"}}>{item.age}</td>
            <td style={{padding: "0 8px", border: "1px solid #5f7f9f"}}>{item.address}</td>
            <td style={{padding: "0 8px", border: "1px solid #5f7f9f"}}>
              <button className="border-solid border-2 bg-sky-700 rounded px-2 py-1 cursor-pointer text-slate-100">详情</button>
            </td>
          </tr> 
        ) 
      })
      setStudentsList(_studentArray)
    })
  }, []) 

  useEffect( () => {
    console.log("location", location)
    if(location && location.state) {
      let infoPrpos = {
        isShow:true,
        message: location.state.message,
        type: location.state.type
      }
      setMsgInfo(infoPrpos)
      console.log("showInfo", infoPrpos)
    }
  }, [location])

  const searchChangeHandler = (e) => {
    setSearchValue(e.target.value)
  }

  return (
    <section>
      <MyInfo {...msgInfo}/>
      <header>
        <h1 className="font-black text-3xl">学生信息表</h1>
        <label className="w-full">搜索：
          <input 
            className="my-4 pl-2 w-1/2 border-solid border-2 rounded"
            type="text" 
            placeholder="请输入学生名字" 
            value={searchValue}
            onChange= {searchChangeHandler} />
        </label>
      </header>
      <main className="w-full h-full" style={{border: "1px solid #ccc"}}>
        <table className="table-fixed border border-collapse w-full ">
          <thead className="w-full">
            <tr className="text-left p-4">
              <th className="border border-slate-600" style={{padding: "3px 8px", border: "2px solid #5f7f9f"}} >姓名</th>
              <th className="border border-slate-600" style={{padding: "3px 8px", border: "2px solid #5f7f9f"}} >性别</th>
              <th className="border border-slate-600" style={{padding: "3px 8px", border: "2px solid #5f7f9f"}} >年龄</th>
              <th className="border border-slate-600" style={{padding: "3px 8px", border: "2px solid #5f7f9f"}} >地址</th>
              <th className="border border-slate-600" style={{padding: "3px 8px", border: "2px solid #5f7f9f"}} >操作</th>
            </tr>
          </thead>
          <tbody>
            { studentsList }
          </tbody>
        </table>
      </main>
    </section>
  )
}
