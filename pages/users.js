import Link from 'next/link';
import A from '../components/A';
import Head from 'next/head';
import MainContainer from '../components/MainContainer';

const Users = ({ users }) => {
	/* const [users, setUsers] = useState([
		{ id: 1, name: 'petya' },
		{ id: 2, name: 'vasya' },
	]); */

	/* useEffect(async () => {
		const res = await fetch('https://jsonplaceholder.typicode.com/users');
		const data = await res.json();
		setUsers(data);
	}, []);
 */
	return (
		<MainContainer keywords={'users next js'}>
			{/* <div className='navbar'>
				<Link href='/'>
					<a>Главная</a>
				</Link>

				<Link href='/users'>
					<a>Пользователи</a>
				</Link>
			</div> */}
			<div>
				<h1>Список пользователей</h1>
				<ul>
					{users.map(user => (
						<li key={user.id}>
							<Link href={`/users/${user.id}`}>
								<a>{user.name}</a>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</MainContainer>
	);
};

export default Users;

export async function getStaticProps(context) {
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	const users = await res.json();
	return {
		props: { users },
	};
}
