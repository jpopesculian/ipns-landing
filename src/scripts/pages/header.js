import {hJSX} from '@cycle/dom'
import isolate from '@cycle/isolate'
import {Observable} from 'rx'

const intent = (DOM) => {
  return {}
}

const model = (actions) => {
  return Observable.just({})
}

const view = (state$) => {
  return state$
    .map((state) => {
        return (
        <section id="header-page">
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
