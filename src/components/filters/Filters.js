
const Filters = ({status, sorting, onChange}) => {

	const handleChange = (event) => {
		onChange(event.target.value)
	}

	return (
		<section className="filters">
			<div className="filters__item"
				onClick={sorting}>
				<p className="filters__text" data-sorting="price increase">price increase</p>
			</div>
			<div className="filters__item"
				onClick={sorting}>
				<p className="filters__text" data-sorting="price decreas">price decreas</p>
			</div>
			<div className="filters__item"
				onClick={sorting}>
				<p className="filters__text" data-sorting="rating increase">rating increase</p>
			</div>
			<div className="filters__item"
				onClick={sorting}>
				<p className="filters__text" data-sorting="rating decreas">rating decreas</p>
			</div>
			<div className="filters__item"
				onClick={sorting}>
				<p className="filters__text" data-sorting="sort by name">sort by name</p>
			</div>
			<div className="filters__item">
				<input type="text" id="searchfield" placeholder="Type to search..."
								className="filters__search"
								onChange={handleChange}/>
			</div>
			

			<div className="filters__item"
			onClick={status}>
				<p className="filters__text filters__clear"
				>Clear filters</p>
			</div>
		</section>
	)
}

export default Filters;