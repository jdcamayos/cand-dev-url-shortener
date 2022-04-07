import { useState } from 'react'
import './App.css'
import BackgroundAnimate from '../BackgroundAnimate/BackgroundAnimate'
import InputShortener from '../InputShortener/InputShortener'
import LinkResult from '../LinkResult/LinkResult'
import Footer from '../Footer/Footer'

function App() {
	const [inputValue, setInputValue] = useState('')
	return (
		<div className='container'>
			<InputShortener setInputValue={setInputValue} />
			<BackgroundAnimate />
			<LinkResult inputValue={inputValue} />
			<Footer />
		</div>
	)
}

export default App
