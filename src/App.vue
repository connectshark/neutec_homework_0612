<template>
<main>
  <div class="container">
    <BoxComponent v-for="(item, index) in allSquares" :key="index + '-' + allSquares"/>
  </div>
  <div class="btn-group">
    <label class="btn" v-for="size in allSizes" :class="{ active: selectSize === size }" :key="size">
      <input class="sr-only" type="radio" :value="size" name="size" v-model.number="selectSize">
      <span>{{ size }}x{{ size }}</span>
    </label>
  </div>
  <div class="btn-group">
    <label class="btn" v-for="type in types" :key="type" :class="{ active: selectType === type }" >
      <input class="sr-only" type="radio" :value="type" name="type" v-model="selectType">
      <span>{{ type }}</span>
    </label>
  </div>
</main>
</template>


<script setup>
import { computed, ref } from 'vue'
import BoxComponent from './components/BoxComponent.vue'
const selectSize = ref(1)
const allSizes = [1, 3, 5, 10]

const allSquares = computed(() => selectSize.value * selectSize.value)

const types = ['All', 'Random']
const selectType = ref('All')
</script>

<style scoped>
.container {
  padding: 20px 0 0;
  width: 90%;
  margin: 0 auto 20px;
  aspect-ratio: 1 / 1;
  display: grid;
  grid-template-columns: repeat(v-bind(selectSize), 1fr);
  grid-template-rows: repeat(v-bind(selectSize), 1fr);
  gap: 4px;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.btn-group {
  width: 90%;
  margin: auto;
  margin-bottom: 20px;
}
.btn {
  display: inline-block;
  background-color: var(--text-color);
  color: var(--background-color);
  cursor: pointer;
  font-size: 16px;
  line-height: 2;
  padding: 0 16px;
  border-radius: 6px;
  transition: opacity .3s ease, background .3s ease;
  &:hover {
    opacity: .9;
  }
  &:active {
    opacity: .8;
  }
  &:not(:last-child) {
    margin-right: 10px;
  }
}
.btn.active {
  background-color: #b39cd0;
}
</style>
