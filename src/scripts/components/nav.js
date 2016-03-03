import {hJSX} from '@cycle/dom'
import isolate from '@cycle/isolate'
import {Observable} from 'rx'
import Logo from 'app/components/logo'
import Button from 'app/components/button'

const intent = (DOM) => {
  return {}
}

const model = (actions) => {
  return Observable.just({})
}

const view = (state$, DOM) => {
  const logo = Logo({DOM, props$: Observable.just({
    white: true
  })})
  const mainButton = Button({DOM, props$: Observable.just({
      text: "Register", 
      clear: true, 
      action: "primary"
  })})
  const altButton = Button({DOM, props$: Observable.just({
      text: "Login", 
      plain: true, 
      action: "secondary"
  })})
  return state$
    .withLatestFrom(
        logo.DOM, 
        mainButton.DOM,
        altButton.DOM,
        (
        state,
        logoVTree,
        altButtonVTree,
        mainButtonVTree
        ) => {
            return (
            <nav id="main-nav">
                <div className="content">
                    {logoVTree}
                    <div className="menu">
                        {mainButtonVTree}
                        {altButtonVTree}
                    </div>
                </div>
            </nav>
            )
    })
}

const MainNav = ({DOM, prop$}) => {
  const state$ = model(intent(DOM))
  return {
    value$: state$,
    DOM: view(state$, DOM)
  }
}

export default isolate(MainNav)

