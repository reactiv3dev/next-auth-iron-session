import { getSession } from '@/server/actions'
import { redirect } from 'next/navigation';
import React from 'react'

async function PremiumPage() {
  const session = await getSession();
  if(!session.isLoggedIn) redirect("/")

  if(!session.isPremium){
    return (
      <section>
        <h1 className="text-5xl font-bold">Welcome to Premium Page</h1>
        <p className="text-3xl">Page is visible to subscribed user. Subscribe to Premium and return.</p>
    </section>
    )
  }
  return (
    <section>
        <h1 className="text-5xl font-bold">Welcome {session.username}</h1>
        <p className="text-3xl">You are Premium user thats why You see this page.</p>
    </section>
  )
}

export default PremiumPage