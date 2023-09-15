import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import useStore from '../../services/StoreService';

const MainPage = ({selectedCategory, selectedMain, onSelectedProduct, onBuyProduct, activeSorting, search}) => {

	const [productsList, setProductsList] = useState ([])

	const {getAllProducts, getProductsOfCategory, getSearchedProducts} = useStore()

	useEffect(() => {
		if (!selectedCategory) {
		onRequestAllProducts();
		}
	}, [selectedMain, activeSorting])

	useEffect(() => {
		if (selectedCategory) {
			onRequestProductsByCategory();
		}
	}, [selectedCategory, activeSorting])

	useEffect(() => {
		if (search || search === ''){
			onRequestSearching();
		}
	}, [search])

	const onRequestAllProducts = () => {
		formList(getAllProducts)
	}

	const onRequestProductsByCategory = () => {
		formList(getProductsOfCategory, selectedCategory)
	}

	const onRequestSearching = () => {
		formList(getSearchedProducts, search)
	}

	const compareItemsBy = (a, b) => {

		switch (activeSorting){
			case 'price increase' :
				return a.price - b.price;
			case 'price decreas' :
				return b.price - a.price;
			case 'rating increase' :
				return a.rating - b.rating;
			case 'rating decreas' :
				return b.rating - a.rating;
			case 'sort by name' :
					if (a.title < b.title){
						return -1
					} else if (a.title > b.title) {
						return 1
					} else {
						return 0
					}
			case ' ' :
					return 0;
			default: 
		}
	}

	const formList = (request, variableReqestData) => {
		let productsArr = []
		request(variableReqestData)
		.then((data) =>{

			if (data.products.length){
			
				let sortedArr = data.products.sort(compareItemsBy);
				sortedArr.forEach((e, i)=>{
							const elemArr = [
								<div className="main__item" key={uuidv4 + i}
										data-id={e.id}
										data-title={e.title}
										data-price={e.price}
										data-rating={e.rating}
										data-thumbnail={e.thumbnail}
										>
								<img src={e.thumbnail} alt="#" />
								<div className='title'>{modifyTitle(e.title)}</div>
								<div className="priceandrate">
									<div className='price'>{e.price}.00$</div>
									<div className='rate'>
										{countRating(e.rating)}
									</div>
								</div>
								<div className="btn btn__buy"
										onClick={onBuyProduct}>Buy</div>
							</div>
							]
							productsArr = [...productsArr, ...elemArr]
							setProductsList([ ...productsArr])
				})
			} else {
				const elemArr = [
						<div key={uuidv4} className="btn btn__buy nomatches">no matches...</div>
					]
				setProductsList([elemArr])
			}
		})
		
	}

	const countRating = (rating) => {
		let coutingStars = []
		for (let i = 5; i > 0; i--){

			const fullStar = [<svg key={uuidv4 + i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" className="bi bi-star-fill" viewBox="0 0 16 16">
										<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
									</svg>]

			const halfStar = [<svg key={uuidv4 + i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" className="bi bi-star-half" viewBox="0 0 16 16">
										<path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"/>
									</svg>]

			const emptyStar = [<svg key={uuidv4 + i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" className="bi bi-star" viewBox="0 0 16 16">
										<path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
									</svg>]

			if (i - rating >=1) {
				coutingStars = [...emptyStar, ...coutingStars]
			}else if (i - rating >= 0.5) {
				coutingStars = [...halfStar, ...coutingStars]
			} else if (i - rating <= 0.5){
				coutingStars = [...fullStar, ...coutingStars]
			} 
		}

		return coutingStars
	}

	const modifyTitle = (title) => {
		let str = 	title[0].toUpperCase() + title.slice(1, 20)
		return str
	}

	return (
		<main className='main'
			onClick={onSelectedProduct}>
			{productsList}
		</main>
	)
}

export default MainPage;