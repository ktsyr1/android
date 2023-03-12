import Image from "next/image"
import Link from "next/link"
import { CheckmarkCircleOutline, CloseOutline } from "react-ionicons"

export default function Footer() {

    return (
        <footer className=" sh box col space aitem" style={{ backgroundColor: 'var(--colorDarkX)', color: 'var(--colorBGB)' }}>
            <div className="box grid w-full space sm-p md-p-5 p-5">
                <Lists
                    title='روابط سريعة.'
                    data={[
                        { title: 'الرئيسية', url: '/' },
                        { title: 'اتصل بنا', url: 'https://pesktop.com/contact' },
                        { title: 'عن الموقع', url: 'https://pesktop.com/about' },
                    ]}
                />
                <Lists
                    title='الأقسام الرئيسية'
                    data={[
                        { title: 'المتجر', url: 'https://pesktop.shop/' },
                        { title: 'الويندوز', url: 'https://pesktop.com/' },
                        { title: 'الماك', url: 'https://pesktop.com/mac' },
                        { title: 'الاندرويد', url: 'https://android.pesktop.com/' },
                        { title: 'انظمة تشغيل', url: 'https://pesktop.com/systems/' },
                    ]}
                />
                <div>
                    <Image
                        src={'/images/brind.png'}
                        width={248}
                        height={80}
                        alt='pasktop logo'
                        style={{ filter: 'grayscale(100%)' }}
                    />
                </div>
            </div>
            <div className='box p j w-full' style={{ direction: 'ltr', backgroundColor: 'var(--colorDark)' }}>
                <p className='p-0'>   2023 ©PeskTop جميع الحقوق محفوظة</p>
            </div>
        </footer>
    )
}

function Lists({ data = [], title }) {
    return (
        <div className='box col'>
            <b>{title}</b>
            {data.map((item, i) => (
                <Link href={item.url} key={i}><a className="p-1"> {item.title}</a></Link>
            ))}
        </div>
    )
}
