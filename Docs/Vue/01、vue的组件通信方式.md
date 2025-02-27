在vue3中：
# 总览
父子之间：
  emit 和 props

跨级别组件使用 
  inject 和 provide

可以使用pinia 传递数据（vue3可以用vuex吗）

# 父子组件通信
## props
props在子组件需要使用defineProps进行接收，如果需要defineProps校验，则传入一个对象，键为props属性名，值为对应的构造函数。
如果仅需要声明则只需要传入数组即可
### props的使用
传递一个为true的props可以省去具体的值，传递对象类型的props时可以省略写变量，
<BlogPost v-bind="post" />
等价于
<BlogPost :id="post.id" :title="post.title" />
在子组件中 template可以省略props.***，直接使用***即可。


响应式props


### props的校验

  props的校验分为两种：直接给props传递构造函数，或使用校验对象。
  构造函数可以使用数组的方式传递多个可能的类型值[Number, Boolean, String, Array, Object, Date, Function, Symbol, Error]， 共支持九种类型。
  校验对象的类型如下： 
    propsCheckTypes ={
      type: [Number, Boolean, String, Array, Object, Date, Function, Symbol, Error, 自定义Type],
      required：Boolean,
      default: any | Function: (props) => any ,
      validator: Function: (value, props) => any
    }

    当default为函数时，参数为所有props的值，但是只有没有该props时才会调用，并且每次更新props的值都会调用。
    
    validator为**v3.4**的新特性，函数接收两个参数，当前props的值value和所有props，如果没有返回值或返回值为false、null、undefined会在控制台出现warning，但不会影响取值。
    返回其它值将不会warning。

  > 布尔类型的边界条件：
    前面说过当传递一个true时可以不写具体的值，只写props的键，但当该Props为[String, Boolean]的组合值时，会被解析为空字符串 ""

```javascript
  const props = defineProps({
    msg: {
      default: function(rawProps) {
        console.log("in defineProps default", rawProps);
        return "default msg"
      }
    },
    reactiveData:String,
    isBoolean: Boolean,
    customClassOne: CustomClass,
    stateInfo: {
      validator(value, props) {
        console.log("validator", value, props)
        return true
      }
    }
  })
```

## Emit

emit是子组件给父组件传值的方法。子组件是没办法修改props，如果想要修改就需要给父组件传递新值，让父组件修改。
需要注意的是，只有父组件的值为响应式的，子组件才会同步更新显示。

使用事件有两种方式：在template中使用$emit和scritpt中emit。

```js
...

const emit = defineEmits(["changeRefData", "changeFixedData"])
function handleRefClick(event) {
  consle.log("button event is", event)
  emit("changeRefData", "子组件改变了refData的值")
}

...

    <button @click="handleRefClick">改变ref值</button>
    <button @click="$emit('changeFixedData', '123')">改变fixed值</button>
...

```


需要注意的是，script中使用的emit是defineEmits的返回值，也就是可以是其他变量名在script中触发事件。

```js
const otherValiable = defineEmits(["changeRefData", "changeFixedData"])
function handleRefClick(event) {
  console.log("event e is", event,)
  otherValiable("changeRefData", "子组件改变了refData的值")
}
```

defineEmits 只能在setup中使用，但在script中可以使用setup函数通过传递上下文的方式解决：
```
export default {
  emits: ['inFocus', 'submit'],
  setup(props, ctx) {
    ctx.emit('submit')
  }
}
<!-- 解构 -->
export default {
  emits: ['inFocus', 'submit'],
  setup(props, { emit }) {
    emit('submit')
  }
}
```

在子组件中script的事件的第一个参数为原生事件参数。在$emit和emit中后面的参数都是向父组件传递的参数。

emit同样可以被校验，当需要校验emits时会将defineEmits改为对象，无需校验则需将事件名对应的值改为null，
同props的校验一致如果没有返回值或返回为false则会在控制台发送消息，返回true则通过校验。

## 组件的v-model语法糖
直接在属性上使用v-model与在template中使用v-model行为上一致。相当于给子组件传了modelValue的props和update:modelValue的事件。
事件的第二个参数为更改父组件中v-model绑定的值。

```js
  ...
  defineProps({modelValue: String})

  defineEmits(['update:modelValue'])
  ...
  <div>父组件传来的值为： {{ modelValue }}</div>
  <button @click="$emit('update:modelValue', parseInt(modelValue) + 1)">modelValue+1</button>
  ...
```

