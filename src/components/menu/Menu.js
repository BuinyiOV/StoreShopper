
const Menu = ({section}) => {

	const btn = document.querySelector('.filters')


	return (
		<nav className='menu'>
			<section className="btn btn__menu" data-section="Categories"
				onClick={section}>Categories
				<ul className='menu__list'>
					<li className='menu__item'><a href="#">Category 1</a></li>
					<li className='menu__item'><a href="#">Category 2</a></li>
					<li className='menu__item'><a href="#">Category 3</a></li>
					<li className='menu__item'><a href="#">Category 4</a></li>
				</ul>
			</section>
			<section className="btn btn__menu" data-section="Filters"
				onClick={section}>Filters</section>
			<section className="btn btn__menu" data-section="Community"
				onClick={section}>Community</section>
			<section className="btn btn__menu" data-section="Publications"
				onClick={section}>Publications</section>
			<section className="btn btn__menu" data-section="Basket"
				onClick={section}>Basket</section>
		</nav>
	)
}

export default Menu;