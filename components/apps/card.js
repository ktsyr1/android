import { MyLoder } from "lib";
import Link from "next/link";
import Image from "next/image";
import { BarChartOutline, CubeOutline, PricetagsOutline } from "react-ionicons";
import { motion, LazyMotion, domAnimation } from "framer-motion"
import Pagination from "theme/pagination";
import { PaginationNew } from "pages/admin/apps";
import { useEffect, useState } from "react";

// card 

function Card({ data }) {
    let wh = '100px'
    let Licon = data.name.length > 18 ? ' ...' : ''
    return (
        <LazyMotion features={domAnimation}>
            <motion.div
                className='box'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{ width: '180px' }}
            >
                <Link href={`/apps/${data?.url}`} >
                    <a className="box m col aitem ui p"  >
                        <Image src={data?.icon} alt='icon app' loader={MyLoder} width={wh} height={wh} />
                        <b style={{ wordBreak: 'break-word' }}>{data.name.slice(0, 20)}</b>
                    </a>
                </Link>
            </motion.div>
        </LazyMotion>
    )
}

export function GroupCard({ data }) {
    if (data.count > 0) {
        return (
            <div className='box col  space' style={{ minHeight: '30rem' }} >

                <div className='box grid j' style={{ maxWidth: '80rem', margin: '0 auto' }}>
                    {data?.apps?.map((app, i) => <Card key={i} data={app} />)}
                </div>
                {/* {data.length > 9 ? */}
                <Pagination limit={data.count} />
                {/* : ''} */}
            </div>
        )
    } else {
        return (
            <div className='box col aitem'>
                <BarChartOutline color={'#03c78c'} width={'200px'} height={'200px'} />
                <h1>لا توجد بيانات متاحة </h1>

            </div>
        )
    }
}
export function Category({ data, link = false }) {
    let Licon = '20px'
    let { category: Cat } = data
    let [Content, setContent] = useState(<p className="R-m"> {Cat} </p>)

    useEffect(() => {
        if (link) {
            if (typeof Cat === 'object') {
                let html =
                    Cat?.map(cat =>
                        <Link href={`/apps/cat/${cat}`} key={cat}><a>{cat}</a></Link>
                    )
                setContent(html)
            } else setContent(<p>{Cat}</p>)
        }
    })
    return (
        <div className="f-md box j j-start aitem" style={{ color: 'var(--colorUIX)', margin: '10px 0' }} >
            <PricetagsOutline color={'#000'} height={Licon} width={Licon} cssClasses='box aitem' />
            <div style={{ margin: '0 10px' }}>
                {Content}
                {/* <p>{Cat}</p> */}
            </div>
        </div>
    )
}
export default Card