import { changePremium, getSession } from '@/server/actions'
import { redirect } from 'next/navigation';
import React from 'react'

async function ProfilePage() {
  const session = await getSession();

  if(!session.isLoggedIn) redirect("/login")
  return (
    <section>
        <h1 className="text-5xl font-bold">Welcome to Profile page: {session.username}</h1>
        <p>Page is visible to logged in user</p>
        <p className='text-3xl'>You are a {session.isPremium ? <strong className='text-green-500'>Premium</strong>: <strong className='text-yellow-500'>Free</strong> } user.</p>
        <form action={changePremium}>
          <button className='bg-gray-600 rounded-lg p-3'>{session.isPremium ? "Cancel": "Buy"} Premium</button>
        </form>
    </section>
  )
}

export default ProfilePage