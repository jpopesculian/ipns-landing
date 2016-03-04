import {hJSX} from '@cycle/dom'
import isolate from '@cycle/isolate'
import {Observable} from 'rx'
import Button from 'app/components/button'

const intent = (DOM) => {
  return {}
}

const model = (actions) => {
  return Observable.just({})
}

const view = (state$, components, DOM, History) => {
  return state$
    .withLatestFrom(components.button.DOM, (state, buttonVTree) => {
        return (
        <section id="header-page">
            <div className="content">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1>Explore the Interplanetary File System</h1>
                        <h2>Human readable subdomains to bring your content to humans not aliens</h2>
                        <div className="action-button">
                            {buttonVTree}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
    })
}

const history = (components, History) => {
    return components.button.History
}

const createComponents = (state$, DOM, History) => {
    const props$ = Observable.just({text: "Register Now", action: "register"})
    return {
        button: isolate(Button)({DOM, History, props$})
    }
}

const HeaderPage = ({DOM, prop$, History}) => {
  const state$ = model(intent(DOM))
  const components = createComponents(state$, DOM, History)
  return {
    value$: state$,
    DOM: view(state$, components, DOM, History),
    History: history(components, History)
  }
}

export default isolate(HeaderPage)
