function renderList(url) {
	return fetch(`./assets/${url}/data.json`)
		.then(response => response.json())
		.then(body => {

			const html = body.map(i => {
				return `
			<li>
				<a href="#" class="aside__item" data-src="${i.content}">
					${i.theme}
				</a>
			</li>
			`
			}).join('')

			document.querySelector('.aside__list').innerHTML = html
		})
}

function renderJSContent() {
	document.querySelectorAll('.aside__item').forEach(el => {

		el.addEventListener('click', e => {
			document.querySelectorAll('.aside__item').forEach(el => el.parentElement.classList.remove('active'))
			el.parentElement.classList.add('active')

			fetch(`./assets/JS/${e.target.dataset.src}index.js`)
				.then(response => response.text())
				.then(body => {
					document.querySelector('.content')
						.innerHTML = `<pre><code class="language-javascript">>${body}</code></pre>`

					hljs.highlightAll()
				})
		})
	})
}

function renderNonStandardTabs() {

	const content = document.querySelector('.content')
	content.innerHTML = `
		<div class="tabs__panels">
			<div class="tabs__panel">Images</div>
			<div class="tabs__panel">Conspect</div>
			<div class="tabs__panel">Code</div>
		</div>
		<div class="tabs__items">
			<div class="tabs__item">
				<img src="./assets/Webpack/data/common/scheme_1.png" alt="scheme_1">
				<img src="./assets/Webpack/data/common/scheme_2.png" alt="scheme_2">
			</div>
		</div>
	`

	fetch(`./assets/Webpack/data/common/webpack_consp.md`)
		.then(response => response.text())
		.then(body => {
			document.querySelector('.tabs__items')
				.insertAdjacentHTML('beforeend', `
					<div class="tabs__item">
						<pre><code class="language-md">${body}</code></pre>
					</div>
			`)
		}).then(() => {

			fetch(`./assets/Webpack/data/common/package.json`)
				.then(response => response.text())
				.then(body => {
					document.querySelector('.tabs__items')
						.insertAdjacentHTML('beforeend', `
						<div class="tabs__item">
							<pre><code class="language-json">${body}</code></pre>
						</div>
				`)
				}).then(() => {

					hljs.highlightAll()
					tabsHandler()
				})
		})
}

function renderStandardTabs(url) {

	const content = document.querySelector('.content')
	content.innerHTML = `
		<div class="tabs__panels">
			<div class="tabs__panel">Video</div>
			<div class="tabs__panel">Code</div>
		</div>
		<div class="tabs__items"></div>
	`
	fetch(`./assets/Webpack/${url}video.html`)
		.then(response => response.text())
		.then(body => {
			document.querySelector('.tabs__items')
				.insertAdjacentHTML('beforeend', `
				<div class="tabs__item">${body}</div>
				`)
		}).then(() => {

			fetch(`./assets/Webpack/${url}webpack.config.js`)
				.then(response => response.text())
				.then(body => {
					document.querySelector('.tabs__items')
						.insertAdjacentHTML('beforeend', `
					<div class="tabs__item">
						<pre><code class="language-javascript">${body}</code></pre>
					</div>
					`)
				}).then(() => {

					hljs.highlightAll()
					tabsHandler()
				})
		})
}

function tabsHandler() {
	const panels = document.querySelectorAll('.tabs__panel')
	const tabs = document.querySelectorAll('.tabs__item')

	panels.forEach((panel, i) => {
		panel.addEventListener('click', () => {

			panels.forEach((panel, i) => {
				panel.classList.remove('active')
				tabs[i].classList.remove('active')
			})

			panel.classList.add('active')
			tabs[i].classList.add('active')
		})
	})
}


