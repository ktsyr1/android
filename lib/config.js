export default function Config() {
    // get doc cookies in token 
    let cookies = document.cookie.split('; ')
    let token = cookies.find(cookie => cookie.startsWith('token='))
    if (token) token = token.split('=')[1]
    else token = null
    return { headers: { token } }
} 