import IO from "crocks/IO/index.js"
import * as readline from "node:readline/promises"
import { stdin as input, stdout as output } from "node:process"
import { identity } from 'ramda'

const prompt = (question) =>
  IO(() => {
    const rl = readline.createInterface({ input, output })
    return rl
      .question(question)
      .then((v) => {
        rl.close()
        return v
      })
      .catch(identity)
  })

export { prompt }
