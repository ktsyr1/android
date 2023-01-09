
export default function Auth({ token }) {
    if (token) return true
    else return false
}
export async function AuthServerSide(ctx, redirect, fun) {
    let { NEXT_PUBLIC_API } = process.env
    let { cookies, query, config } = SSRctx(ctx)
    if (Auth(cookies)) {
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
