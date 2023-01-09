import axios from "axios"
import { Alert } from "theme/alert"
import { Input } from "theme/forms"
import Config from "lib/config"
import { TitleBtn } from "components/apps/boxs"
import { useState } from "react"
import { BuildOutline, DownloadOutline } from "react-ionicons"
import { useRouter } from "next/router"
let Licon = '30px'

export function FormApp({ data, setChange, config, Send, test }) {
    let route = useRouter()
    function BuildUrl(url) {
        url = url
            .trim()
            .toLowerCase()
            .replaceAll(' ', '-')
            .replaceAll('.', '-')
            .replaceAll(/[.*+#%$?^${}()|[\]\\]/g, '')
        return url
    }
    let [urls, setUrls] = useState([])
    function restlinks(e) {
        e.preventDefault()
        let links = [
            BuildUrl(data.name),
            BuildUrl(data.package),
        ]
        setChange({ target: { name: 'title', value: `تحميل تطبيق ${data.name} برابط مباشر` } })
        setUrls(links)
    }
    async function scraping(e) {
        e.preventDefault()
        let URL = `${process.env.NEXT_PUBLIC_API}/googleplay/${data?.package}`
        try {
            let { data: ScrapData } = await axios.get(URL, Config())
            Alert('تم جلب بيانات تطبيق  - ' + data.name)
            // setData({ ...data, ...ScrapData })
            Object
                .keys(ScrapData)
                .map(key => setChange({ target: { name: key, value: ScrapData[key] } }))
        } catch (error) { document.querySelector('[name=images]').click() }
    }
    function setUrl(url) {
        let res = urls.filter(a => a !== url)
        setUrls(res)
        setChange({ target: { name: 'url', value: url } })
    }
    function onSelect(e) {
        let { value, name } = e.target
        let input = document.querySelector('.--mode')
        if (value === "other") input.classList.remove('none')
        else {
            setChange({ target: { name, value } })
            input.classList.add('none')
        }
    }
    function Images() {
        // upload files
        function upload(e) {
            e.preventDefault();
            // send form enctype="multipart/form-data" 
            let El = document.querySelector('form')

            let form = new FormData(El)
            form.append('package', JSON.stringify(data.package))
            console.log(form);
            config.headers['content-type'] = 'multipart/form-data'
            axios.put(`${process.env.NEXT_PUBLIC_API}/image`, form, Config())
                .then(res => {
                    setChange({
                        target: { name: 'images', value: res.data }
                    })
                    Alert('تم رفع الصور بنجاح')
                }
                ).catch(err => Alert('حدث خطأ أثناء رفع الصورة', 404))
        }
        return (
            <input
                className={Type(['edit'])}
                type='file'
                name="images"
                multiple
                placeholder="images"
                accept="image/*"
                onChange={upload} />
        )

    } // end Images   
    let { state = 'edit' } = data
    function Type(type) {
        let filter = type?.filter(a => a === state)
        if (filter.length > 0) return ''
        else return ' none '
    }
    return (
        <form className='box col ui aitem w-14' style={{ height: '-webkit-fill-available' }} onChange={setChange}>
            <TitleBtn data={data} select='.inputs' plays={true} >تحرير التطبيق</TitleBtn>
            <div className="inputs w-full " >
                <div className={'ui box space' + Type(['new', 'edit'])} >
                    <button className='btn' onClick={scraping} >
                        <DownloadOutline color={'#fff'} height={Licon} width={Licon} />
                    </button>
                    <button className='btn' onClick={restlinks} >
                        <BuildOutline color={'#fff'} height={Licon} width={Licon} />
                    </button>
                </div>
                <Input
                    name="name"
                    title="اسم التطبيق"
                    placeholder="name"
                    classbox={Type(['new', 'edit'])}
                    defaultValue={data?.name}
                />
                <Input classbox={Type(['new', 'edit'])} name="title" placeholder="title" defaultValue={data?.title} />
                <Input classbox={Type(['new', 'edit'])} name="url" placeholder="url" defaultValue={data?.url} />

                <div className={"box col m " + Type(['new', 'edit'])}>
                    {urls.map(url => (
                        <span className="p-1" key={url} onClick={() => setUrl(url)} >{url}</span>
                    ))}
                </div>
                <Input classbox={Type(['new', 'edit'])} name="category" placeholder="category" defaultValue={data?.category} />

                <div className={'box col' + Type(['update', 'new', 'edit'])}>
                    <select name='mode' placeholder={'تحديد المود'} onChange={onSelect}>
                        {['pro', 'premium', 'no ads', 'vip', "other"].map(mode => (
                            <option value={mode} key={mode}  >{mode}</option>
                        ))}
                    </select>
                    <Input name="mode" placeholder="mod" classbox="none" defaultValue={data?.mode} />
                </div>
                <Images />
                <Input classbox={Type(['new', 'edit'])} tag='textarea' name="des" placeholder="des" className="h-6" defaultValue={data?.des} />

                <Input classbox={Type(['new', 'edit'])} tag='textarea' name="about" placeholder="about" className="h-6" defaultValue={data?.about} />
                {/* Send data */}
                <div className="box row w-full">
                    <button className={`btn m-2 w-full ${Type(['update', 'new', 'edit'])}`} onClick={Send} > حفظ </button>
                    <div
                        className={`br p aitem m-2 w-full ${Type(['delete'])}`}
                        onClick={() => route.push(route.asPath.replace(route.query.file))}
                    >ارجع و امسح الملف 😂 </div>
                </div>
            </div>
        </form >
    )
}