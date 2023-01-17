import React from 'react'
import { Link } from 'react-router-dom'
import GitHub from '@material-ui/icons/GitHub'
import Instagram from '@material-ui/icons/Instagram'
import LinkedIn from '@material-ui/icons/LinkedIn'
import '../Styles/footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className='socialMedia'>
                <a href='https://github.com/PraneethKolloju/'><GitHub /></a>
                <a href='https://www.instagram.com/'><Instagram /></a>
                <a href='https://www.linkedin.com/in/praneeth-kolloju-0443a7195/'><LinkedIn /></a>
            </div>
            <p>&copy; 2023 Praneeth Kolloju</p>
        </div>
    )
}

export default Footer