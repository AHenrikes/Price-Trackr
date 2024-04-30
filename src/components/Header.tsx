'use client'
import { UserButton } from '@clerk/clerk-react'
import { SignedIn, SignInButton, SignUpButton, SignedOut } from '@clerk/nextjs'
import React from 'react'

export default function Header() {

  return (
    <>
      <form action="search" className='flex items-center justify-center'>
        <input type="text" placeholder='Search' />
      </form>

      <nav className='flex items-center justify-end gap-5 pr-5'>
        <SignedOut>
          <SignInButton />
          <SignUpButton />
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </nav>
    </>
  )
}
