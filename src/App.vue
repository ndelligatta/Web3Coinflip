<script setup>
import NavigationBar from "./components/NavigationBar.vue"
import DisplayImage from "./components/DisplayImage.vue"
import OptionGroup from './components/OptionGroup.vue'
</script>

<template>
  <div class="app">
    <NavigationBar/>
    <div class="d-flex justify-content-center vh-100">
      <div class="text-center">
        <div class="app-container">
          <DisplayImage size="200px" path="src/assets/angled_coin.png"/>
          <OptionGroup/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  color: white;
}
.btn-lg {
  font-size: 30px;
}
</style>
