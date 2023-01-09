

export function Input(props) {
    let { title, name, type = 'text', tag: Tag = 'input', classbox = '' } = props
    title = title ? title : name

    return (
        <div className={`box col --${name} ${classbox}`} style={{ paddingTop: '10px' }}>
            <label className="pop" htmlFor={name}
                style={{
                    backgroundColor: '#fff', padding: '0 15px', margin: '-10px 15px', width: 'min-content', borderRadius: '10px', whiteSpace: 'pre'
                }}
            >{title}</label>
            <Tag type={type} {...props} />
        </div>
    )
}
