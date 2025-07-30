初次渲染：
[beforeCreate] → [created] → [beforeMount] → [render() 生成 vnode] → [mount DOM] → [mounted]

更新渲染：
数据变化 → [beforeUpdate] → [render() 生成新 vnode] → [diff 比对] → [patch 更新 DOM] → [updated]