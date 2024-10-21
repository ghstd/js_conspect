const headerItem = document.querySelectorAll('.header__item')

headerItem[0].addEventListener('click', () => {

	renderList('JS')
		.then(() => {
			renderJSContent()
		})
		.catch(err => console.log(`renderList('JS'): ${err}`))
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
		.catch(err => console.log(`renderList('Webpack'): ${err}`))
})

headerItem[2].addEventListener('click', () => {

	renderList('Lendings')
		.then(() => {
			document.querySelectorAll('.aside__item').forEach(el => {

				el.addEventListener('click', e => {
					document.querySelectorAll('.aside__item').forEach(el => el.parentElement.classList.remove('active'))
					el.parentElement.classList.add('active')

					renderLendingTabs(e.target.dataset.src)
				})
			})
		})
		.catch(err => console.log(`renderList('Lendings'): ${err}`))
})















