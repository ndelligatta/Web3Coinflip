<script setup>
// Rows for amount of rows you want to have the buttons in
// Amount for how many buttons you want to add total (Must be divisible by 2)
// Must contain an object with an index and a label for each button.
// Emit contains value that parent will listen to with ref() for your response
//const props = defineProps(["rows", "amount", "ref", "emit"]);
//const emit = defineEmits([prop.emit.toString()]);
import DisplayImage from "./DisplayImage.vue"
import { ref, computed, watch, reactive  } from 'vue';
import { store } from '../util/store.js'

const selectedOption = ref(null);
const selectedPrice = ref(null);
const selectedChoices = reactive({
  price: null,
  option: null
})

const flipResult = ref(null);
const flipNumber = ref(0);

const HEADS = false;
const TAILS = true;

const options = [
  { id: 1, label: "Heads"},
  { id: 2, label: "Tails"}
];

const prices1 = [
  { id: 1, label: ".05" },
  { id: 2, label: ".1" },
  { id: 3, label: ".25" }
];
const prices2 = [
  { id: 4, label: ".5"},
  { id: 5, label: "1"},
  { id: 6, label: "2" }
];


// TODO: Do not let option be changed if coin flip animation is currently happening.
// use some loading value shit 
const selectOption = (option) => {
  selectedOption.value = (option == selectedOption.value ? null : option)
};

const selectPrice = (price) => {
  selectedPrice.value = selectedPrice.value === price ? null : price;
};

// Heads - False, Tails - True
// Only cause Tails starts with T
// Subject to change

const readFlip = () => {
    return flipResult.value ? "Tails" : "Heads"
};
const getFlip = () => {
    // TODO: Add logic for ensuring user selected options first before flipping, otherwise alert users 
    flipResult.value = (Math.floor(Math.random() * (100 - 1 + 1)) + 1) % 2 == 0;
    flipNumber.value += 1
    store.appendFlip(readFlip().slice(0, 1))
    console.log(readFlip().slice(0, 1))
    console.log("Button pressed");
};



const flipResultMessage = computed(() => {
    if (flipResult.value == null) {
        return "does not exist"
    } else {
        return `${flipNumber.value} ${readFlip()} => ${selectedChoices.price} ${selectedChoices.option}`
    }
});


// Necessary?
const userChoicesStr = computed(() => {
    if (selectedOption.value == null || selectedPrice.value == null) {
      return "must have both choices selected"
    } else {
      return `User is betting ${selectedOption.value} ${selectedPrice.value}`
    }
});


watch([selectedOption, selectedPrice], ([option, price]) => {
  selectedChoices.option = option;
  selectedChoices.price = price;
});

</script>

<template>
<div>
    <DisplayImage size="200px" path="../src/assets/angled_coin.png"/> 
    <h1>Heads or Tails🤔</h1>
    <b-button-group>
        <b-button 
          class="btn-lg"
          id="options"
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
      
    <hr style="border: 0; height: 1px; background-color: #ccc; margin: 20px 0;">
      
    <h1 style="margin-top: 10px;">How much do you want to win?😉💰</h1>
    
    <b-container>
    <div class="prices">
    <!-- <b-button-group> -->
        <b-row>
            <b-col>
                <b-button 
                  class="btn-lg"
                  v-for="price in prices1"
                  :key="price.id"
                  :style="{
                    backgroundColor: selectedPrice === price.id ? '#56eae3' : '#0ab9a7',
                    color: selectedPrice === price.id ? 'white' : 'black'
                  }"
                  @click="selectPrice(price.id)"> 
                    {{ price.label }} Metis
                </b-button>
            </b-col>
        </b-row>
        <!-- </b-button-group> -->
    </div>
    </b-container>
    <b-container>
    <div class="prices">
        <b-row>
        <!-- <b-button-group> -->
            <b-col>
                <b-button 
                  class="btn-lg"
                  v-for="price in prices2"
                  :key="price.id"
                  :style="{
                    backgroundColor: selectedPrice === price.id ? '#56eae3' : '#0ab9a7',
                    color: selectedPrice === price.id ? 'white' : 'black'
                  }"
                  @click="selectPrice(price.id)"> 
                    {{ price.label }} Metis
                </b-button>
            </b-col>
        </b-row>
        <!-- </b-button-group> -->
    </div>
    </b-container>

    <hr style="border: 0; height: 1px; background-color: #ccc; margin: 20px 0;">
    
    <h1>Take the leap of faith⬇️</h1>
    <div>
        <b-button 
          class="btn-lg" 
          id="d-o-n"
          style="backgroundColor: #0ab9a7; color: black;"
          @click="getFlip()"
          > <!--@click="changeImage()"  -->
            Double or Nothing 🔥
        </b-button>
    </div>
    <h1> The coin result is 
        {{ flipResultMessage }} 
    </h1>
</div> 
</template>

<style scoped>
h1 {
    color: white;
}
.prices {
  margin-bottom: 10px;
}
.btn-lg {
  padding: 15px 20px; /* Example padding values for larger size */
  font-size: 20px; /* Example font size for larger size */ 
  flex: 1;
  min-width: 30%; /* Set a fixed width for the buttons */
  margin: 5px; /* Add margin between buttons */
}
#options {
    min-width: 150px;
}
@media screen and (max-width: 600px) {
  /* Adjustments for smaller screens */
  .btn-lg {
      min-width: none;
      font-size: 15px;
      padding: 15px 20px
  }
}
</style>