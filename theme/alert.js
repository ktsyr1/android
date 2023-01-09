import { CheckmarkCircleOutline, CloseOutline } from "react-ionicons"

export default function AlertView() {
    let style = {
        display: 'none',
        color: '#fff'
    }
    let none = () => document.querySelector('.Alert').style.display = 'none'
    return (
        <div className="Alert box pup space aitem m-a" style={style} >
            <CheckmarkCircleOutline color={'#ffffff'} height="40px" width="40px" />
            <span className="content"> </span>
            <CloseOutline color={'#ffffff'} height="40px" width="40px" onClick={none} className="R-m" style={{ cursor: 'pointer' }} />

        </div>
    )
}

export function Alert(msg, code = 200) {
    let Astyle = document.querySelector('.Alert').style
    Astyle.display = 'flex'
    if (code === 200) Astyle.backgroundImage = 'linear-gradient(90deg, var(--colorUI), var(--colorUIX))'
    else Astyle.backgroundImage = 'linear-gradient(90deg, var(--colorerr), var(--colorErr))'
    document.querySelector('.Alert .content').textContent = msg
    return setTimeout(() => Astyle.display = 'none', 10000)
}