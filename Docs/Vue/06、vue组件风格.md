# 组件命名

- 使用文件夹区分组件

#### 1、使用PascalCase或kebab-case命名组件（kebab-case在大小写不区分的系统中更容易区分）

#### 2、组件名使用多个组合单词，避免与原生组件冲突

#### 3、特定组件使用特定的开头

#### 4、组件应该是紧耦合的

#### 5、组件单词的顺序应该以最高级别的组件开头，描述性词语结尾

#### 6、

例如有一个搜索组件，包含搜索输入框，搜索确认按钮，搜索取消按钮

|--components/

|----CustomerSearch/

|------SearchInput.vue

|------SearchConfirtmButton.vue

|------SearchClearButton.vue

组件也更适合使用