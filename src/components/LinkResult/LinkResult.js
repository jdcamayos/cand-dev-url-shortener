import { useEffect, useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import './LinkResult.css'

export default function LinkResult({ inputValue }) {
	const [shortenLink, setShortenLink] = useState('')
	const [copied, setCopied] = useState(false)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)

	const fetchData = async () => {
		try {
			setLoading(true)
			const res = await fetch(
				`https://api.shrtco.de/v2/shorten?url=${inputValue}`
			)
			const data = await res.json()
			setShortenLink(data.result.full_short_link)
		} catch (error) {
			console.log(error)
			setError(error)
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		if (inputValue.length) {
			fetchData()
		}
	}, [inputValue])

	useEffect(() => {
		const timer = setTimeout(() => {
			setCopied(false)
		}, 3000)

		return () => clearTimeout(timer)
	}, [copied])

	if (loading) {
		return <p className='noData'>Loading...</p>
	}

	if (error) {
		return <p className=''>Something went wrong 😥</p>
	}

	return (
		<>
			{shortenLink && (
				<div className='result'>
					<p>{shortenLink}</p>

					<CopyToClipboard text={shortenLink} onCopy={() => setCopied(true)}>
						<button className={copied ? 'copied' : ''}>
							Copy to clickboard
						</button>
					</CopyToClipboard>
				</div>
			)}
		</>
	)
}
