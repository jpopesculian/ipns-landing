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
  return state$.map((state) => {
    return (
	<div className='solar-syst loaded'>
		<div className='sun'></div>
		<div className='mercury'></div>
		<div className='venus'></div>
		<div className='earth'></div>
		<div className='mars'></div>
		<div className='jupiter'></div>
		<div className='saturn'></div>
		<div className='uranus'></div>
		<div className='neptune'></div>
		<div className='pluto'></div>
		<div className='asteroids-belt'></div>
	</div>
    )
  })
}

const SolarSystem = ({DOM, prop$}) => {
  const state$ = model(intent(DOM))
  return {
    value$: state$,
    DOM: view(state$)
  }
}

export default isolate(SolarSystem)
