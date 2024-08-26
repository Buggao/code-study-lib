import "./App.css"
import MyForm from "./components/InfoComponent"
import HelloReact  from "./components/HelloReact"

export default function App() {
  const headerContent = "header"
  const footerArray = [
    <span key="1234">1</span>,
    <span key="23">2</span>,
    <span key="34">3</span>,
    <span key="45">4</span>
  ]
  const isDay = new Date().getHours() > 18
  return (
    <div className="App">
      {/* itemID会转化为item-id */}
      <header itemID="header" style={{fontSize: "80px", fontWeight: "800", color: "skyblue"}}>{ headerContent }</header>
      {/* className最终生成为class */}
      <main className="main-container">
        <span>现在是</span>
        <span>{ isDay ? "晚上" : "白天" }</span>
      </main> 
      {/* data-name 无需处理（其他以横线分割的属性同理） */}
      <footer data-name="footer">{ footerArray }</footer>
      <HelloReact/>
      <MyForm />
    </div>
  )
}
