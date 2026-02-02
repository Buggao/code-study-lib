<template>
  <view class="index">
    <Counter />
    <button @tap="toMain">toMain</button>
  </view>
</template>

<script setup>
import './index.less'
import Counter from '../../components/Counter.vue'
import Taro from '@tarojs/taro'
const name = 'Index'
const toMain = () => {
  Taro.navigateTo({
    url: '/pages/main/index'
  })
}
</script>
