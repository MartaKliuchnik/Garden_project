import React from 'react';
import picture from '../Category/media/category_1.png';
import s from './style.module.sass';
import { Link } from 'react-router-dom';

export default function Category({ id, title, type }) {
	const link = `categories/${id}`;

	return (
		<Link to={link} className={[s.category_container, s[type]].join(' ')}>
			<div className={s.photo_category_container}>
				<img src={picture} alt='photo_category' />
			</div>
			<p>{title}</p>
		</Link>
	);
}
