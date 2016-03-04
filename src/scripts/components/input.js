import {hJSX} from '@cycle/dom'
import isolate from '@cycle/isolate'
import {Observable} from 'rx'

const intent = (DOM) => {
    return Observable.merge(
        DOM.events('input').map((ev) => ({type: "data", value: ev.target.value})),
        DOM.events('focus').map((ev) => ({type: "focus", value: true})),
        DOM.events('blur').map((ev) => ({type: "focus", value: false}))
    ).share()
}

const model = (action$, props$) => {
    const initialValue$ = props$.map(props => props.initial).first()
    const newValue$ = action$
        .filter((action) => action.type == "data")
        .map((action) => action.value)
    const value$ = initialValue$.concat(newValue$)

    const focus$ = action$
        .filter((action) => action.type == "focus")
        .map((action) => action.value)
        .startWith(false)

    return props$
        .combineLatest(value$, focus$, (props, value, focus) => {
            let state = props
            state.value = value
            state.focus = focus
            return state
        })
}

const getClasses = (state) => {
    let classes = "input"
    if (state.focus) { classes += " focused" }
    if (state.value) { classes += " filled" }
    return classes
}

const view = (state$) => {
  return state$.map((state) => {
    const name = state.name || ""
    const type = state.type || "text"
    return (
        <div className={getClasses(state)}>
            <label for={name}>{state.label}</label>
            <input 
                type={type}
                name={name}>
            </input>
        </div>
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

