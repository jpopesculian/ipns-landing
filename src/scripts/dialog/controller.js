import {hJSX} from '@cycle/dom'
import isolate from '@cycle/isolate'
import {Observable} from 'rx'
import LoginDialog from 'app/dialog/login'

const intent = (DOM) => {
    return Observable.merge(
        DOM.select('.dialog-wrap').events('click')
            .filter((ev) => ev.target.className == 'dialog-wrap')
            .map((ev) => ({type: "close"})),
        DOM.select('.dialog-close').events('click')
            .map((ev) => ({type: "close"}))
    ).share()
}

const model = (action$) => {
  return Observable.just({})
}

const view = (state$, components, DOM, History) => {
  const pathname$ = History
    .map((event) => event.pathname.replace(/^\//, ""))
  return state$
		.combineLatest(
			pathname$, 
			components.loginDialog.DOM,
			(
				state, 
				pathname,
				loginDialogVTree
			) => {
				const className = pathname ? "open" : "closed"
				return (
					<div id="dialog" className={className}>
						<div className="dialog-wrap">
							<div className={`dialog-content ${className}`}>
								<div className="dialog-close"></div>
								{loginDialogVTree}
							</div>
						</div>
					</div>
				)
			})
}

const history = (action$, History) => {
    return action$
        .filter((action) => action.type == "close")
        .map(() => "")
}

const createComponents = (state$, DOM, History) => {
	const loginDialogProps$ = Observable.just({})
    return {
		loginDialog: LoginDialog({DOM, History, props$: loginDialogProps$})
	}
}

const DialogController = ({DOM, prop$, History}) => {
  const action$ = intent(DOM)
  const state$ = model(action$)
  const components = createComponents(state$, DOM, History)
  return {
    value$: state$,
    DOM: view(state$, components, DOM, History),
    History: history(action$, History)
  }
}

export default isolate(DialogController)
