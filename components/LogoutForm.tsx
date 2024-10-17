import { logout } from '@/server/actions'
import React from 'react'

function LogoutForm() {
  return (
    <form action={logout}>
        <button>LogOut</button>
    </form>
  )
}

export default LogoutForm