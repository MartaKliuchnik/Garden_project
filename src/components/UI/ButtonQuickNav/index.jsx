import React from 'react';
import s from './style.module.sass';
import { ArrowUpOutlined } from '@ant-design/icons';

export default function ButtonQuickNav() {
	return (
		<a href='#top'>
			<button className={s.btn_quick_nav}>
				<ArrowUpOutlined />
			</button>
		</a>
	);
}
