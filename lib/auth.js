import axios from "axios"

export default async function Auth(token) {
    if (token) {

        let URL = `${process.env.NEXT_PUBLIC_API}/auth`
        let config = { headers: JSON.stringify({ 'Access-Control-Allow-Origin': '*', token }), mode: 'cors', }
        // let { data } = await axios.get(URL, config)
        // console.log(data);
        return true
        // return data?.ok ? true : false
    }
    else return false
}
export async function AuthServerSide(ctx, redirect, fun) {
    let { NEXT_PUBLIC_API } = process.env
    let { cookies, query, config, token } = SSRctx(ctx)
    let auth = await Auth(token)
    console.log({ auth });
    if (auth) {
        try {
            if (typeof fun === 'function') {
                let data = await fun({ cookies, query, config, NEXT_PUBLIC_API })
                return { props: { ...data, config } }
            }
        } catch (err) {
            let res = { redirect: { permanent: false, destination: redirect } }
            return res
        }
    } else {
        let res = { redirect: { permanent: false, destination: '/auth' } }
        return res
    }
}
export function SSRctx(ctx) {
    let { cookies } = ctx.req
    let query = ctx.query
    let { token } = cookies
    let config = { headers: { token } }
    return { cookies, token, query, config }
}
export function open(q) {
    document.querySelector(q).classList.toggle('none')
}
