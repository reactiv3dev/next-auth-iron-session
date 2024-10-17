import LoginForm from '@/components/LoginForm'
import React from 'react'

function LoginPage() {
  return (
    <section className='w-full h-full flex flex-col justify-center items-center'>
        <h1 className="text-5xl font-bold">Welcome to Login Page</h1>
        <p>Page is visible to logged out user</p>
        <LoginForm/>
    </section>
  )
}

export default LoginPage