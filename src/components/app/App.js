import { useState, lazy, Suspense } from 'react';

import './../../styles/_style.scss';

import Spiner from '../spiner/Spiner';

const Header = lazy(() => import ('../header/Header'));
const Menu = lazy(() => import ('../menu/Menu'));
const ProductInfo = lazy(() => import ('../productInfo/ProductInfo'));
const BuyProduct = lazy(() => import ('../buyProduct/BuyProduct'));
const Filters = lazy(() => import ('../filters/Filters'));
const Community = lazy(() => import ('../community/Community'));
const Publications = lazy(() => import ('../publications/Publications'));
const Basket = lazy(() => import ('../basket/Basket'));
const MainPage = lazy(() => import ('../mainPage/MainPage'));
const Footer = lazy(() => import ('../footer/Footer'));

const App = () => {

	const [selectedMain, setSelectedMain] = useState (true);
	const [selectedCategory, setSelectedCategory] = useState (null)
	const [selectedProduct, setSelectedProduct] = useState (false)
	const [buyProduct, setBuyProduct] = useState (false)
	const [filter, setFilter] = useState (true)
	const [activeSorting, setActiveSorting] = useState ('')
	const [search, setSearch] = useState (null)
	const [community, setCommunity] = useState (true)
	const [publications, setPublications] = useState (true)
	const [basket, setBasket] = useState (true)
	const [besketItems, setBesketItems] = useState ([])

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
			window.scrollTo(0,0)
		}
	}

	const onCategory = (e) => {
		e.preventDefault();
		if (e.target.tagName === 'A' || e.target.tagName === 'LI'){
			setSelectedCategory(e.target.dataset.categoty);
			setFilter(true);
			window.scrollTo(0,0)
		}
	}

	const onSelectedProduct = (data) => {
		if(data.target.closest('.main__item') && !data.target.closest('.btn__buy')){
			setSelectedProduct(+data.target.closest('.main__item').dataset.id);
			document.body.style.overflow = 'hidden';
		}
	}

	const onBuyProduct = (data) => {
		if(data.target.classList.contains('btn__buy') && data.target.closest('.main__item')){
			setBuyProduct(data.target.closest('.main__item').dataset);
			document.body.style.overflow = 'hidden';
		} else if (data.target.classList.contains('btn__buy') && data.target.closest('.product__container')){
			setBuyProduct(data.target.closest('.product__container').dataset);
			document.body.style.overflow = 'hidden';
		}
	}

	const onProduct = () => {
			setSelectedProduct(false);
			document.body.style.overflow = ''
	}

	const onBuy = () => {
		setBuyProduct(false);
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
		setSelectedCategory(null)
		window.scrollTo(0,0)
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

	const onBasketItems = (data) => {
		if(data.amount > 0) {
		setBesketItems([...besketItems, data]);
		}
	}

	const onDeleteFromBasket = (e) => {
		const newArr = [...besketItems];

		let item = e.target.closest('.basket__item').dataset.title;

		const delItem = (item, arr) => {
			const currIndex = (element) => (element === arr.find(product => product.cc === item));
			arr.splice((arr.findIndex(currIndex)), 1)
		};

		delItem(item, newArr);

		setBesketItems(newArr)
	}

	const onClearBasket = () => {
		setBesketItems([])
	}

	return (
		<div className='wrapper'>
			<Suspense fallback={<Spiner/>}>
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
												onClearBasket={onClearBasket}
												status={onBasket}
												besketItems={besketItems}
												onDeleteFromBasket={onDeleteFromBasket}/>}
					{selectedProduct? <ProductInfo
												status={onProduct}
												onBuyProduct={onBuyProduct}
												selectedProduct={selectedProduct}/> : null}
					{buyProduct? <BuyProduct
												status={onBuy}
												buyProduct={buyProduct}
												onBasketItems={onBasketItems}/> : null}
				</section>
				<MainPage classList="animated"
					selectedCategory={selectedCategory}
					selectedMain={selectedMain}
					onSelectedProduct={onSelectedProduct}
					onBuyProduct={onBuyProduct}
					activeSorting={activeSorting}
					search={search}/>
				<Footer/>
			</Suspense>
		</div>
	)
}

export default App;