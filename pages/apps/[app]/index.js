import axios from "axios";
import { MyLoder } from "lib";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion"
import SEO from "lib/SEO";
import { useRouter } from "next/router";
import AppTitle, { AppAbout, AppGallery, AppInfo, AppVersions } from "components/apps/boxs"
import AppBoxs from "components/apps/boxs";

// get static paths for all apps
export async function getStaticPaths() {
    let { data } = await axios.get(`${process.env.NEXT_PUBLIC_API || '/api'}/apps`);
    let paths = data.apps.map(App => ({ params: { app: App.url } }))
    return { paths, fallback: true }
}

// get static props
export async function getStaticProps(ctx) {
    let { data: newData } = await axios.get(`${process.env.NEXT_PUBLIC_API || '/api'}/apps/${encodeURI(ctx.params.app)}?v=${ctx.query?.v}`);
    let versions = newData?.versions
    let data = { ...newData, ...versions[0], versions }
    return { props: { data, type: true }, revalidate: 10 * 60 }
}

export default function PageApp({ data: propsData, type = false }) {
    let route = useRouter()
    let [data, set] = useState(propsData)
    useEffect(() => {
        if (!data) location.replace('/')
    })
    if (!data) {
        let title = 'الصفحة غير متوفرة'
        return (
            <div>
                <SEO title={title} />
                <h1>{title}</h1>
            </div>
        )
    } else {
        let { asPath } = route
        let icon = MyLoder(data?.icon);
        return (
            <AnimatePresence>
                <motion.div
                    transition={{ duration: 0.5 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="box grid w-full"
                >
                    <SEO
                        title={data?.title}
                        description={data?.des}
                        canonical={asPath}
                        image={icon}
                    />
                    <div className="box col m" style={{ maxWidth: '50em' }}>
                        <AppBoxs.Title data={data} type={type} />
                        <AppBoxs.Share title={data.title} />

                        <AppBoxs.Gallery data={data} />
                        <AppBoxs.About data={data} />
                    </div>
                    {/* [info ,varsions] */}
                    <div className="box col m w-full" style={{ maxWidth: '20em' }}>
                        <AppBoxs.Info data={data} />
                        <AppBoxs.Versions data={data} type={type} set={(e) => set({ ...data, ...e })} />
                    </div>
                </motion.div>
            </AnimatePresence>
        )
    }

}

// title 