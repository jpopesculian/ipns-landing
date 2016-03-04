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

const view = (state$, components, DOM, History) => {
  return state$
    .withLatestFrom(
        components.logo.DOM, 
        components.mainButton.DOM,
        components.altButton.DOM,
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

const history = (components, History) => {
    return components.mainButton.History.merge(components.altButton.History)
}

const createComponents = (state$, DOM, History) => {
    const logoProps$ = Observable.just({ white: true })
    const mainButtonProps$ = Observable.just({
        text: "Register", 
        clear: true, 
        action: "register"
    })
    const altButtonProps$ = Observable.just({
        text: "Login", 
        plain: true, 
        action: "login"
    })
    return {
        logo: Logo({DOM, History, props$: logoProps$}),
        mainButton: isolate(Button)({DOM, History, props$: mainButtonProps$}),
        altButton: isolate(Button)({DOM, History, props$: altButtonProps$}),
    }
}

const MainNav = ({DOM, prop$, History}) => {
  const state$ = model(intent(DOM))
  const components = createComponents(state$, DOM, History)
  return {
    value$: state$,
    DOM: view(state$, components, DOM, History),
    History: history(components, History)
  }
}

export default isolate(MainNav)

