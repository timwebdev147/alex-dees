// // import logo from '../img/logo.png'
// import  Link  from "next/link";
// import { useState } from 'react';
// import { useEffect } from 'react';
// // import FaBars from '@mui/icons-material/Dehaze';
import {FaBars} from 'react-icons/fa'
import logo from '../public/images/logo.png';
import styles from '../styles/navbar.module.scss'

import Image from "next/image";
import Link from 'next/link';
import { useState } from 'react';

const Navbar = (props) => {

    const navMenu = [
        {
            id: 1,
            link: '/',
            menu: 'home'
        },
        // {
        //     id: 2,
        //     link: '/about',
        //     menu: 'about'
        // },
        {
            id: 3,
            link: '/services',
            menu: 'services'
        },
        {
            id: 4,
            link: '/recent-work',
            menu: 'testimonials'
        },
        {
            id: 5,
            link: '/contact',
            menu: 'contact us'
        },
    ]

    const [dropDown, setDropDown] = useState(false)
    function onDropDown(){
        const con = document.getElementsByClassName('listContainer');
        if(dropDown == false){
            setDropDown(true)
        }
        else{

            setDropDown(false)
        }

        console.log(dropDown);
    }



    return (
        <>
            <nav className={styles.nav}>
                <Image src={logo} alt="Alex D's" className={styles.logo} />
                <hr />

                    <button className={styles.triggerDropdown} onClick={() => onDropDown()}>
                        <FaBars/>
                    </button>
                <ul className={dropDown == true ? styles.show: null}>
                    {
                        navMenu.map((list) => (
                            <li key={list.id}><Link href={list.link}>{list.menu}</Link></li>
                        ))
                    }
                </ul>
            </nav>
        </>
    )
  }


export default Navbar;