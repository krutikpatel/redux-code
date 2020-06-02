redux-http 

## redux-thunk
		-middleware to help us execute async-await code, in our case : make async http requests. we get error if we make async http calls from action class !

## Rules of reducers:
	-always returns value.
	-produces state or data to be used by app using only previous state and action.
	-first time reducer is called, it is passed undefined as state and action. then it returns initial state as return value.
	-must not return reach 'out of itself' to decide the return value.
	-must never mutate state argument passed to it.
		-basically to avoid not rendering because redux finds no change in state 
		-avoiding accidental mistakes..
		-basically return copy of state with new values that u want (like learnt earlier in basic react )
		
## Bad and good examples of changins state inside reducers:
	Array: bad
		state.pop()
		state.push()
		state[0]='hi'
		
	Array: good 
		state.filer(blah blah)
		[...state, hi]
		state.map(blah blah)
		
		
	Object: bad 
		state.name = 'dsfds'
		state.age = 30
		delete state.name 
	
	Object: good 
		{...state, name:'newname'}
		{...state, age:30}
		_.omit(state,'age') ==> lo dash library
		
