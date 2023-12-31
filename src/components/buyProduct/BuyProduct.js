import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const BuyProduct = ({buyProduct, status, onBasketItems}) => {

	const [detals, setDetals] = useState ([])
	const [qty, setQty] = useState (0)
	

	useEffect (()=>{
		buyOptions()
	}, [buyProduct, qty])


	const buyOptions = () => {
					let options = [
								<div className="basket__container"  key={uuidv4}>
									<div className="close"
										onClick={status}>✖</div>
									<div className="basket__item">
										<img className='basket__img' src={buyProduct.thumbnail} alt="#" />
										<div className="basket__content">
											<div className='basket__title'></div>
											<div className="basket__priceandrate">
												<div className='basket__price'>{buyProduct.price}.00$</div>
												<div className='basket__rate'>{countRating(buyProduct.rating)}</div>
											</div>
											<section className="setqty">
													<div className="btnqty" onClick={onDec}>-</div>
													<div className="qtyfield">{qty}</div>
													<div className="btnqty" onClick={onInc}>+</div>
													<div className="btn__buy basketbuy" onClick={onAddToBasket}>buy</div>
											</section>
											
										</div>
									</div>
								</div>
						];
		setDetals(options)
	}

const onInc = () => {
	if (qty < 9999) {
		setQty(qty + 1)
	}
}

const onDec = () => {
	if (qty > 0) {
		setQty(qty - 1)
	}
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

	const modifyText = (text) => {
		let str = text[0].toUpperCase() + text.slice(1)
		return str
	}

	const onAddToBasket = () => {
		status()
		onBasketItems({thumbnail: buyProduct.thumbnail,
			title:modifyText(buyProduct.title),
			price: buyProduct.price,
			rating: buyProduct.rating,
			amount:qty
		})
	}

	return (
		<section className='basket'>
			{detals}
		</section>
	)
}

export default BuyProduct;