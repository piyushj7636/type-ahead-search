async function fetchData() {
	const searchInput = document.querySelector(".search").value
	const result = await fetch(`https://api.duckduckgo.com/?q=${searchInput}&format=json`)
	const data = await result.json()
	document.querySelector(".results").textContent = ""
	const suggestions = data.RelatedTopics.filter(item => "FirstURL" in item).forEach((q) => {
		const suggestionBox = document.createElement("div")
		document.querySelector(".results").appendChild(suggestionBox).textContent = q.Text})
	console.log(suggestions)
}

const debounce = (fn, delay) => {
	let timer
	return function(){
		context = this
		args = arguments
		clearTimeout(timer)
		timer = setTimeout(()=> {
			fn.apply(context, args)
		}, delay)
	}
}

const getData = debounce(fetchData, 300)