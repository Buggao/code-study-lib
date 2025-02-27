### React 简答题试题

#### 1. React 项目构成是什么？
- 描述一个典型的 React 项目的目录结构及其主要文件的作用。

#### 2. JSX 函数主要注意点有哪些？
- 列举并解释 JSX 函数的主要注意点，特别是关于返回值的要求。

#### 3. JSX 语法：
- **元素的书写需要注意哪些点？**
  - 属性的书写
  - 类的书写
  - style 的书写
- **如何写入变量（插值）？**
  - 举例说明如何在 JSX 中插入 JavaScript 表达式。

#### 4. 如何条件渲染？
- 描述并举例说明 React 中的条件渲染方法。

#### 5. 如何列表渲染？
- 描述并举例说明 React 中的列表渲染方法，包括 `key` 的作用。

#### 6. React 中如何给元素绑定事件？
- 举例说明如何在 React 中为元素绑定事件处理器，如 `onClick`。

#### 7. 什么是 React 的状态？
- 解释 React 中的状态（state）的概念，并说明其作用。

#### 8. 如何初始化 React 的状态？
- 举例说明如何使用 `useState` 钩子初始化状态。

#### 9. 如何修改 React 的状态？
- 举例说明如何使用 `setState` 方法修改状态。
- **对象类型的状态修改：**
  - 举例说明如何修改对象类型的状态。
- **数组类型的状态修改：**
  - 举例说明如何修改数组类型的状态。

### 示例答案

#### 1. React 项目构成是什么？
- `src/`: 存放源代码文件。
  - `index.js`: 应用的入口文件。
  - `App.js`: 主组件文件。
  - `components/`: 存放各个功能组件。
  - `styles/`: 存放样式文件。
- `public/`: 存放公共资源文件。
  - `index.html`: HTML 模板文件。
- `package.json`: 项目配置文件，包含依赖和脚本。
- `package-lock.json`: 锁定依赖版本。
- `node_modules/`: 存放项目依赖。

#### 2. JSX 函数主要注意点有哪些？
- JSX 函数必须返回一个单一的根元素，可以使用 `<></>`（Fragment）包裹多个元素。

#### 3. JSX 语法：
- **元素的书写需要注意哪些点？**
  - **属性的书写**：使用驼峰命名法，如 `tabIndex` 而不是 `tab-index`。
  - **类的书写**：使用 `className` 而不是 `class`。
  - **style 的书写**：使用对象形式，如 `style={{ color: 'red' }}`。
- **如何写入变量（插值）？**
  - 使用 `{}` 插入 JavaScript 表达式，如 `<div>{name}</div>`。

#### 4. 如何条件渲染？
- 使用逻辑运算符或三元运算符，如：
  ```jsx
  {isLoggedIn ? <UserGreeting /> : <GuestGreeting />}
  ```

#### 5. 如何列表渲染？
- 使用 `map` 方法遍历数组，为每个元素生成一个 JSX 元素，并为每个元素添加唯一的 `key` 属性，如：
  ```jsx
  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((number) => (
    <li key={number.toString()}>{number}</li>
  ));
  return <ul>{listItems}</ul>;
  ```

#### 6. React 中如何给元素绑定事件？
- 使用 `onClick` 等事件处理器，如：
  ```jsx
  function handleClick() {
    console.log('Button clicked');
  }

  return <button onClick={handleClick}>Click me</button>;
  ```

#### 7. 什么是 React 的状态？
- 状态是 React 组件中用于存储数据的对象，可以用来管理组件的内部状态。

#### 8. 如何初始化 React 的状态？
- 使用 `useState` 钩子，如：
  ```jsx
  const [count, setCount] = useState(0);
  ```

#### 9. 如何修改 React 的状态？
- 使用 `setState` 方法，如：
  ```jsx
  function increment() {
    setCount(count + 1);
  }
  ```
- **对象类型的状态修改：**
  ```jsx
  const [person, setPerson] = useState({ name: 'Alice', age: 25 });

  function updateName(newName) {
    setPerson({ ...person, name: newName });
  }
  ```
- **数组类型的状态修改：**
  ```jsx
  const [items, setItems] = useState([1, 2, 3]);

  function addItem() {
    setItems([...items, items.length + 1]);
  }
  ```

### React的组件

react中如何给组件传参？如何接收参数？如何给孙子组件传参？

contentLevel 钩子

### React的钩子

#### useRef

#### useState

useState的几项特性 ： 
  - 惰性初始化
  - 使用Object.is() 优化性能
Object.is()
      Object.is() 确定两个值是否为相同值。如果以下其中一项成立，则两个值相同：

都是 undefined

都是 null

都是 true 或者都是 false

都是长度相同、字符相同、顺序相同的字符串

都是相同的对象（意味着两个值都引用了内存中的同一对象）

都是 BigInt 且具有相同的数值

都是 symbol 且引用相同的 symbol 值

都是数字且

都是 +0
都是 -0
都是 NaN
都有相同的值，非零且都不是 NaN
 - 减少渲染时创建函数的次数