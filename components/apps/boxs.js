import MarkdownIt from 'markdown-it'
import { CalendarOutline, ChevronDownOutline, ChevronUpOutline, CopyOutline, CubeOutline, InvertModeOutline, LogoAndroid, PricetagsOutline, ServerOutline } from "react-ionicons";
import { useState } from "react";
import usesSdk from '/lib/uses-sdk.json'
import { Category } from "./card";
import Image from "next/image";
import { MyLoder } from "lib";
export default class AppBoxs {
    /**
    * 
    * @param {{url,icon,name,category}} param0 
    * @returns {Card}
    */
    static Title({ data, type = false, cat = true }) {
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
    /**
     * 
     * @param {images[]} AppGallery 
     * @returns {AppGallery}
     */

    static Gallery({ data }) {
        let box = 'box gellary  scroll sm-w-14 top-4 w-full xl-w-30 xxl-w-30 id-345 ' // lg-w-30
        let{images} = data
        return (
            <div className={box} >
                {typeof images === 'object'? images?.map((src, i) => {
                    let img = MyLoder(src)
                    return <img
                        // loader={MyLoder}
                        src={img}
                        alt='icon app'
                        loading="lazy"
                        layout='fill'
                        className='h-10 m R-p ui'
                        key={i} />
                }):''}
                <style jsx>{`.id-345 {max-width: 50em; margin-top: 2rem}`}</style>
            </div>
        )
    }
    static About({ data }) {
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
    static Info({ data }) {
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
    static Versions({ data, set, type }) {
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