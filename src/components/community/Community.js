import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import useStore from '../../services/StoreService';

const Community = ({status}) => {

	const [communityList, setCommunityList] = useState ()

	const {getAllUsers} = useStore()

	useEffect(() => {
		createCommunityContent();
	}, [status])

	const createCommunityContent = () => {
		getAllUsers()
		.then((e) =>{
			let communityArr = []
			e.users.forEach((user) => {
				
				const userArr = [
					<div className="oneuser" key={uuidv4} data-id={user.id}>
						<figure>
							<img className="userimg" src={user.image} alt="user" />
							<figcaption>{user.username}</figcaption>
						</figure>
						<section className='maininfo'>
							<p>{user.firstName}</p>
							<p>{user.lastName}</p>
							<p>{user.maidenName}</p>
							<p>years: {user.age}</p>
							<p>birth-date:<br />{user.birthDate}</p>
						</section>
						<section className='careerinfo'>
							<p>university:<br />{user.university}</p>
							<p>company:<br />{user.company.name}</p>
							<p>position:<br />{user.company.title}</p>
						</section>
						<section className='contactinfo'>
							<p>phone:<br />{user.phone}</p>
							<p>email:<br />{user.email}</p>
							<p>address:<br />{user.address.address}</p>
							<p>city:<br />{user.address.city}</p>
							<p>postalCode:<br />{user.address.postalCode}</p>
							<p>state:<br />{user.address.state}</p>
						</section>
					</div>
				]
				communityArr = [communityArr, ...userArr]
				setCommunityList([ ...communityArr])
			})
			})
		}

	return (
		<div className="community">
			<div className="community__container">
				<div className="close" onClick={status}>✖</div>
				{communityList}
			</div>
		</div>
	)
}

export default Community;