import axios from "axios";
import { Alert } from "theme/alert";
import Auth, { AuthServerSide } from "lib/auth";
import { useRouter } from "next/router";
import { PencilOutline, TrashOutline } from "react-ionicons";
import { Popconfirm, Table } from 'antd';
import 'antd/dist/antd.css'
import Link from "next/link";
import SEO from "lib/SEO";
import { useState } from "react";

export async function getServerSideProps(ctx) {
    return await AuthServerSide(ctx, '/admin',
        async ({ NEXT_PUBLIC_API, query, config }) => {
            let { data } = await axios.get(`${NEXT_PUBLIC_API}/files`, config);
            return { data, config }
        })

}

export default function Admin({ data: dataProps, config }) {
    let [data, setData] = useState(dataProps)
    let route = useRouter();
    let Licon2 = '40px'
    function upload() {
        let formData = new FormData();
        formData.append('file', document.querySelector('[name="file"]')?.files[0]);
        axios.post(`${process.env.NEXT_PUBLIC_API}/apk`, formData, config)
            .then(res => {
                route.push('/admin/files')
                Alert("تم رفع الملف " /*+ res.data.originalname  */)
            })
            .catch(err => console.log(err))
    }
    function deleteAll() {
        axios.delete(`${process.env.NEXT_PUBLIC_API}/files`, config)
            .then(res => {
                route.push('/admin/files')
                Alert("تم مسح جميع الملفات التي تحت المعالجة")
            })
            .catch(err => console.log(err))
    }
    function deleteOne(e) {
        // console.log(data);
        let filter = data?.filter(a => e !== a.name)
        // console.log(filter);
        setData(filter)
        axios.delete(`${process.env.NEXT_PUBLIC_API}/files/${e}`, config)
            // .then(({ data }) => data.status ? route.push(route.pathname) : '')
    }
    return (
        <div>
            <SEO
                title="الملفات تحت المعالجة"
            />
            <div className="box aitem space ui grid">
                <h1>الملفات تحت المعالجة</h1>
                <div className="box j">
                    <input className="ui btn" type="file" name="file" onChange={upload} accept='apk' multiple />
                    <button className="btn m" onDoubleClick={deleteAll}>حدف كل الملفات</button>
                </div>
            </div>
            <div className='m'>
                <Table
                    dataSource={data}
                    columns={[
                        {
                            title: 'اسم الملف', dataIndex: 'name', editable: true,

                            render: (_, record) => (
                                <Link href={`${route.pathname}/${encodeURI(record?.name)}`} >
                                    <a className="box row" >{record.name}</a>
                                </Link>
                            )
                        },
                        {
                            title: 'الاجرات', dataIndex: '',
                            render: (_, record) => data.length >= 1 ? (
                                <div className="box row" >
                                    <div style={{ margin: '0 10px' }}  >
                                        <PencilOutline title={'Delete'} color={'#00000'} height="25px" width="25px" />
                                    </div>
                                    <Popconfirm title={"حدف هده العنصر"} onConfirm={() => deleteOne(record.name)}>
                                        <TrashOutline title={'Delete'} color={'#00000'} height="25px" width="25px" />
                                    </Popconfirm>
                                </div>
                            ) : null
                        },
                    ]}
                    pagination={false}
                    bordered
                />
            </div>
        </div>
    )
}
