import axios from "axios";
import { Alert } from "theme/alert";
import { AuthServerSide } from "lib/auth";
import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { FormApp } from "components/apps/form";
import { Title, About, Info } from "components/apps/boxs";

export async function getServerSideProps(ctx) {
    return await AuthServerSide(ctx, '/admin/files',
        async ({ NEXT_PUBLIC_API, query, config }) => {
            let URL = `${NEXT_PUBLIC_API}/files/${encodeURI(query.file)}`
            let { data } = await axios.get(URL, config);
            return { data, config }
        })
}
export default function Admin({ data: propsData, config }) {
    let route = useRouter();
    let [data, setData] = useState({ mode: 'pro', url: '-', ...propsData })
    const setChange = (e) => {
        setData({ ...data, [e.target?.name]: e.target?.value })
    }

    return (
        <div>
            <Head>
                <title>تطبيق {data.name}</title>
            </Head>
            <div className="box grid center" onChange={setChange}>
                {/*[ title , send ]*/}
                <FormApp
                    data={data}
                    setChange={setChange}
                    config={config}

                    Send={async (e) => {
                        e.preventDefault()
                        let { data: res } = await axios.post(`${process.env.NEXT_PUBLIC_API}/apps`, data, config)
                        if (res.ok) {
                            Alert('تم حفظ التطبيق بنجاح')
                            route.push('/admin/apps/' + data.url)
                        }
                    }} />
                <div className="w-15">
                    <Title data={data} cat={false} />
                    <About data={data} />
                    <Info data={data} />
                </div>
            </div>
        </div >
    )
} 