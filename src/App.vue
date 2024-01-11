<script setup>
import NavigationBar from "./components/NavigationBar.vue"
import DisplayImage from "./components/DisplayImage.vue"
</script>

<template>
  <div class="app">
    <NavigationBar/>
    <b-container>
      <b-row class="text-center">
        <b-col>
          <b-button class="btn-lg">Test1</b-button>
          <b-button class="btn-lg">Test2</b-button>
          <b-button class="btn-lg">Test3</b-button>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="bv-example-row">
      <b-row class="text-center">
        <b-col>
          <b-button class="btn-lg">Test1</b-button>
          <b-button class="btn-lg">Test2</b-button>
        </b-col>
      </b-row>
    </b-container>
    <div class="d-flex justify-content-center vh-100">
      <div class="text-center">
        <div class="app-container">
          <DisplayImage size="200px" path="src/assets/metis-logo.png"/>
          <h1>apple</h1>
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
