import { useEffect } from 'react';

import useStore from '../../services/StoreService';
import './../../styles/_style.scss';
const App = () => {

	//const {getAllProducts, getAllCategories} = useStore();

	
	useEffect(() => {
		//onRequest();
	//	onRequest2()
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	// const onRequest = () => {
	// 	getAllProducts()
	// 	.then((data) =>(console.log(data)))
	// }

	// const onRequest2 = () => {
	// 	getAllCategories()
	// 	.then((data) =>(console.log(data)))
	// }


	return (
		<div className='wrapper'>
			<header>
				<h1 className='shopper'>
					<span>Shopper</span>
				</h1>
			</header>
			<nav className='menu'>
				<section className="btn btn__menu">Categories
					<ul className='menu__list'>
						<li className='menu__item'><a href="#">Category 1</a></li>
						<li className='menu__item'><a href="#">Category 2</a></li>
						<li className='menu__item'><a href="#">Category 3</a></li>
						<li className='menu__item'><a href="#">Category 4</a></li>
					</ul>
				</section>
				<section className="btn btn__menu">Filters
				</section>
				<section className="btn btn__menu">Community</section>
				<section className="btn btn__menu">Publications</section>
				<section className="btn btn__menu">Basket</section>
			</nav>
			<section className="filters">
				<div className="filters__item">
					<p className="filters__text">filters__item</p>
					<div className="filters__close">✖</div>
				</div>
				<div className="filters__item">
					<p className="filters__text">filters__item</p>
					<div className="filters__close">✖</div>
				</div>
				<div className="filters__item">
					<p className="filters__text">filters__item</p>
					<div className="filters__close">✖</div>
				</div>
				<div className="filters__item">
					<p className="filters__text">filters__item</p>
					<div className="filters__close">✖</div>
				</div>
				<div className="filters__item">
					<p className="filters__text">filters__item</p>
					<div className="filters__close">✖</div>
				</div>
				<div className="filters__item">
					<p className="filters__text">filters__item</p>
					<div className="filters__close">✖</div>
				</div>
				<div className="filters__item">
					<p className="filters__text">filters__item</p>
					<div className="filters__close">✖</div>
				</div>
				<div className="filters__item">
					<p className="filters__text">filters__item</p>
					<div className="filters__close">✖</div>
				</div>
				<div className="filters__item">
					<p className="filters__text">filters__item</p>
					<div className="filters__close">✖</div>
				</div>
				<div className="filters__item">
					<p className="filters__text">filters__item</p>
					<div className="filters__close">✖</div>
				</div>
				<div className="filters__item">
					<p className="filters__text">filters__item</p>
					<div className="filters__close">✖</div>
				</div>
			</section>
			<main className='main'>
				<div className="main__item">
					<img src="https://www.ixbt.com/img/x780/n1/news/2023/6/1/ixbtmedia_young_caucasian_woman_looking_at_photo_on_smartphone_c9877e21-3b3a-4dcc-9bf5-52ec917f6d9a_large.png" alt="#" />
					<div className='title'>title and subtitle</div>
					<div className="priceandrate">
						<div className='price'>9999.58</div>
						<div className='rate'>
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" className="bi bi-star-fill" viewBox="0 0 16 16">
								<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
							</svg>
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" className="bi bi-star-fill" viewBox="0 0 16 16">
								<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
							</svg>
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" className="bi bi-star-fill" viewBox="0 0 16 16">
								<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
							</svg>
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" className="bi bi-star-half" viewBox="0 0 16 16">
								<path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"/>
							</svg>
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" className="bi bi-star" viewBox="0 0 16 16">
								<path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
							</svg>
						</div>
					</div>
					<div className="btn btn__buy">Buy</div>
				</div>
				<div className="main__item">
					<img src="https://www.ixbt.com/img/x780/n1/news/2023/6/1/ixbtmedia_young_caucasian_woman_looking_at_photo_on_smartphone_c9877e21-3b3a-4dcc-9bf5-52ec917f6d9a_large.png" alt="#" />
					<div className='title'>title and subtitle</div>
					<div className="priceandrate">
						<div className='price'>9.58</div>
						<div className='rate'>
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" className="bi bi-star-fill" viewBox="0 0 16 16">
								<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
							</svg>
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" className="bi bi-star-fill" viewBox="0 0 16 16">
								<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
							</svg>
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" className="bi bi-star-fill" viewBox="0 0 16 16">
								<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
							</svg>
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" className="bi bi-star-half" viewBox="0 0 16 16">
								<path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"/>
							</svg>
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" className="bi bi-star" viewBox="0 0 16 16">
								<path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
							</svg>
						</div>
					</div>
					<div className="btn btn__buy">Buy</div>
				</div>
				<div className="main__item">
					<img src="https://www.ixbt.com/img/x780/n1/news/2023/6/1/ixbtmedia_young_caucasian_woman_looking_at_photo_on_smartphone_c9877e21-3b3a-4dcc-9bf5-52ec917f6d9a_large.png" alt="#" />main__item</div>
				<div className="main__item">
					<img src="https://www.ixbt.com/img/x780/n1/news/2023/6/1/ixbtmedia_young_caucasian_woman_looking_at_photo_on_smartphone_c9877e21-3b3a-4dcc-9bf5-52ec917f6d9a_large.png" alt="#" />main__item</div>
				<div className="main__item">
					<img src="https://www.ixbt.com/img/x780/n1/news/2023/6/1/ixbtmedia_young_caucasian_woman_looking_at_photo_on_smartphone_c9877e21-3b3a-4dcc-9bf5-52ec917f6d9a_large.png" alt="#" />main__item</div>
				<div className="main__item">
					<img src="https://www.ixbt.com/img/x780/n1/news/2023/6/1/ixbtmedia_young_caucasian_woman_looking_at_photo_on_smartphone_c9877e21-3b3a-4dcc-9bf5-52ec917f6d9a_large.png" alt="#" />main__item</div>
				<div className="main__item">
					<img src="https://www.ixbt.com/img/x780/n1/news/2023/6/1/ixbtmedia_young_caucasian_woman_looking_at_photo_on_smartphone_c9877e21-3b3a-4dcc-9bf5-52ec917f6d9a_large.png" alt="#" />main__item</div>
				<div className="main__item">
					<img src="https://www.ixbt.com/img/x780/n1/news/2023/6/1/ixbtmedia_young_caucasian_woman_looking_at_photo_on_smartphone_c9877e21-3b3a-4dcc-9bf5-52ec917f6d9a_large.png" alt="#" />main__item</div>
			</main>
			<section className='basket'>
				<div className="basket__container">
					<div className="close">✖</div>
					<div className="basket__item">
						<img className='basket__img' src="https://www.ixbt.com/img/x780/n1/news/2023/6/1/ixbtmedia_young_caucasian_woman_looking_at_photo_on_smartphone_c9877e21-3b3a-4dcc-9bf5-52ec917f6d9a_large.png" alt="#" />
						<div className="basket__content">
							<div className='basket__title'>title and subtitle</div>
							<div className="basket__priceandrate">
								<div className='basket__price'>9999.58</div>
								<div className='basket__rate'>
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" className="bi bi-star-fill" viewBox="0 0 16 16">
										<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
									</svg>
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" className="bi bi-star-fill" viewBox="0 0 16 16">
										<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
									</svg>
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" className="bi bi-star-fill" viewBox="0 0 16 16">
										<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
									</svg>
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" className="bi bi-star-half" viewBox="0 0 16 16">
										<path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"/>
									</svg>
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" className="bi bi-star" viewBox="0 0 16 16">
										<path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
									</svg>
								</div>
							</div>
							<div className="basket__qty">qty</div>
							<div className="basket__dlt">dlt</div>
						</div>
					</div>
					<div className="basket__item">
						<img className='basket__img' src="https://www.ixbt.com/img/x780/n1/news/2023/6/1/ixbtmedia_young_caucasian_woman_looking_at_photo_on_smartphone_c9877e21-3b3a-4dcc-9bf5-52ec917f6d9a_large.png" alt="#" />
						<div className="basket__content">
							<div className='basket__title'>title and subtitle</div>
							<div className="basket__priceandrate">
								<div className='basket__price'>9999.58</div>
								<div className='basket__rate'>
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" className="bi bi-star-fill" viewBox="0 0 16 16">
										<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
									</svg>
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" className="bi bi-star-fill" viewBox="0 0 16 16">
										<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
									</svg>
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" className="bi bi-star-fill" viewBox="0 0 16 16">
										<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
									</svg>
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" className="bi bi-star-half" viewBox="0 0 16 16">
										<path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"/>
									</svg>
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" className="bi bi-star" viewBox="0 0 16 16">
										<path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
									</svg>
								</div>
							</div>
							<div className="basket__qty">qty</div>
							<div className="basket__dlt">dlt</div>
						</div>
					</div>
					<div className="basket__item">
						<img className='basket__img' src="https://www.ixbt.com/img/x780/n1/news/2023/6/1/ixbtmedia_young_caucasian_woman_looking_at_photo_on_smartphone_c9877e21-3b3a-4dcc-9bf5-52ec917f6d9a_large.png" alt="#" />
						<div className="basket__content">
							<div className='basket__title'>title and subtitle</div>
							<div className="basket__priceandrate">
								<div className='basket__price'>9999.58</div>
								<div className='basket__rate'>
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" className="bi bi-star-fill" viewBox="0 0 16 16">
										<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
									</svg>
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" className="bi bi-star-fill" viewBox="0 0 16 16">
										<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
									</svg>
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" className="bi bi-star-fill" viewBox="0 0 16 16">
										<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
									</svg>
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" className="bi bi-star-half" viewBox="0 0 16 16">
										<path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"/>
									</svg>
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" className="bi bi-star" viewBox="0 0 16 16">
										<path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
									</svg>
								</div>
							</div>
							<div className="basket__qty">qty</div>
							<div className="basket__dlt">dlt</div>
						</div>
					</div>
				</div>
			</section>
			
			<footer>Footer</footer>
		</div>
	)
}

export default App;