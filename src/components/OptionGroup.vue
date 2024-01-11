<script setup>
// Rows for amount of rows you want to have the buttons in
// Amount for how many buttons you want to add total (Must be divisible by 2)
// Must contain an object with an index and a label for each button.
// Emit contains value that parent will listen to with ref() for your response
const props = defineProps(["rows", "amount", "ref", "emit"]);
const emit = defineEmits([prop.emit.toString()]);
const selectedOption = ref(null);
</script>

<template>

<b-button
    class="btn-lg"
    v-for="option in options"
    :key="option.id">

</b-button>

<b-button-group>
    <b-button 
        class="btn-lg"
        v-for="option in options"
        :key="option.id"
        :style="{
            backgroundColor: selectedOption === option.id ? '#56eae3' : '#0ab9a7',
            color: selectedOption === option.id ? 'white' : 'black'
        }"
        @click="selectOption(option.id)"> 
        {{ option.label }} 
    </b-button>
</b-button-group>

    <b-container>
      <b-row class="text-center">
        <b-col>
          <b-button class="btn-lg">Test1</b-button>
          <b-button class="btn-lg">Test2</b-button>
          <b-button class="btn-lg">Test3</b-button>
        </b-col>
      </b-row>
    </b-container>
</template>

<style scoped>

</style>
