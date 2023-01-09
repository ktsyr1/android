import axios from "axios";
// import { Alert } from "components/theme/alert";
import { AuthServerSide } from "lib/auth";
import Link from "next/link";
import { useRouter } from "next/router";
// import Image from "next/image"; 
import { Popconfirm, Table, Pagination } from 'antd';
import 'antd/dist/antd.css'
import { PencilOutline, TrashOutline } from "react-ionicons";
import SEO from "lib/SEO";
export async function getServerSideProps(ctx) {
    return await AuthServerSide(ctx, '/admin/', async (res) => {
        let { data } = await axios.get(`${res.NEXT_PUBLIC_API}/apps?p=${ctx.query.p ? ctx.query.p : 0}`, res.config);
        return { data, config: res.config }
    })
}

export default function Apps({ isadmin, data, config }) {
    let route = useRouter()

    function deleteOne(e) {
        axios.delete(`${process.env.NEXT_PUBLIC_API}/apps/${e}`, config)
        route.push(route.pathname)
    }
    return (
        <div>
            <SEO
                title='التطبيقات'
            />
            <div className='m'>
                <Table
                    dataSource={data.apps}
                    columns={[
                        {
                            title: 'اسم الملف', dataIndex: 'name', editable: true, width: '200px',
                            render: (_, record) => (
                                <Link href={`${route.pathname}/${encodeURI(record?.url)}`} >
                                    <a className="box row" >{record.name}</a>
                                </Link>
                            )
                        }, {
                            title: 'اسم الحزمة', dataIndex: 'package', editable: true, width: 120,
                            render: (_, record) => (
                                <Link href={`${route.pathname}/${encodeURI(record?.url)}`} >
                                    <a className="box row" >{record.package}</a>
                                </Link>
                            )
                        },
                        {
                            title: 'الاجرات', dataIndex: '', width: 60,
                            render: (_, record) => (
                                <div className="box row" >
                                    <Popconfirm title={"حدف هده العنصر"} onConfirm={() => deleteOne(record.url)}>
                                        <TrashOutline title={'Delete'} color={'#00000'} height="25px" width="25px" />
                                    </Popconfirm>
                                </div>
                            )
                        },
                    ]}
                    pagination={false}
                    bordered
                />
                <PaginationNew total={data.count} />
            </div>
        </div>
    )
}
export function PaginationNew(props) {
    let { query, push } = useRouter()
    const next = (e) => push({ query: { p: e } })
    return (
        <div className="m-auto p">
            <Pagination
                defaultCurrent={query.p ? query.p : 1}
                onChange={next}
                pageSize={10}
                size={10}
                // showTotal	={10}
                {...props}
            />
        </div>
    )
}