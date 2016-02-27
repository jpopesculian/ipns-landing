import Cycle from '@cycle/core'
import {makeDOMDriver, hJSX} from '@cycle/dom'

function main({DOM}) {

  const view = sources.DOM
    .map(() => {
      return (
        <h1>
            Hello World
        </h1>
      )
    })

  return {DOM: view}
}

const bootstrap = (selector) => {
  Cycle.run(main, {
    DOM: makeDOMDriver(selector)
  })
}

export default bootstrap
