import Cycle from '@cycle/core'
import {makeDOMDriver, hJSX} from '@cycle/dom'
import HeaderPage from 'app/pages/header'
import Nav from 'app/components/nav'

function main({DOM}) {
  const nav = Nav({DOM})
  const headerPage = HeaderPage({DOM})
  const view = nav.DOM
    .withLatestFrom(headerPage.DOM, (navVTree, headerVTree) => {
      return (
        <div>
          {navVTree}
          {headerVTree}
        </div>
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
