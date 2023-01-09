import { Alert } from "theme/alert";
import Auth, { AuthServerSide } from "lib/auth";
import Link from "next/link";
import { useEffect } from "react";
let list = [
    { name: 'الملفات', link: '/admin/files' },
    { name: 'التطبيق', link: '/admin/apps' },
    { name: 'البحث', link: '/admin/search' },
]
export async function getServerSideProps(ctx) {
    return await AuthServerSide(ctx, '/', () => {
        return { list }
    })
}

export default function Admin({ list }) {
    useEffect(() => {
        Alert(' لوحة التحكم محسنة ومدعومة بروبوت يساعد في العمل و المعالجة')
    })
    return (
        <div> 
            <h1 className="box j-col ui">لوحة التحكم </h1> 
            <div className="box grid">
                {list.map((item, index) => {
                    return (
                        <Link href={item.link} key={index}>
                            <a className="box center">
                                <div className="box j-col ui w-15 ">
                                    <span>{item.name}</span>
                                </div>
                            </a>
                        </Link>
                    )
                }
                )}
            </div>

        </div>
    )

} 