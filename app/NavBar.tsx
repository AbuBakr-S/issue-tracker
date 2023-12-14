'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { AiFillBug } from "react-icons/ai";
import classnames from 'classnames';

const NavBar = () => {
    const links = [
        { label: 'Dashboard', path: '/' },
        { label: 'Issue', path: '/issues' }
    ]

    const currentPath = usePathname();

  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
        <Link href="/"><AiFillBug className='dark:text-black' /></Link>
        <ul className='flex space-x-6'>
            {
                links.map(link => (
                    <Link 
                        key={link.path}
                        className={classnames({
                            // pass in one or more key (css class) value (boolean) pairs
                            'text-zinc-900': link.path === currentPath,
                            'text-zinc-500': link.path !== currentPath,
                            'hover:text-zinc-800 transition-colors': true
                        })} 
                        href={link.path}
                    >
                        {link.label}
                    </Link>
                ))
            }
        </ul>
    </nav>
  )
}

export default NavBar