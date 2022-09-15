const headerItem = document.querySelectorAll('.header__item')

headerItem[0].addEventListener('click', () => {

	renderList('JS')
		.then(() => {
			renderJSContent()
		})
})

headerItem[1].addEventListener('click', () => {

	renderList('Webpack')
		.then(() => {
			document.querySelectorAll('.aside__item').forEach(el => {

				el.addEventListener('click', e => {
					document.querySelectorAll('.aside__item').forEach(el => el.parentElement.classList.remove('active'))
					el.parentElement.classList.add('active')

					if (e.target.dataset.src === 'data/common/') {
						renderNonStandardTabs()
					} else {
						renderStandardTabs(e.target.dataset.src)
					}

				})
			})
		})
})