父组件中v-model后可以添加参数作为变量名使用。

```js 
<Child v-model:msg="msg" />

// Chile.vue
  ...
  const props = defineProps({
    modelValue: String,
    msg: String 
  })
  const emit = defineEmits(['update:modelValue', 'update:msg'])
  ...
  <p>父组件的msg值为 {{ msg }}</p>
  <button @click="$emit('update:msg', new Date())">更改msg的值</button>
  ...
```

### v-model添加修饰符
v-model也可以添加类似于 trim之类的修饰符，也可以自定义修饰符。
如果使用自带的修饰符，则使用modelModifiers的方式接收，自定义修饰符通过"变量名+Modifiers"接收

```js
<VModel 
  v-model.number="childNumber"
  v-model:date-msg.formateDate="reactiveData"
/>

const props = defineProps({
  modelValue: Number,
  dateMsg: String | Date,
  modelModifiers: {default: () => ({})},
  dateMsgModifiers: {default: () => ({})}
})
```

这里需要指定默认值为{}，避免在判断时无法找到。而触发方式只能在script中使用
```js
function handleClick() { 
  let _sendDate = new Date()
  // 如果这个自定义修饰符存在 则为true
  if(props.dateMsgModifiers.formateDate) {
    let _Date = _sendDate.toLocaleDateString("zh-CN", {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    })
    let _second = _sendDate.toLocaleTimeString("zh-CN", {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })
    _sendDate = _Date + " " + _second
  }
  emit("update:dateMsg", _sendDate)
}
```

### vue3.4 defineModel 用法

3.4后组件的v-modal更加简单了，可以直接使用defineModel的方式定义。defineModel的使用方式和ref的用法类似。

父组件的写法不用变化，子组件中区别就是少写了props和emits属性。



## 属性穿透

在子组件上除了可以写props和emits外还可以加attr属性，例如class，style，data等。

可以将类型分为两类：style，class，事件 和子组件用的数据。

当子组件有根组件时（template有一个主标签），style和class会继承父组件中传递的数据，但当没有根标签时控制台会弹出警告，并不会继承。

同时 也可以给多个标签继承。在template中通过$attrs 可以获取到父组件传递过来的所有数据。

而在script中的setup可以通过 useAttrs 获取到所有属性。


# 插槽

插槽就是给子组件传递模板的内容。

父组件只需在子组件标签中添加需要传递的模板内容即可，而子组件中需要添加slot标签作为出口。

传递的模板可以访问父组件的内容，但是无法访问子组件中的内容。

```js
  ...
    const slotFatherString = ref("我是父组件传递给插槽的内容")
    const handleSlotClick = () => {
      slotFatherString.value = "我是父组件传递给插槽的内容, 父组件的函数改变了我"
      console.log("父组件调用子组件的方法")
    }
  ...
        <Slot>
          <div>{{ slotFatherString }}</div>
          <button @click="handleSlotClick">调用父组件的方法</button>
        </Slot>
  ...

// 子组件的内容
  ...
    const handleSlotClick = () => {
      slotFatherString.value = "我是父组件传递给插槽的内容, 子组件的函数改变了我"
    }
  ... 
    <div class="m-2 p-8 border-dotted border-2 border-sky-500" v-bind="$attrs">
      <slot></slot>
    </div>
  ...
```

vue的slot借鉴于原生的slot元素，但进行了扩展，下面是五种用法：

### 默认插槽内容

子组件中slot添加默认内容，当父组件不传递时，会显示默认内容

### 带名字插槽

父组件可以给子组件传递多个插槽，不同插槽用名字来区分，父组件传递时使用

  <template v-slot:slotName></template> 
  或：
  <template #slotName></template>

这里的名字时可以使用动态的字符（变量）： <template #[variableslotName]></template>

子组件中则需要给slot加上name属性

<slot name="slotName"></slot>

当子组件的slot添加name则该slot仅会接收带对应名字插槽的内容。

而子组件存在不带name的slot，则会接收父组件中不带template**或**<tamplate #defalut></tamplate> 中的内容（两者互斥）

当父组件中传递模板时，在子组件中可以在template中访问$slots属性，并且可以通过$slots.slotName 判断是否传递了某个具名插槽。

并且当想要在父组件中读取子组件的部分状态时，可以在子组件的slot上添加上子组件的变量名。



# 组件的ref





# 依赖注入
