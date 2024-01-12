<script setup>
import DisplayImage from "./DisplayImage.vue"
const emit = defineEmits(['walletConnected']);

const emitWalletStatus = (bool) => {
    emit('walletConnected', bool);
    console.log("I just emitted true to parent")
};

</script>

<template>
<div>
    <DisplayImage size="200px" path="../src/assets/metis-logo.png"/>
    <b-button
      class="btn-lg"
      style="backgroundColor: #0ab9a7; color: black;"
      @click="emitWalletStatus(true)">
        Connect wallet
    </b-button>
    <h1>Welcome.</h1>
    <h1> Please connect your wallet.</h1>
</div>
</template>

<style scoped>
h1 {
    color: white;
}
.btn-lg {
    margin-top: 10px;
    margin-bottom: 10px;
}
</style>
