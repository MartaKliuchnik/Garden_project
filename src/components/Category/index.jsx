import React from 'react';
// import picture from '../Category/media/category_1.png';
import s from './style.module.sass';
import { Link } from 'react-router-dom';

export default function Category({ id, title, image, type }) {
	const link = `categories/${id}`;

	const img_link = `http://localhost:3333/${image}`;

	return (
		<Link to={link} className={[s.category_container, s[type]].join(' ')}>
			<div className={s.photo_category_container}>
				{/* <img src={picture} alt='photo_category' /> */}
				<img src={img_link} alt={title} />
			</div>
			<p>{title}</p>
		</Link>
	);
}
