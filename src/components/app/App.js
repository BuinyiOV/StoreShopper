import { useState, useEffect } from 'react';

import useStore from '../../services/StoreService';
import './../../styles/_style.scss';

import Header from '../header/Header';
import Menu from '../menu/Menu';
import ProductInfo from '../productInfo/ProductInfo';
import Filters from '../filters/Filters';
import Community from '../community/Community';
import Publications from '../publications/Publications';
import Basket from '../basket/Basket';
import MainPage from '../mainPage/MainPage';
import Footer from '../footer/Footer';


const App = () => {

	const {getAllCategories} = useStore()

	const [selectedMain, setSelectedMain] = useState (true);
	const [selectedCategory, setSelectedCategory] = useState (null)
	const [selectedProduct, setSelectedProduct] = useState (false)
	const [filter, setFilter] = useState (true)
	const [activeSorting, setActiveSorting] = useState ('')
	const [search, setSearch] = useState (null)
	const [community, setCommunity] = useState (true)
	const [publications, setPublications] = useState (true)
	const [basket, setBasket] = useState (true)

	const onSelectSection = (e) => {

		if (e.target.dataset.section === 'Filters'){
			setFilter(!filter)
		};

		if (e.target.dataset.section === 'Community'){
			document.body.style.overflow = 'hidden';
			setCommunity(!community)
		};

		if (e.target.dataset.section === 'Publications'){
			document.body.style.overflow = 'hidden';
			setPublications(!publications)
		};

		if (e.target.dataset.section === 'Basket'){
			document.body.style.overflow = 'hidden';
			setBasket(!basket)
		};
	}

	const onMainPage = (e) => {
		if (e.target.dataset.main) {
			setSelectedMain(!selectedMain);
			setActiveSorting('');
			setSelectedCategory(null)
			setFilter(true);
		}
	}

	const onCategory = (e) => {
		e.preventDefault();
		if (e.target.tagName === 'A' || e.target.tagName === 'LI'){
			setSelectedCategory(e.target.dataset.categoty);
			setFilter(true);
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
		setFilter(true);
		setActiveSorting('');
		setSelectedMain(!selectedMain)
		setSelectedCategory(null)
		document.getElementById("searchfield").value = ""
	}

	const onSorting = (e) => {
		if (e.target.dataset.sorting){
			setActiveSorting(e.target.dataset.sorting);
			document.getElementById("searchfield").value = ""
		};
	}

	const onSearching = (value) => {
		setSearch(value)
	}

	const onCommunity = () => {
		setCommunity(true);
		document.body.style.overflow = ''
	}

	const onPublications = () => {
		setPublications(true);
		document.body.style.overflow = ''
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
											status={onFilter}
											sorting={onSorting}
											onChange={onSearching}/>}
				{community? null:<Community
											status={onCommunity}/>}
				{publications? null:<Publications
											status={onPublications}/>}
				{basket? null: <Basket
											status={onBasket}/>}
				{selectedProduct? <ProductInfo
											status={onProduct}
											selectedProduct={selectedProduct}/> : null}
			</section>
			<MainPage
				selectedCategory={selectedCategory}
				selectedMain={selectedMain}
				onSelectedProduct={onSelectedProduct}
				activeSorting={activeSorting}
				search={search}/>
			<Footer/>
		</div>
	)
}

export default App;