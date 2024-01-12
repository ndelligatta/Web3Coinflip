<script setup>
import NavigationBar from "./components/NavigationBar.vue"
import DisplayImage from "./components/DisplayImage.vue"
import OptionGroup from './components/OptionGroup.vue'
import TestStart from './components/TestStart.vue'
import { ref } from 'vue';
const walletConnected = ref(false);
const handleWalletConnection = (data) => {
  console.log("I recieved the value", data)
  if (data) {
    walletConnected.value = true
  }
}
</script>

<template>
  <div class="app">
    <NavigationBar/>
    <div class="d-flex justify-content-center vh-100">
      <div class="text-center">
        <div class="app-container">
          <div v-if="!walletConnected">
            <TestStart @walletConnected="handleWalletConnection"/>
          </div>
          <div v-else>
            <DisplayImage size="200px" path="src/assets/angled_coin.png"/>
            <OptionGroup/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  color: white;
}
</style>
