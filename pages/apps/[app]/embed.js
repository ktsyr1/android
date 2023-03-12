
import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'
import { useRouter } from "next/router"
import Head from 'next/head'
// import Image from 'next/image';
// import { MyLoder } from 'lib';
import { CopyOutline, ServerOutline } from 'react-ionicons';


// get static paths for all apps
export async function getStaticPaths() {
    let { data } = await axios.get(`${process.env.NEXT_PUBLIC_API || '/api'}/apps`);
    let paths = data.apps.map(App => ({ params: { app: App.url } }))
    return { paths, fallback: true }
}

// get static props
export async function getStaticProps(ctx) {
    let { data } = await axios.get(`${process.env.NEXT_PUBLIC_API || '/api'}/apps/${encodeURI(ctx.params.app)}?v=${ctx.query?.v}`);
    return { props: { data }, revalidate: 10 * 60 }
}
export default function Embed({ data }) {
    let route = useRouter()

    useEffect(() => {
        let { innerWidth, innerHeight } = window
        if (innerWidth === 390 && innerHeight === 220) { }
        else route.push(route.asPath.replace('/embed', ''))

    })
    let version = data?.versions[0]
    function Icon({ title, Tag }) {
        return (
            <div className='R-m box row' >
                <Tag color={'#03c78c'} width={'20px'} height={'20px'} />
                <p className="R-m m-0 mx-0 mx-2">{title}</p>
            </div>
        )
    }
    return (
        <div className='box row aitem'>
            <Head >
                {/* <link rel="canonical" href={url} /> */}
            </Head>
            <div style={{ width: 80, height: 80 }}>

                {/* <Image
                    src={data?.icon}
                    loader={MyLoder}
                    width={80}
                    height={80}

                    alt={'ايقونة تطبيق ' + data?.name}
                /> */}
            </div>
            <div className='box col m'>
                <h1 style={{ fontSize: 'larger', padding: '10px', margin: '0' }}>
                    {data?.name}
                </h1>

                <Icon title={version?.data.versionName} Tag={CopyOutline} />
                <Icon title={version?.size} Tag={ServerOutline} />

                <a
                    href={`${process.env.NEXT_PUBLIC_API.replace('/api', '')}/download/${version?.path}`}
                    className="btn w-12 sm-w-full sh"
                    style={{ fontSize: 'larger' }}
                >تحميل مباشر </a>
            </div>
        </div>
    )
}
