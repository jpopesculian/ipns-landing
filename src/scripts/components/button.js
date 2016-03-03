import {hJSX} from '@cycle/dom'
import isolate from '@cycle/isolate'
import {Observable} from 'rx'

const intent = (DOM) => {
    return {}
}

const model = (actions, props$) => {
    return props$
}

const getClasses = (state) => {
    let classes = "button"
    if (state.clear) { classes += " clear" }
    if (state.plain) { classes += " plain" }
    return classes
}

const getAction = (state) => {
    return state.action || "default"
}

const view = (state$) => {
  return state$.map((state) => {
    const attributes = {
        "data-action": getAction(state)
    }
    return (
        <button attributes={attributes} className={getClasses(state)}>
            {state.text}
        </button>
    )
  })
}

const Button = ({DOM, props$}) => {
  const actions = intent(DOM)
  const state$ = model(actions, props$)
  return {
    value$: state$,
    DOM: view(state$)
  }
}

export default isolate(Button)

