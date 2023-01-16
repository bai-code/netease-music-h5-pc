<template>
  <dl class="spread-select" ref="containerRef" v-if="spreadList.length > 0">
    <dt class="select pointer" @click.stop="spreadSelect">
      <slot name="selectItem">
        {{ spreadList[selectIndex][name] }}
      </slot>
    </dt>
    <dd class="content" v-if="isSpread">
      <ul class="container">
        <li v-for="(item, index) in spreadList" :key="item.id" class="pointer" @click="selectItem(index)">
          <slot :slot-scope="item">
            {{ item[name] }}
          </slot>
        </li>
      </ul>
    </dd>
  </dl>
</template>

<script setup lang="ts">
import { ref, defineEmits, nextTick, onMounted } from 'vue'

const props = defineProps({
  spreadList: {
    type: Array,
    requried: true
  },
  name: String,
})

const emits = defineEmits(['changeSelect'])  

const selectIndex = ref(0) // 选中项

const isSpread = ref(false) // 是否展开

// 注册的事件，方便移除
const event = () => {
  if (isSpread.value) {
    isSpread.value = false
    document.removeEventListener('click', event)

  }

}

// 是否展开
const spreadSelect = () => {
  isSpread.value = !isSpread.value
  document.addEventListener('click', event)

}

// 选中某个选项
const selectItem = (index) => {
if(index===selectIndex.value)return
  emits('changeSelect', index)
  selectIndex.value = index
}


</script>


<style lang="less" scoped>
dl.spread-select {
  position: absolute;
  display: inline-block;
  height: 100%;
  z-index: 999;
  margin: 0;
  dt.select {
    line-height: 50px;
  }

  dd.content {
    position: relative;
    margin-left: 0;
    margin-top: 14px;
    min-width: 100px;
    left: -10px;

    &>ul.container {
      padding-left: 0;
      list-style: none;
      background: #fff;
      position: relative;
      padding: 5px 10px;
      box-shadow: 0 0 5px rgba(100, 100, 100, 0.8);
      margin: 0;
      border-radius: 2px;

      &::after,
      &::before {
        content: '';
        position: absolute;
        border: 10px solid;

      }

      &::before {
        top: -23px;
        border: 12px solid;
        left: 10px;
        border-color: transparent transparent #ccc transparent;

      }

      &::after {
        top: -19px;
        left: 12px;
        border: 10px solid;

        border-color: transparent transparent #fff transparent;

      }

      li {
        margin: 2px 0;
        overflow: hidden;
        padding: 2px 4px;
        &.active{
          color: @bgColor;
        }
        &:hover {
          background-color: rgba(200, 200, 200, 0.3);
        }
      }
    }
  }
}
</style>