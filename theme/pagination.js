import { useRouter } from "next/router"

export default function Pagination({ limit }) {
    let { query, push, asPath } = useRouter()
    let page = Number(query.p) + 1 || 2
    let URL = `${asPath.split('?')[0]}?p=`
    const Push = (p) => push(`${URL}${p - 1}`)
    return (
            <div className='box j aitem m-a w-full' style={{
                border: '2px solid#ddd',
                borderRadius: '10px',
                backgroundColor: '#fff',
                margin: '1rem auto',
                width: 'max-content',
                minWidth: '20rem'
            }}>
                {page > 2 ? <button className='btn ui diseble m w-10' onClick={() => Push(page - 1)} >السابق</button> : ''}
                <b> الصفحة {page -1}</b>
                {limit <= (page *10) ? <button className='btn ui m w-10' onClick={() => Push(page + 1)} > التالي</button> : ''}
            </div >
    )
}