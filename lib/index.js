
export default function Lib() { return }
/**
 * 
 * @param {e} e URL || path
 * @returns 
 */
export function MyLoder(e) {
    let src = e?.src ? e.src : e
    if (!String.prototype.replaceAll) {
        String.prototype.replaceAll = function (oldValue, newValue) {
            return this.split(oldValue).join(newValue);
        };
    } else src = src.replaceAll('\\', '/')

    if (src?.includes('http')) return src
    else return `${process.env.NEXT_PUBLIC_API?.slice(0, -4)}${src}`
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
export async function GET(URL, config) {
    let { data } = await axios.get(`${process.env.NEXT_PUBLIC_API}${URL}`, config)
    return data
}