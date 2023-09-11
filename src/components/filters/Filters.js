
const Filters = ({status}) => {

	return (
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
			<div className="filters__item"
			onClick={status}
			>
				<p className="filters__text filters__clear"
				>Clear filters</p>
			</div>
		</section>
	)
}

export default Filters;