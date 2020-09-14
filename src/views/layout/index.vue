<template>
    <div class="app-wrapper" :class="classObj">
        <div class="siderbar-container">

        </div>
        <div class="main-container">

        </div>
    </div>
</template>
<script>
export default {
    name: 'layout'
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/mixin.scss";
  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
  }
</style>