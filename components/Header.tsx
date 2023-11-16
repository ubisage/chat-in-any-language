import React from 'react'
import Logo from './Logo'
import DarkModeToggle from './DarkModeToggle'
import UserButton from './UserButton'

const Header = () => {
  return (
    <header className='sticky top-0 bg-white dark:bg-gray-900 z-50'>
        <nav className='flex flex-col sm:flex-row items-center p-5 pl-2 bg-white dark:bg-gray-900 max-w-7xl mx-auto'>
            <Logo/>

            <div className='flex-1 flex items-center justify-end space-x-4'>

                {/* LAnguageSelect  */}

                {/* Session  */}

                {/* DarkmodeToggle  */}
                <DarkModeToggle/>

                {/* UserButton  */}
                <UserButton/>
            </div>
        </nav>

        {/* UpgradeBanner  */}
        </header>
  )
}

export default Header