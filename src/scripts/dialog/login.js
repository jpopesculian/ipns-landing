import {hJSX} from '@cycle/dom'
import isolate from '@cycle/isolate'
import {Observable} from 'rx'

const intent = (DOM) => {
  return {}
}

const model = (actions) => {
  return Observable.just({})
}

const view = (state$, components, DOM, History) => {
  return state$
    .map((state) => {
        return (
        <div id="login-dialog" className="dialog-form">
            <h3>Login</h3>
        </div>
        )
    })
}

const history = (components, History) => {
    return History
}

const createComponents = (state$, DOM, History) => {
    return {}
}

const LoginDialog = ({DOM, prop$, History}) => {
  const state$ = model(intent(DOM))
  const components = createComponents(state$, DOM, History)
  return {
    value$: state$,
    DOM: view(state$, components, DOM, History),
    History: history(components, History)
  }
}

export default isolate(LoginDialog)
