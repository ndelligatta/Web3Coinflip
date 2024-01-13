<script setup>
import { store } from '../util/store.js'
let coinFlipHistory = store.coinFlipHistory;
</script>

<template>
<!-- TODO: Add a collapse for social media icons on mobile -->
<!-- TODO: Fix flipHistory so it doesn't overlap -->
<!-- TODO: Make a backend to store flip history on -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">
<div>
  <b-navbar class="custom-navbar" type="dark" variant="dark">
    <!-- Left side with social media icons -->
    <b-navbar-nav>
      <b-nav-item>
        <a href="#" class="nav-link">
          <i class="fab fa-twitter"></i>
        </a>
      </b-nav-item>
      <b-nav-item>
        <a href="#" class="nav-link">
          <i class="fab fa-telegram"></i>
        </a>
      </b-nav-item>
      <b-nav-item>
        <a href="#" class="nav-link">
          <i class="fa-solid fa-book"></i>
        </a>
      </b-nav-item>
      <!-- Add more social media icons as needed -->
    </b-navbar-nav>

    <!-- Right side with coin flip history -->
    <b-navbar-nav class="ml-auto">
      <b-nav-text id="text">Coin Flip History:</b-nav-text>
      <b-nav-item v-for="(result, index) in coinFlipHistory" :key="index">
        {{ result }}
      </b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</div>
</template>



<style scoped>
/* Customize styles as needed */
:deep(.nav-link), :deep(#text) {
  color: white;
  margin-right: 10px;
}
/* .custom-navbar {
    background-color: white !important;
} */
</style>
