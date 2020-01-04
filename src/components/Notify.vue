<template>
  <div>
    <div class="notify">Copied to clipboard!</div>
  </div>
</template>




<style lang="scss">
.notify {
  background: #f5af195d;
  border-radius: 4px;
  padding: 8px 20px;
  color: #ffffff;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 14px;
  display: none;

  &.show {
    display: block;
  }
}
</style>