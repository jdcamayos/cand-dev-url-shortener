import { useState } from 'react'
import './App.css'
import BackgroundAnimate from '../BackgroundAnimate/BackgroundAnimate'
import InputShortener from '../InputShortener/InputShortener'
import LinkResult from '../LinkResult/LinkResult'

function App() {
	const [inputValue, setInputValue] = useState('')
	return (
		<div className='container'>
			<InputShortener setInputValue={setInputValue} />
			<BackgroundAnimate />
			<LinkResult inputValue={inputValue} />
		</div>
	)
}

export default App
