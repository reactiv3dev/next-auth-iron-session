"use server"

import { getSession, login } from '@/server/actions'
import { redirect } from 'next/navigation';
import React from 'react'
 

async function LoginForm() {
    const session = await getSession();
    if(session.userId) redirect("/profile")
  return (
    <form className="flex flex-col gap-4 justify-center items-center p-5 mt-5 w-[700px] h-[700px] " action={login}>
        <input className="w-full p-4 rounded-lg text-slate-900 " type="email" name="email" required placeholder="example@email.com" />
        <input className="w-full p-4 rounded-lg text-slate-900" type="password" name="password" required placeholder="password" />
        <button type='submit' className='bg-slate-700 w-full p-4 text-2xl rounded-lg hover:scale-105 active:scale-95'>Login</button>
    </form>
  )
}

export default LoginForm