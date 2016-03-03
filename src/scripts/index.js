import Cycle from '@cycle/core'
import {makeDOMDriver, hJSX} from '@cycle/dom'
import {Observable} from 'rx'
import HeaderPage from 'app/pages/header'
import Nav from 'app/components/nav'

const intent = (DOM) => {
    const clicks = DOM.events('click').map(ev => ev.target)
    const actionableClicks = clicks.filter((elem) => elem.attributes['data-action'])
    const primaryAction = actionableClicks.filter((elem) => elem.attributes['data-action'].value == "primary")
    const secondaryAction = actionableClicks.filter((elem) => elem.attributes['data-action'].value == "secondary")
    return {primaryAction, secondaryAction}
}

const model = (actions) => {
    return actions.primaryAction.map((s) => console.dir(s))
}

const view = (state$, DOM) => {
  const nav = Nav({DOM})
  const headerPage = HeaderPage({DOM})
  return Observable.just({}).concat(state$)
    .combineLatest(
        nav.DOM,
        headerPage.DOM, 
        (
            state,
            navVTree, 
            headerVTree
        ) => {
        return (
            <div>
                {navVTree}
                {headerVTree}
            </div>
        )
    })
}

const main = ({DOM}) => {
  const actions = intent(DOM)
  const state$ = model(actions)
  return {
    DOM: view(state$, DOM)
  }
}

const bootstrap = (selector) => {
  Cycle.run(main, {
    DOM: makeDOMDriver(selector)
  })
}

export default bootstrap
