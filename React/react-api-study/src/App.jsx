import { useState } from 'react'
import './App.css'




function App() {


  const [reactStudyPoint, setReactStudyPoint]= useState([
    {
      content: "react项目的构成",
      id: "01"
    },
    {
      content: "JSX语法的学习",
      id: "02"
    },
    {
      content: "React的状态",
      id: "03"
    }
  ])

  const [infoData, setInfoData] = useState({
    title: "学习react",
    content: "react很棒"
  })

  function handleClcik(){
    setInfoData({
      ...infoData,
      content: "react很棒，但是我还是会用vue"
    })
  }

  function handleListClick(){
    setReactStudyPoint([
      ...reactStudyPoint,
      {
        content: "React的组件",
        id: "04"
      }
    ])
  }

  function clickToDelList(){
    setReactStudyPoint(reactStudyPoint.filter(item => item.id !== "01"))
  }

  const viteIconAttr = {
    className: "logo react",
    style: {
      animation: "logo-spin infinite 20s linear"
    }
  }

  return (
    <>
      <img src="/vite.svg" alt="" {...viteIconAttr} />
      <h1>{infoData.title}</h1>
      <p>{infoData.content}</p>
      <button onClick={handleClcik}>change content</button>
      <p>react主要内容：</p>
      <ul>
        {
          reactStudyPoint.map(item => (
            <PointItem key={item.id} id={item.id} content={item.content}/>
          ))
        }
      </ul>
      <button onClick={handleListClick}>再说一条主要内容</button>
      <button onClick={clickToDelList}>删除第一条要点</button>
    </>
  )
}


// eslint-disable-next-line react/prop-types
function PointItem({id, content}) {
  let pointStyle = {
    display: "flex",
    alignItems: "center",
    gap: "20px"
  }
  return (
    <div style={pointStyle}>
      <i>{id}</i>
      <p>{content}</p>
      <span>★★★★☆</span>
    </div>
  )
}

export default App
