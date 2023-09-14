import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import useStore from '../../services/StoreService';


const Categoties = ({onCategory}) => {

	const [categoriesList, setCategoriesList] = useState ([])

	const {getAllCategories} = useStore()

	useEffect(() => {
		onRequestCategories();
	}, [])

	const onRequestCategories = () => {
		let categoriesArr = []
		getAllCategories()
		.then((data) =>{
			data.forEach((e)=>{
				const value = e.replace(/-/g, " ").toUpperCase();
				const elemArr = [<li key={uuidv4} 
										className='menu__item'
										data-categoty={e}>
											<a href="#" 
												data-categoty={e}>
												{value}</a></li>];
						categoriesArr = [categoriesArr, ...elemArr]
						setCategoriesList([ ...categoriesArr])
			})
		})
	}


	return (
			<ul className='menu__list'
			onClick={onCategory}>
				{categoriesList}
			</ul>
	)
}

export default Categoties;