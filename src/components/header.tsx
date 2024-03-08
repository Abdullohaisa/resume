import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
   <div className="main-header">
     <div className='header'>
     <Link className='Link' href={'/'}> <p>Abdulloh</p></Link>
      <ul>
        <li><Link className='Link' href={'/aboutme'}>About me</Link></li> |
        <Link className='Link' href={'/myProject'}><li>My project</li></Link>
      </ul>
    </div>
   </div>
  )
}

export default Header
