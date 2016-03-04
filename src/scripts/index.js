import Cycle from '@cycle/core'
import {makeDOMDriver, hJSX} from '@cycle/dom'
import {makeHistoryDriver} from '@cycle/history'
import {Observable} from 'rx'
import HeaderPage from 'app/pages/header'
import Nav from 'app/components/nav'
import DialogController from 'app/dialog/controller'

const intent = (DOM) => {
    return {}
}

const model = (actions) => {
    return Observable.just({})
}

const view = (state$, components, DOM, History) => {
  return Observable.just({}).concat(state$)
    .combineLatest(
        components.nav.DOM,
        components.headerPage.DOM, 
        components.dialog.DOM,
        (
            state,
            navVTree, 
            headerVTree,
            dialogVTree
        ) => {
        return (
            <div>
                {navVTree}
                {headerVTree}
                {dialogVTree}
            </div>
        )
    })
}

const history = (actions, components, History) => {
    return components.nav.History
        .merge(components.headerPage.History)
        .merge(components.dialog.History)
}

const createComponents = (state$, DOM, History) => {
    const navProps$ = Observable.just({})
    const headerPageProps$ = Observable.just({})
    const dialogProps$ = Observable.just({})
    return {
        nav: Nav({DOM, History, props$: navProps$}),
        headerPage: HeaderPage({DOM, History, props$: headerPageProps$}),
        dialog: DialogController({DOM, History, props$: dialogProps$}),
    }
}

const main = ({DOM, History}) => {
  const actions = intent(DOM)
  const state$ = model(actions)
  const components = createComponents(state$, DOM, History)
  return {
    DOM: view(state$, components, DOM, History),
    History: history(actions, components, History)
  }
}

const bootstrap = (selector) => {
  Cycle.run(main, {
    DOM: makeDOMDriver(selector),
    History: makeHistoryDriver({hash: true})
  })
}

export default bootstrap
