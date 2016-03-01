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

const view = (state$, DOM) => {
  const button = Button({DOM, props$: Observable.just({text: "Register Now"})})
  return state$
    .withLatestFrom(button.DOM, (state, buttonVTree) => {
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

const HeaderPage = ({DOM, prop$}) => {
  const state$ = model(intent(DOM))
  return {
    value$: state$,
    DOM: view(state$, DOM)
  }
}

export default isolate(HeaderPage)
