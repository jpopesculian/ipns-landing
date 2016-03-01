import {hJSX} from '@cycle/dom'
import isolate from '@cycle/isolate'
import {Observable} from 'rx'

const intent = (DOM) => {
  return {}
}

const model = (actions, props$) => {
  return props$
}

const getButtonClasses = (state) => {
    let classes = "button"
    if (state.clear) { classes += " clear" }
    if (state.plain) { classes += " plain" }
    return classes
}

const view = (state$) => {
  return state$.map((state) => {
    return (
	<button className={getButtonClasses(state)}>
        {state.text}
	</button>
    )
  })
}

const Button = ({DOM, props$}) => {
  const state$ = model(intent(DOM), props$)
  return {
    value$: state$,
    DOM: view(state$)
  }
}

export default isolate(Button)

