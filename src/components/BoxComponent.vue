<template>
  <div class="box" :class="{ active: isActive }">
    <div class="content"></div>
  </div>
</template>


<script setup>
defineProps({
  isActive: {
    type: Boolean,
    default: true
  }
})
</script>

<style scoped>

@property --angle {
  syntax: '<angle>';
  inherits: false;
  initial-value: 0deg;
}
.box {
  width: 100%;
  height: 100%;
  background-color: #aaa;
  box-sizing: border-box;
  padding: 2px;
  border-radius: 10px;
}
@keyframes spin-angle {
  0% {
    --angle: 0deg;
  }
  100% {
    --angle: 180deg;
  }
}
.content {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: var(--background-color);
}
.active {
  background-image: conic-gradient(
    from var(--angle),
    white 0deg,
    white 30deg,
    transparent 30deg,
    transparent 180deg,
    white 180deg,
    white 210deg,
    transparent 210deg,
    transparent 360deg
  );
  animation: spin-angle 1s ease infinite;
}
</style>
