import Link from 'next/link'
import React from 'react'
import LogoutForm from './LogoutForm'
import { getSession } from '@/server/actions';

async function NavBar() {
  const session = await getSession();

  console.log(session);
  return (
    <nav className='flex flex-row justify-between w-[1200px] m-auto p-10 text-2xl'>
        <Link href="/">Home</Link>
        <Link href="/premium">Premium</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/login">Login</Link>
        { session.isLoggedIn && <LogoutForm/>}
    </nav>
  )
}

export default NavBar