import {hJSX} from '@cycle/dom'
import isolate from '@cycle/isolate'
import {Observable} from 'rx'
import Input from 'app/components/input'

const intent = (DOM) => {
  return {}
}

const model = (actions) => {
  return Observable.just({})
}

const view = (state$, components, DOM, History) => {
  return state$
    .combineLatest(
        components.emailInput.DOM, 
        components.passwordInput.DOM, 
        (
            state, 
            emailInputVTree,
            passwordInputVTree
        ) => {
        return (
        <div id="login-dialog" className="dialog-form">
            <h3>Login</h3>
            <form>
                {emailInputVTree}
                {passwordInputVTree}
            </form>
        </div>
        )
    })
}

const history = (components, History) => {
    return History
}

const createComponents = (state$, DOM, History) => {
    const emailInputProps$ = Observable.just({
        label: "email",
        type: "email"
    })
    const passwordInputProps$ = Observable.just({
        label: "password",
        type: "password"
    })
    return {
        emailInput: isolate(Input)({DOM, History, props$: emailInputProps$}),
        passwordInput: isolate(Input)({DOM, History, props$: passwordInputProps$})
    }
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
