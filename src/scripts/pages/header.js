mport {hJSX} from '@cycle/dom'
import isolate from '@cycle/isolate'
import {Observable} from 'rx'
import SolarSystem from 'app/components/solar-system'

const intent = (DOM) => {
  return {}
}

const model = (actions) => {
  return Observable.just({})
}

const view = (state$, DOM) => {
  const solarSystem = SolarSystem({DOM, prop$: Observable.just({})})
  return state$
    .withLatestFrom(solarSystem.DOM, (solarSystemVTree, state) => {
        return (
        <section id="header-page">
            {{solarSystemVTree}}
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
