import axios from "axios";
import { Alert } from "theme/alert";
import { AuthServerSide } from "lib/auth";
import { useState } from "react";
import { useRouter } from "next/router";
import { CloudUploadOutline } from "react-ionicons";
import PageApp from "pages/apps/[app]";
import Config from "lib/config";
import { FormApp, Versions } from "components/apps/form";
let Licon2 = '30px'
import AppBoxs from "components/apps/boxs";

export async function getServerSideProps(ctx) {
    return await AuthServerSide(ctx, '/admin/apps', async (res) => {
        let URL = `${res.NEXT_PUBLIC_API}/apps/${encodeURI(res.query.app)}`
        let { data } = await axios.get(URL, res.config);
        return { ...res, data }
    })
}
export default function AdminApp({ data: propsData, config }) {
    let route = useRouter();
    let [data, setData] = useState(propsData)
    function setChange(e) {
        let object = { ...data, [e.target.name]: e.target.value }
        if (e.target.name === 'images') console.log(e.target.value);
        setData(object)
        return
    }
    return (
        <div>
            <div className="box grid center">
                {/*[ title , send ]*/}
                <div>
                    <FormApp
                        data={data}
                        setChange={setChange}
                        config={config}
                        Send={(e) => {
                            e.preventDefault()
                            console.log(data.images);
                            axios.put(`${process.env.NEXT_PUBLIC_API}/apps/${route.query.app}`, data, Config())
                                .then(res => {
                                    Alert('تم حفظ التطبيق بنجاح')
                                    route.push('/admin/apps')
                                })
                        }}
                    />
                    <Versions data={data.versions} config={config} />
                </div>
                <div className="w-15">

                    <AppBoxs.Title data={data} />
                    <AppBoxs.Gallery data={data} />
                    <AppBoxs.About data={data} />
                    <AppBoxs.Versions data={data} />
                </div>
            </div>
        </div>
    )

} 