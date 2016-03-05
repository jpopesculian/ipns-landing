import {hJSX} from '@cycle/dom'
import isolate from '@cycle/isolate'
import {Observable} from 'rx'

const intent = (DOM) => {
    return Observable.merge(
        DOM.events('click').map((ev) => ({type: "navigate"}))
    ).share()
}

const model = (action$, props$) => {
    return props$
}

const getClasses = (state) => {
    let classes = "button"
    if (state.clear) { classes += " clear" }
    if (state.plain) { classes += " plain" }
    if (state.white) { classes += " white" }
    return classes
}

const getType = (state) => {
    return state.type || "button"
}

const view = (state$) => {
  return state$.map((state) => {
    return (
        <button className={getClasses(state)} type={getType(state)}>
            {state.text}
        </button>
    )
  })
}

const history = (action$, state$, History) => {
    return action$
        .filter((action) => action.type == "navigate")
        .withLatestFrom(state$, (event, state) => state.action)
        .filter((action) => action != undefined)
}

const Button = ({DOM, props$, History}) => {
  const action$ = intent(DOM)
  const state$ = model(action$, props$)
  return {
    value$: state$,
    DOM: view(state$),
    History: history(action$, state$, History)
  }
}

export default Button

