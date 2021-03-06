import {h, svg} from '@cycle/dom'
import isolate from '@cycle/isolate'
import {Observable} from 'rx'

const intent = (DOM) => {
  return {}
}

const model = (actions, props$) => {
  return props$
}

const view = (state$) => {
  return state$.map((state) => {
	return svg('svg', {
            "namespace": "http://www.w3.org/2000/svg",
			"width": "110.9",
			"height": "33", 
			"version": "1.1",
			"viewBox": "0 0 111 33",
			"class": "logo" + (state.white ? " white" : "")
		}, [
			svg('g', {transform: "translate(-247.07423,-589.49225)"}, [
				svg('path', {d: "m250.8 620.9-3.7 0 0-28.4 3.8 0 0 28.4M270.8 609.6l0 11.1-3.7 0 0-28.4 10.5 0c3.1 0 5.5 0.8 7.3 2.4 1.8 1.6 2.7 3.7 2.7 6.3 0 2.8-0.9 4.9-2.6 6.4-1.7 1.5-4.2 2.2-7.4 2.2l-6.7 0m0-3.1 6.7 0c2 0 3.5-0.5 4.6-1.4 1.1-1 1.6-2.3 1.6-4.1 0-1.7-0.5-3-1.6-4.1-1.1-1-2.5-1.5-4.4-1.6l-7 0 0 11.2M347.5 608.6c-3.2-0.9-5.6-2.1-7-3.4-1.5-1.4-2.2-3-2.2-5 0-2.2 0.9-4.1 2.7-5.5 1.8-1.5 4.1-2.2 7-2.2 2 0 3.7 0.4 5.2 1.1 1.5 0.8 2.7 1.8 3.6 3.1 0.8 1.3 1.3 2.8 1.3 4.4l-3.8 0c0-1.7-0.5-3.1-1.6-4-1.1-1-2.6-1.5-4.6-1.5-1.8 0-3.3 0.4-4.3 1.2-1 0.8-1.5 1.9-1.5 3.4 0 1.2 0.5 2.1 1.5 2.9 1 0.8 2.7 1.5 5 2.2 2.4 0.7 4.2 1.4 5.5 2.2 1.3 0.8 2.3 1.7 3 2.8 0.7 1.1 1 2.3 1 3.8 0 2.3-0.9 4.2-2.7 5.5-1.8 1.4-4.2 2.1-7.2 2.1-2 0-3.8-0.4-5.5-1.1-1.7-0.8-3-1.8-3.9-3.1-0.9-1.3-1.4-2.8-1.4-4.4l3.8 0c0 1.7 0.6 3.1 1.9 4.1 1.3 1 3 1.5 5.1 1.5 2 0 3.5-0.4 4.6-1.2 1.1-0.8 1.6-1.9 1.6-3.3 0-1.4-0.5-2.5-1.5-3.2-1-0.8-2.7-1.5-5.3-2.3"}),
				svg('g', {transform: "translate(11.142857,-1.2499996)"}, [
					svg('path', {d: "m309.8 623.8-3.8 0-14.3-21.9 0 21.9-3.8 0 0-28.4 3.8 0 18.1 28.4M292.2 590.7l3.8 0 14.3 21.9 0-21.9 3.8 0 0 28.4-3.8 0-18.1-28.4"})
				])
			])
		]
	);
  })
}

const Logo = ({DOM, props$}) => {
  const state$ = model(intent(DOM), props$)
  return {
    value$: state$,
    DOM: view(state$, DOM)
  }
}

export default isolate(Logo)

