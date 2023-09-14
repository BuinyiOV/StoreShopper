import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import useStore from '../../services/StoreService';

const Publications = ({status}) => {

	const [publicationsList, setPublicationsList] = useState ()

	const {getAllPosts} = useStore()

	useEffect(() => {
		createPublicationsContent();
	}, [status])

	const createPublicationsContent = () => {
		getAllPosts()
		.then((e) =>{
			let publicationsArr = []
			e.posts.forEach((post) => {
				
				const postArr = [
					<article className="onepost" key={uuidv4} data-id={post.id}>
						<h2>{post.title}</h2>
						<div className='postbody'>
							<p>{post.body}</p>
						</div>
					</article>
				]
				publicationsArr = [publicationsArr, ...postArr]
				setPublicationsList([ ...publicationsArr])
			})
			})
		}

	return (
		<div className="publications">
			<div className="publications__container">
				<div className="close" onClick={status}>✖</div>
				{publicationsList}
			</div>
		</div>
	)
}

export default Publications;