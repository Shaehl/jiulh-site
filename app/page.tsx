import ClientHome from '@/app/client';

const Home = () => {
	return (
		<ClientHome birthdate={new Date(2004, 2, 9)} />
	)
}

export default Home;