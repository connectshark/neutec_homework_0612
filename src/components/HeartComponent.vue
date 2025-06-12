<template>
  <div class="heart">
    <i class='bx  bx-heart'  ></i> 
  </div>
</template>

<script setup>
</script>

<style scoped>
@property --angle {
  syntax: '<angle>';
  inherits: false;
  initial-value: 0deg;
}
@keyframes spin-angle {
  0% {
    --angle: 0deg;
  }
  100% {
    --angle: 180deg;
  }
}
.heart {
  width: 100px;
  font-size: 70px;
  line-height: 100px;
  background-clip: text;
  color: transparent;
  background-color: #aaa;
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
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