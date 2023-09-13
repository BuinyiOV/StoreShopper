import Categoties from "../categories/Categories";
const Menu = ({section, onCategory}) => {

	return (
		<nav className='menu'>
			<section className="btn btn__menu" data-section="Categories"
				onClick={section}>Categories
				<Categoties
					onCategory={onCategory}/>
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