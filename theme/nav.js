import Link from "next/link"
import { MenuOutline, GridOutline, LogoAndroid, LogoWindows, LogoApple, DiscOutline, SearchOutline, PlayBackOutline, CloseOutline, LogInOutline } from "react-ionicons";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Alert } from "./alert";
import { Input } from "./forms";
import { Router, useRouter } from "next/router";

export default function Nav() {
    let Licon = '55px'
    let Licon2 = '40px'
    let { push } = useRouter()
    let [Admin, setAdmin] = useState({ url: '/auth', icon: LogInOutline })
    useEffect(() => {
        // get document.cookie token 

        let cookie = document.cookie
        let token = cookie.split("; ").find(item => item.startsWith("token="))
        if (token?.length > 50) setAdmin({ url: '/admin', icon: GridOutline })

    })
    function open() {
        document.querySelector('.menu').classList.toggle('sm-none')
    }
    function openSearch() {
        document.querySelector('.searchbox').classList.toggle('mdd-none')
        document.querySelector('.searchbtn').classList.toggle('ss')
        document.querySelector('.lists').classList.toggle('none')
        document.querySelector('.btnMenu').classList.toggle('sm-none')
    }
    function search(e) {
        e.preventDefault()
        let query = document.querySelector('[name="search"]').value
        document.querySelector('[name="search"]').value = ''
        if (document.body.offsetWidth < 850) openSearch()
        push('/search?q=' + encodeURI(query))
    }
    return (
        <nav className='sm-p-1'>
            {/* menu icon */}
            <div className='sm-box none btnMenu' onClick={open}>
                <MenuOutline color={'#fff'} height={Licon} width={Licon} />
            </div>

            <div className="box row sm-col bg-dark center lists" >
                {/* logo */}
                <Logo />
                {/* menu */}
                <div className='box sm-none sm-col sm-pup bg-dark sm-top-6 sm-right-0 sm-w-15 menu '>
                    {[
                        { url: '/', Icon: LogoAndroid, color: '#03c78c' },
                        { url: 'https://pesktop.com', Icon: LogoWindows },
                        { url: 'https://pesktop.com/mac', Icon: LogoApple },
                        { url: 'https://pesktop.com/systems', Icon: DiscOutline },
                    ].map(({ url, Icon, color = '#fff' }) => (
                        <Link href={url} key={url}>
                            <a>
                                <Icon color={color} height={Licon2} width={Licon2} />
                            </a>
                        </Link>
                    ))}
                    <Link href={Admin.url}>
                        <a >
                            <Admin.icon color={'#fff'} height={Licon2} width={Licon2} />
                        </a>
                    </Link>
                </div>
            </div>
            {/* search */}
            <div className='searchbox box row bor aitem space mdd-none m-auto' style={{
                minWidth: '350px',
                backgroundColor: 'var(--colorDark)',
                // padding: '0 10px'
            }} >
                <CloseOutline color={'#fff'} height={'30px'} width={'30px'} cssClasses='m-1 mdd none' onClick={openSearch} />

                <input name='search' type='search' className="w-full R bor" style={{
                    backgroundColor: 'var(--colorDark)',
                    border: '0',
                    height: '2.5rem',
                    color: 'var(--colorBG)', fontSize: 'medium'
                }} onKeyUp={(e) => {
                    console.log(e.keyCode);
                    if (e.keyCode === 13) {

                        e.preventDefault();
                        return document.querySelector('.searchbox .send')?.click()
                    }
                }} />
                <div className='R send' onClick={search} >
                    <SearchOutline color={'#fff'} height={'30px'} width={'30px'} cssClasses='m-1' />
                </div>
            </div>

            <SearchOutline cssClasses={'m searchbtn ss none'} color={'#fff'} height={Licon2} width={Licon2} onClick={openSearch} />

        </nav>
    )
}
function Logo() {
    let style = { display: 'flex', alignItems: 'center', color: '#fff', fontSize: 'larger', }
    return (
        <Link href="/">
            <a >
                {/* <b style={{ margin: "10px" }}>Android </b>
                <b>eskTop </b> */}
                <Image src="/images/logo.png" width="50" height="50" alt="logo pesktop" />
            </a>
        </Link>
    )
}