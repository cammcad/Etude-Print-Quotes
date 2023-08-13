import { prompt } from "./util.mjs"
import { compose, identity, trim } from "ramda"


const p = prompt("What is the quote?")

p.run()
  .then((quote) => {
  return prompt("Who said it?").run()
    .then((who) => `${trim(who)} says, "${trim(quote)}"`)
    .catch(identity)
})
.then(console.log)
.catch(console.error)
