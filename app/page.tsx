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
			<h1 className='pt-12 tracking-[-0.1em] text-6xl uppercase text-black font-bold'>
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
					className='h-80 w-80 object-contain'
				/>
			</div>
			{/* UPCOMING EVENT DETAILS */}
			<div className='flex flex-col items-center my-4'>
				<p className='text-black font-medium'>NEXT LINK</p>
				<p className='text-black font-medium'>Dodgeball</p>
				<p className='text-black font-medium'>May 18</p>
				<p className='text-black font-medium'>NYC</p>
			</div>
			{/* REGISTER FOR EVENT FORM */}
			<form>
				<input type='email' className='bg-white' />
				<div className='text-center'>
					<button
						className='mt-2 text-black font-medium text-2xl tracking-[-0.07em]'
						type='submit'
					>
						RSVP
					</button>
				</div>
			</form>
			<h1 className='pt-12 tracking-[-0.1em] text-6xl uppercase text-black font-bold'>
				no routine
			</h1>
		</main>
	);
}
