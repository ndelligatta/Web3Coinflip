import { reactive } from 'vue'

export const store = reactive({
    // flipResult: -99.99,
    coinFlipHistory: ["H"],
    appendFlip(coin_face) {
      if (coin_face != "H" && coin_face != "T") {
        console.log("Error. appendFlip(coin_face) accepts \"H\" or \"T\" as an input.")
      } else {
        this.coinFlipHistory.push(coin_face)
      }
    }
  })