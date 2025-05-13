import { signIn, signUp } from '@/serverActions/users';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Signout from './components/signout';
import GoogleSignInButton from './components/googleSignIn';
import Image from 'next/image';
export default async function Home() {
	// const session = await auth.api.getSession({
	// 	headers: await headers()
	// });
	const navItems = [
		'/images/home_link.jpg',
		'/images/about_link.jpg',
		'/images/events_link.jpg',
		'/images/contact_link.jpg'
	];
	return (
		<main className='flex flex-col items-center'>
			<h1 className='pt-12 text-6xl uppercase text-black font-bold'>
				no routine
			</h1>
			<div className='flex flex-col my-4'>
				{navItems.map((item) => (
					<a className='uppercase text-center' key={item}>
						<Image
							src={item}
							alt='nav_item'
							height={100}
							width={100}
							priority
							className='h-8 w-24 object-contain'
						/>
					</a>
				))}
			</div>
			{/* UPCOMING EVENT IMAGE */}
			<div>
				<Image
					src='/images/may_18_event.jpg'
					alt='event_image'
					// fill
					height={100}
					width={100}
					priority
					className='h-24 w-24 object-contain'
				/>
			</div>
			{/* UPCOMING EVENT DETAILS */}
			<div>
				<p>EVENT TITLE</p>
				<p>EVENT DATE</p>
				<p>EVENT LOCATION</p>
			</div>
			{/* REGISTER FOR EVENT FORM */}
			<form>
				<input type='email' className='bg-white' />
				<div>
					<button type='submit'>RSVP</button>
				</div>
			</form>
		</main>
	);
}
