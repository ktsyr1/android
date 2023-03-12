import MarkdownIt from 'markdown-it'
import { CalendarOutline, ChevronDownOutline, ChevronUpOutline, CodeOutline, CopyOutline, CubeOutline, InvertModeOutline, LogoAndroid, LogoFacebook, LogoTwitter, LogoWhatsapp, PricetagsOutline, ServerOutline } from "react-ionicons";
import { useEffect, useState } from "react";
import usesSdk from '/lib/uses-sdk.json'
import { Category } from "./card";
import Image from "next/image";
import { MyLoder } from "lib";
import { useRouter } from 'next/router';
export default function defa() {
    return {}
}
export function Title({ data, type = false, cat = true }) {
    let Licon = '20px'
    return (
        <div className="box col aitem w-full">
            <div className="box row p w-full" >
                <Image
                    loader={MyLoder}
                    src={data?.icon}
                    alt='icon app'
                    className="p sm-h-8 sm-w-8 w-8"
                    loading="lazy"
                    width={100}
                    height={100}
                />
                <div className="box col mr-2 j">
                    <h2 className="R f-xl sm-f-lg"   >{data?.name}</h2>
                    <Category data={data} link={cat} />
                </div>
            </div>
            {type ?
                <a
                    href={`${process.env.NEXT_PUBLIC_API.replace('/api', '')}/download/${data.path}`}
                    className="btn w-12 sm-w-full sh"
                    style={{ fontSize: 'larger' }}
                >تحميل مباشر </a> : ''}
        </div>
    )
}

export function Share({ title, url = '' }) {
    let route = useRouter()
    url = process.env.NEXT_PUBLIC_DOMAIN + route.asPath
    // let [embeded, setEmbeded] = useState(false)
    // function Copy() {
    //     var copyText = document.querySelector("textarea.embeded")
    //     copyText.select();
    //     copyText.setSelectionRange(0, 99999)
    //     document.execCommand("copy")
    // }
    return (
        <div className='box row p m aitem box j-end j mb-0 pb-0'>
            <p>مشاركة عبر </p>
            <a href={`whatsapp://send?text= ${title} ${url}`} data-action="share/whatsapp/share" rel="noreferrer" target="_blank" title="Share on whatsapp">
                <LogoWhatsapp color={'#03c78c'} width={'30px'} height={'30px'} />
            </a>
            {/* <a href={`https://www.facebook.com/sharer/sharer.php?u=${url}&t=${title}`} target="_blank" title="Share on Facebook">
                    <LogoFacebook color={'#03c78c'} width={'30px'} height={'30px'} />
                </a> */}
            <a href={`https://twitter.com/share?url=${url}&text=${title}`} target="_blank" rel="noreferrer" title="Share on Twitter">
                <LogoTwitter color={'#03c78c'} width={'30px'} height={'30px'} />
            </a>
            {/* <div className='mx-2 ' onClick={() => setEmbeded(true)} >
                <CodeOutline color={'#03c78c'} width={'30px'} height={'30px'} />
            </div> */}
            {/* {embeded ?
                <div className='box col ui pop'>
                    <textarea className='ltr h-9 embeded' defaultValue={`<iframe src='${url}/embed' class="embed" allow="fullscreen"  height="220px" width="390px" style='border:0' />`} />
                    <div className='box row ltr'>
                        <button className='btn w-7 j m' onClick={Copy} >نسخ</button>
                        <div className='btn diseble w-7 j m' onClick={() => setEmbeded(false)} >الغاء</div>
                    </div>
                </div> : ''
            } */}

        </div>
    )
}
export function Gallery({ data }) {
    let box = 'box gellary  scroll sm-w-14 w-full xl-w-30 xxl-w-30' // lg-w-30
    let { images } = data
    return (
        <div className={box} style={{ maxWidth: '50em' }} >
            {typeof images === 'object' ? images?.map((src, i) => {
                let img = MyLoder(src)
                return <img
                    // loader={MyLoder}
                    src={img}
                    alt='icon app'
                    loading="lazy"
                    layout='fill'
                    className='h-10 m R-p ui'
                    key={i} />
            }) : ''}
        </div>
    )
}
export function About({ data }) {
    // md to html 
    let md = new MarkdownIt()
    let des = md.render(data?.des || '')
    let about = md.render(data?.about || '')
    return (
        <div className="box col p w-full" >
            <div dangerouslySetInnerHTML={{ __html: des }} />
            {about !== '' ?
                <div className="w-full" >
                    <TitleBtn data={data} select='.about' plays={true} >الوصف</TitleBtn>
                    <div className="about " dangerouslySetInnerHTML={{ __html: about }} />
                </div>
                : ''}
        </div>
    )
}
export function Info({ data }) {
    if (data.data) data = { ...data, ...data?.data, ...data?.versions[0] }
    else data = data
    let list = [
        { Icon: CopyOutline, data: data?.versionName },
        { Icon: ServerOutline, data: data?.size },
        { Icon: CalendarOutline, data: data?.info?.Date?.toString()?.split('T')[0] },
        { Icon: CubeOutline, data: data?.package },
        { Icon: LogoAndroid, data: usesSdk[data?.usesSdk?.minSdkVersion] },
        { Icon: InvertModeOutline, data: data?.mode },

    ]
    return (
        <div className="box col w-full" >
            <TitleBtn data={data} select='.info' plays={true} > المعلومات </TitleBtn>
            <div className="info" >
                {list.map(({ Icon, data }, i) => (
                    <div className="box row aitem w-full" key={i} >
                        <Icon color={'#03c78c'} width={'20px'} height={'20px'} />
                        <p style={{ margin: '0.5em' }}>{data}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
/**
 * 
 * @param   {{versionName,size,Date,package,minSdkVersion,mod}}
 * @returns {list}
 */
export function Versions({ data, set, type }) {
    // let route = useRouter()
    // console.log(data.versionName === data[0].data.versionName);
    if (!type) return <></>
    else return (
        <div className="box col w-full " >
            <TitleBtn data={data} select='.versions'>الإصدارات</TitleBtn>
            <div className="versions none box col" >
                {data?.versions?.map((version, i) => (
                    <div
                        className={'ui w-12 box row space aitem br'}
                        key={i}
                        style={{ cursor: 'pointer' }}
                        onClick={() => set(version)}
                    >
                        <p>{version.data.versionName}</p>
                        <span style={{
                            backgroundColor: 'var(--colorUIX)',
                            color: 'var(--colorBG)',
                            borderRadius: '10px',
                            padding: '1rem'
                        }}>{version.data.mode}</span>

                    </div>
                ))}
            </div>
        </div>
    )
}


// info


//  TitleBtn props {data} & children
export function TitleBtn({ className, select, children, plays = false }) {
    let [display, setDisplay] = useState(plays)

    function view(e) {
        // setTimeout(() => {
        document.querySelector(select).classList.toggle('none');
        // out time 
        setDisplay(display ? false : true)
        // }, 100)

    }
    let Tag = display ? ChevronUpOutline : ChevronDownOutline
    return (
        <div className={"box row aitem select " + className} onClick={view}>
            <h2 style={{ marginLeft: '1em' }}  >{children}</h2>
            <Tag color={'#00000'} height="35px" width="35px" />
        </div>
    )
}