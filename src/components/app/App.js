import { useState, useEffect } from 'react';

import useStore from '../../services/StoreService';
import './../../styles/_style.scss';


import Header from '../header/Header';
import Menu from '../menu/Menu';
import Filters from '../filters/Filters';
import Basket from '../basket/Basket';
import MainPage from '../mainPage/MainPage';
import Footer from '../footer/Footer';


const App = () => {

	const [selectedSection, setSelectedSection] = useState (null);
	const [filter, setFilter] = useState (true)
	const [basket, setBasket] = useState (true)

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

	const onSelectSection = (e) => {
		setSelectedSection(e.target.dataset.section);

		if (e.target.dataset.section === 'Filters'){
			setFilter(!filter)
		};

		if (e.target.dataset.section === 'Basket'){
			document.body.style.overflow = 'hidden';
			setBasket(!basket)
			
		};
	}

	const onFilter = () => {
		setFilter(true)
	}

	const onBasket = () => {
		setBasket(true);
		document.body.style.overflow = ''
	}

	return (
		<div className='wrapper'>
			<section className='fixed__top'><Header/>
				<Menu
					section={onSelectSection}/>
				{filter? null: <Filters status={onFilter}/>}
				{basket? null: <Basket status={onBasket}/>}
			</section>
			<MainPage/>
			<Footer/>
		</div>
	)
}

export default App;