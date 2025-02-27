import React from 'react';

class App extends React.Component {
  
  state = {
    name: 'Hello World'
  }
  constructor() {
    super();
    console.log('如果我猜的没错，constructor构造函数是最先执行的！');
  }
  static getDerivedStateFromProps(state, props) {
    console.log('getDerivedStateFromProps跟 props 数据传递有关，但是会在render前执行',"state is", state,"props is", props);
    return null
  }
  componentDidMount() {
    console.log('最后肯定是componentDidMount函数执行了!');
  }

  onChlick = () => {
    this.setState({
      name: '不再Hello World'
    })
  }
  render() {
    console.log('构造函数执行完就是render函数执行了！');
    const { name } = this.state
    return (
      <div>
        <h1>{name}</h1>
        <button onClick={this.onChlick}>更改状态</button>
      </div>
    );
  }
}

export default App;