import { PureComponent } from 'react'

export default class InfoComponent extends PureComponent {
  render(){
    return (
      <div style={{display: "flex", flexFlow: "nowrap row"}}>
        <div style={{marginRight: "15px"}}><span>姓名</span> <span>{this.props.info.name}</span></div>
        <div><span>年龄</span> <span>{this.props.info.age}</span></div>
      </div>
    )
  }

}