import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import A from '../components/A';
import MainContainer from '../components/MainContainer';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<MainContainer keywords={'main page'}>
			<h1>Главная страница</h1>


			{/*<div className='navbar'>
					<A href='/' text='Главная'></A>
					<A href='/users' text='Пользователи'></A>
					 <Link href='/'>
					<a>Главная</a>
				</Link>

				<hr />
				<Link href='/users'>
					<a>Пользователи</a>
				</Link>
				</div> */}
		</MainContainer>
	);
}
