import { useState, useEffect } from 'react';

import useStore from '../../services/StoreService';
import './../../styles/_style.scss';

import Header from '../header/Header';
import Menu from '../menu/Menu';
import ProductInfo from '../productInfo/ProductInfo';
import Filters from '../filters/Filters';
import Basket from '../basket/Basket';
import MainPage from '../mainPage/MainPage';
import Footer from '../footer/Footer';


const App = () => {

	const {getAllCategories} = useStore()

	const [selectedMain, setSelectedMain] = useState (true);
	const [selectedCategory, setSelectedCategory] = useState (null)
	const [selectedProduct, setSelectedProduct] = useState (false)
	const [productInfo, setProductInfo] = useState (null)
	const [filter, setFilter] = useState (true)
	const [basket, setBasket] = useState (true)

	useEffect(() => {
		//onRequest();
	//onRequest2()
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

		if (e.target.dataset.section === 'Filters'){
			setFilter(!filter)
		};

		if (e.target.dataset.section === 'Basket'){
			document.body.style.overflow = 'hidden';
			setBasket(!basket)
			
		};
	}

	const onMainPage = (e) => {
		if (e.target.dataset.main) {
			setSelectedMain(!selectedMain)
		}
	}

	const onCategory = (e) => {
		if (e.target.tagName === 'A' || e.target.tagName === 'LI'){
			setSelectedCategory(e.target.dataset.categoty);
		}
	}

	const onSelectedProduct = (data) => {
		if(data.target.closest('.main__item')){
			setSelectedProduct(+data.target.closest('.main__item').dataset.id);
			document.body.style.overflow = 'hidden';
		}
	}

	const onProduct = () => {
			setSelectedProduct(false);
			document.body.style.overflow = ''
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
			<section className='fixed__top'
				onClick={onMainPage}>
				<Header/>
				<Menu
					section={onSelectSection}
					onCategory={onCategory}/>
				{filter? null: <Filters
											status={onFilter}/>}
				{basket? null: <Basket
											status={onBasket}/>}
				{selectedProduct? <ProductInfo
											status={onProduct}
											selectedProduct={selectedProduct}/> : null}
			</section>
			<MainPage
				selectedCategory={selectedCategory}
				selectedMain={selectedMain}
				onSelectedProduct={onSelectedProduct}/>
			<Footer/>
		</div>
	)
}

export default App;