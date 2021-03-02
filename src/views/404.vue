<template>
  <div class="not-found">
    <img src="../assets/logo.png" alt="" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "404"
});
</script>

<style lang="scss" scoped>
.not-found {
  width: 100%;
  height: 100%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
