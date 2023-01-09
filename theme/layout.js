
import NavBar from "./nav";
import Alert from "./alert";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import { AppsOutline, FileTrayFullOutline, GridOutline, LinkOutline, MenuOutline, SearchOutline } from "react-ionicons";
import Footer from "./footer";
// import Image from "next/image";


export default function Layout({ children }) {
    let route = useRouter()
    let [title, setTitle] = useState('')
    useEffect(() => {
        let title = document.title
        setTitle(title)
    })

    if (route.asPath.slice(0, 6) === "/admin") {
        let list = [

            { name: 'لوحة التحكم', link: '/admin', icon: GridOutline },
            { name: 'الملفات', link: '/admin/files', icon: FileTrayFullOutline },
            { name: 'التطبيقات', link: '/admin/apps', icon: AppsOutline },
            // { name: 'البحث', link: '/admin/search', icon: SearchOutline },
            { name: 'عرض الموقع', link: '/', icon: LinkOutline },
        ]
        let Licon = '55px'

        return (
            <div className='box row'>
                <div className="box col scroll w-12 ui menu_admin" style={{ minWidth: '230px' }}>
                    <img
                        // width={'100px'}
                        // height={'100px'}
                        src={'/images/logo.png'}
                        alt='icon pesktop android '
                        style={{ backgroundColor: 'var(--colorUI)', borderRadius: '50%', width: '100px', height: '100px', margin: '0 auto', }}
                    />
                    <b style={{ textAlign: 'center' }}>Pesktop Android</b>
                    {list.map((item, index) => {
                        let Icon = item.icon
                        return (
                            <Link href={item.link} key={index}>
                                <a className="box p ">
                                    <Icon color={'#03c78c'} height={'30px'} width={'30px'} />
                                    <p className="aitem box" style={{ margin: '0 10px', color: 'var(--colorUI)' }}> {item.name}</p>
                                </a>
                            </Link>

                        )
                    })}

                </div>
                <div className='w-full'>
                    <div className="sh box row aitem p" >
                        <MenuOutline color={'#01875f'} height={Licon} width={Licon} onClick={
                            () => document.querySelector('.menu_admin').classList.toggle('none')
                        } />

                        <h1 className='R-m '>{title}</h1>
                    </div>
                    <Alert />
                    <article>{children}</article>
                </div>
            </div>
        )
    } else {
        return (
            <>
                <NavBar />
                <Alert />
                <section >{children}</section>
                <Footer />
            </>
        )
    }
}
// * /