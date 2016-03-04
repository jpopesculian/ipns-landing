import {hJSX} from '@cycle/dom'
import isolate from '@cycle/isolate'
import {Observable} from 'rx'

const intent = (DOM) => {
    return Observable.merge(
        DOM.events('input').share()
    ).share()
}

const model = (action$, props$) => {
    const initialValue$ = props$.map(props => props.initial).first()
    const value$ = initialValue$.concat(action$.map(ev => ev.target.value))
    return props$
        .combineLatest(value$, (props, value) => {
            let state = props
            state.value = value
            return state
        })
}

const getClasses = (state) => {
    let classes = "input"
    if (state.clear) { classes += " clear" }
    if (state.plain) { classes += " plain" }
    return classes
}

const getType = (state) => {
    return state.type || "button"
}

const getPlaceholder = (state) => {
    return state.placeholder || ""
}

const view = (state$) => {
  return state$.map((state) => {
    return (
        <input 
            className={getClasses(state)}
            type={getType(state)}
            placeholder={getPlaceholder(state)}>
        </input>
    )
  })
}

const Input = ({DOM, props$, History}) => {
  const action$ = intent(DOM)
  const state$ = model(action$, props$)
  return {
    value$: state$,
    DOM: view(state$)
  }
}

export default Input

