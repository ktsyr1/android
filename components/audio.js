import { Component, useState } from "react";

// 
export default class Audio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPlaying: false,
            href: '#',
            title: '-'
        }
    }
    render() {

        return (
            <div className="box row R center">

                <div className="box col h-17 scroll w-17">

                    {data.map((audio, i) => <h5 key={i} onClick={() => this.setState(audio)} className="  ui">{audio.title}</h5>
                    )}
                </div>
                <div className="box col ui page center">
                    <h1 className="R-m">{this.state?.title} </h1>
                    <audio controls>
                        <source src={this.state?.href} type="audio/mpeg" />
                    </audio>
                </div>
            </div>
        )
    }
}
let data = [
    {
        "href": "https://archive.org/download/20200213_20200213_1515/20200213_20200213_1515_vbr.m3u",
        "title": "VBR M3U"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A3%D8%AE%D9%8A%20%D8%A5%D9%86%D9%86%D9%8A%20%D9%85%D8%A7%20%D8%B3%D8%A6%D9%85%D8%AA%20%D8%A7%D9%84%D9%83%D9%81%D8%A7%D8%AD.mp3",
        "title": "أخي إنني ما سئمت الكفاح.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A3%D8%AE%D9%8A%20%D8%B3%D9%88%D9%81%20%D8%AA%D8%A8%D9%83%D9%8A%20%D8%B9%D9%84%D9%8A%D9%83%20%D8%A7%D9%84%D8%B9%D9%8A%D9%88%D9%86.mp3",
        "title": "أخي سوف تبكي عليك العيون.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A3%D8%B1%D8%A7%D9%83%20%D9%87%D8%AC%D8%B1%D8%AA%D9%86%D9%8A.MP3",
        "title": "أراك هجرتني.MP3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A3%D8%B1%D8%B3%D9%84%20%D8%A7%D9%84%D9%81%D8%AC%D8%B1%20%D8%B3%D9%84%D8%A7%D9%85.mp3",
        "title": "أرسل الفجر سلام.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A3%D8%B3%D9%85%D8%B9%D9%8A%D9%86%D9%8A%20%D9%8A%D8%A7%20%D8%A3%D8%AE%D9%8A%D9%87.MP3",
        "title": "أسمعيني يا أخيه.MP3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A3%D8%B3%D9%8A%D8%B1%20%D8%A8%D8%BA%D8%AF%D8%A7%D8%AF%20%D9%8A%D9%86%D8%B9%D9%8A.mp3",
        "title": "أسير بغداد ينعي.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A3%D8%B5%D8%AF%D9%82%20%D9%85%D8%A7%20%D9%82%D9%8A%D9%84%20%D9%81%D9%8A%20%D9%87%D8%AC%D8%A7%D8%A1%20%D9%85%D9%84%D9%88%D9%83%20%D8%A7%D9%84%D8%AE%D9%8A%D8%A7%D9%86%D8%A9.mp3",
        "title": "أصدق ما قيل في هجاء ملوك الخيانة.mp3"
    },
    {
        "href": "https://ia802806.us.archive.org/16/items/20200213_20200213_1515/%D8%A3%D8%B9%D8%AF%D9%86%D8%A7%20%D9%83%D9%8A%20%D9%86%D9%82%D8%A7%D8%AA%D9%84%20%D9%85%D9%86%20%D8%AC%D8%AF%D9%8A%D8%AF.mp3",
        "title": "أعدنا كي نقاتل من جديد.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A3%D8%B9%D8%B0%D8%B1%D9%88%D9%86%D9%8A%20%D9%81%D8%A7%D8%B6%20%D9%87%D9%85%D9%8A.mp3",
        "title": "أعذروني فاض همي.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A3%D9%81%D8%B1%D8%A7%D8%AF%D8%A7%20%D9%86%D8%A8%D8%B9%D8%AB%20%D8%A3%D9%81%D8%B1%D8%A7%D8%AF%D8%A7.mp3",
        "title": "أفرادا نبعث أفرادا.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A3%D9%82%D8%B3%D9%85%D9%86%D8%A7%20%D8%A8%D8%A3%D9%86%20%D9%86%D9%82%D8%A7%D8%AA%D9%84%20%D9%83%D8%A7%D9%84%D8%A3%D8%B3%D9%88%D8%AF.mp3",
        "title": "أقسمنا بأن نقاتل كالأسود.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A3%D9%84%D8%A7%20%D8%A8%D9%84%D8%BA%20%D8%A8%D9%86%D9%88%20%D8%AF%D9%86%D9%85%D8%B1%D9%83%20%D8%B9%D9%86%D9%8A.mp3",
        "title": "ألا بلغ بنو دنمرك عني.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A3%D9%84%D8%A7%20%D9%8A%D8%A7%20%D8%B1%D9%88%D8%AD%20%D8%B1%D9%88%D8%AD%D9%8A.mp3",
        "title": "ألا يا روح روحي.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A3%D9%84%D8%AC%D9%85%D8%AA%20%D8%A3%D8%A8%D9%8A%D8%A7%D8%AA%D9%8A.mp3",
        "title": "ألجمت أبياتي.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A3%D9%85%D8%A7%20%D8%A5%D8%B4%D8%AA%D9%82%D8%AA%20%D8%A5%D9%84%D9%89%20%D8%A7%D9%84%D8%AC%D9%86%D8%A9%D8%9F.mp3",
        "title": "أما إشتقت إلى الجنة؟.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A3%D9%85%D8%A7%D9%87%20%D8%B3%D8%A7%D9%85%D8%AD%D9%86%D9%8A%20%D9%80%D9%80%D9%80%20%D8%B9%D8%B2%D9%85%D8%AA%20%D8%B9%D9%84%D9%89%20%D8%A7%D9%84%D8%B1%D8%AD%D9%8A%D9%84%20%D8%B3%D8%B1%D8%A7.mp3",
        "title": "أماه سامحني ـــ عزمت على الرحيل سرا.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A3%D9%85%D8%A7%D9%87%20%D9%84%D8%A7%20%D8%AA%D8%A3%D8%B3%D9%8A%20%D8%B9%D9%84%D9%8A%20%D9%88%D8%AA%D9%86%D8%AF%D9%85%D9%8A.mp3",
        "title": "أماه لا تأسي علي وتندمي.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A3%D9%85%D8%A7%D9%87%20%D9%84%D9%86%20%D8%A3%D8%B9%D9%88%D8%AF.mp3",
        "title": "أماه لن أعود.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A3%D9%85%D8%AA%D9%8A%20%D9%84%D8%A7%20%D8%AA%D8%B3%D9%85%D8%B9%D9%8A%20%D8%B5%D9%88%D8%AA%20%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%A7%D9%84%D9%81%D8%A7%D8%B4%D9%84.mp3",
        "title": "أمتي لا تسمعي صوت السلام الفاشل.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A3%D9%85%D8%AA%D9%8A%20%D9%85%D8%A7%D8%B0%D8%A7%20%D8%AF%D9%87%D8%A7%D9%87%D8%A7.mp3",
        "title": "أمتي ماذا دهاها.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A3%D9%85%D8%B4%D9%8A%20%D8%B9%D9%84%D9%89%20%D8%AC%D9%85%D8%B1%20%D8%A7%D9%84%D9%85%D8%AE%D8%A7%D8%B7%D8%B1%20%D8%AD%D8%A7%D9%81%D9%8A%D8%A7.mp3",
        "title": "أمشي على جمر المخاطر حافيا.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A3%D9%86%D8%A7%20%D8%B5%D8%A7%D9%85%D8%AF%20%D8%B1%D8%BA%D9%85%20%D8%A7%D9%84%D8%AC%D8%B1%D8%A7%D8%AD.mp3",
        "title": "أنا صامد رغم الجراح.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A3%D9%86%D8%A7%20%D9%85%D8%A8%D8%AF%D8%A6%D9%8A%20%D8%A3%D9%86%20%D8%A7%D9%84%D9%87%D9%88%D8%A7%D9%86%20%D9%84%D8%BA%D9%8A%D8%B1%D9%86%D8%A7%20%D9%88%D8%A7%D9%84%D8%B9%D8%B2%20%D9%84%D9%8A%20%D9%88%20%D9%84%D8%A3%D9%85%D8%AA%D9%8A--%20%D8%A7%D9%84%D9%85%D9%88%D8%AA%20%D9%81%D9%8A%20%D8%B2%D9%85%D9%86%20%D8%A7%D9%84%D9%87%D9%88%D8%A7%D9%86%20%D9%85%D8%B1%D8%A7%D8%AF%D9%8A.mp3",
        "title": "أنا مبدئي أن الهوان لغيرنا والعز لي و لأمتي-- الموت في زمن الهوان مرادي.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A3%D9%8A%D8%A7%20%D9%82%D9%84%D8%A8%20%D9%84%D8%A7%20%D8%AA%D8%AD%D8%B2%D9%86%20%D8%B9%D9%84%D9%89%20%D8%B5%D8%AD%D8%A8.mp3",
        "title": "أيا قلب لا تحزن على صحب.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A3%D9%8A%D8%A7%20%D9%85%D9%86%20%D9%8A%D8%AF%D8%B9%20%D8%A7%D9%84%D9%81%D9%87%D9%85.mp3",
        "title": "أيا من يدع الفهم.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A3%D9%8A%D9%87%D8%A7%20%D8%A7%D9%84%D8%B9%D9%8E%D8%A7%D9%84%D9%90%D9%85%20%D8%A5%D9%8A%D8%A7%D9%83%20%D8%A7%D9%84%D8%B2%D9%84%D9%84.mp3",
        "title": "أيها العَالِم إياك الزلل.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A3%D9%8F%D9%85%D8%AA%D9%8A%20%D9%85%D8%A7%D8%B0%D8%A7%20%D8%AF%D9%87%D8%A7%D9%83.mp3",
        "title": "أُمتي ماذا دهاك.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A5%D8%B3%D9%84%D8%A7%D9%85%D9%86%D8%A7%20%D9%84%D8%A7%20%D9%8A%D9%87%D9%88%D9%86.mp3",
        "title": "إسلامنا لا يهون.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A5%D9%84%D8%A7%20%D8%A7%D9%84%D8%B1%D8%B3%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D8%AC%D8%AA%D8%A8%D9%89%20%D8%AF%D8%A7%D9%83%20%D8%A7%D9%84%D8%A3%D9%85%D9%8A%D9%86.mp3",
        "title": "إلا الرسول المجتبى داك الأمين.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A5%D9%84%D9%87%D9%8A%20%D9%88%20%D8%AE%D9%84%D8%A7%D9%82%D9%8A.mp3",
        "title": "إلهي و خلاقي.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A5%D9%84%D9%89%20%D8%AD%D9%8F%D9%86%D9%8E%D9%8A%D9%92%D9%86.MP3",
        "title": "إلى حُنَيْن.MP3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A5%D9%84%D9%89%20%D9%85%D8%AA%D9%89%20%D9%8A%D8%AA%D8%B7%D8%A7%D9%88%D9%84%20%D8%A7%D9%84%D8%A3%D9%88%D8%BA%D8%A7%D8%AF.mp3",
        "title": "إلى متى يتطاول الأوغاد.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A5%D9%84%D9%8A%D9%83%D9%85%20%D9%8A%D8%A7%20%D8%A8%D9%86%D9%8A%20%D9%82%D9%88%D9%85%D9%8A%20%D8%B1%D8%B3%D8%A7%D9%84%D8%A9.mp3",
        "title": "إليكم يا بني قومي رسالة.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A5%D9%86%20%D8%A7%D9%84%D8%AD%D8%AC%D8%A7%D8%A8%20%D9%81%D8%B1%D9%8A%D8%B6%D8%A9%20%D9%85%D9%86%20%D8%B1%D8%A8%D9%86%D8%A7%20%D8%A7%D9%84%D9%85%D9%86%D8%A7%D9%86.mp3",
        "title": "إن الحجاب فريضة من ربنا المنان.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A5%D9%86%20%D8%A7%D9%84%D8%B5%D8%A8%D8%B1%20%D9%84%D9%84%D8%A3%D8%AD%D8%B1%D8%A7%D8%B1%20%D8%B2%D8%A7%D8%AF.mp3",
        "title": "إن الصبر للأحرار زاد.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A5%D9%86%20%D8%AA%D8%B7%D8%A7%D9%88%D9%84%20%D9%84%D9%8A%D9%84%D9%86%D8%A7.mp3",
        "title": "إن تطاول ليلنا.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A5%D9%86%D9%86%D9%8A%20%D8%B4%D8%A8%D9%84%20%D9%87%D9%85%D8%A7%D9%85%20%D9%84%D8%A7%20%D8%A3%D8%A8%D8%A7%D9%84%D9%8A.mp3",
        "title": "إنني شبل همام لا أبالي.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A7%D8%AE%D9%8A%20%D8%A7%D9%86%D8%AA%20%D8%AD%D8%B1%20%D9%88%D8%B1%D8%A7%D8%A1%20%D8%A7%D9%84%D8%B3%D8%AF%D9%88%D8%AF.mp3",
        "title": "اخي انت حر وراء السدود.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A7%D8%AE%D9%8A%D8%A9%20%D8%A7%D9%84%D8%A7%D8%B3%D9%84%D8%A7%D9%85%20%D8%AA%D8%A8%D9%83%D9%8A.mp3",
        "title": "اخية الاسلام تبكي.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A7%D8%AF%D8%A8%20%D8%B9%D9%86%20%D8%B9%D8%B1%D8%B6%20%D8%A7%D9%84%D8%B1%D8%B3%D9%88%D9%84%20%D8%A8%D8%AF%D8%A7%D8%AA.mp3",
        "title": "ادب عن عرض الرسول بدات.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A7%D8%AF%D9%8A%D9%86%D8%A7%20%D8%A7%D9%84%D9%82%D8%B3%D9%85.mp3",
        "title": "ادينا القسم.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A7%D8%B3%D8%A3%D9%84%D9%88%D8%A7%20%D8%AC%D9%86%D8%AF%20%D8%A7%D9%84%D8%B5%D9%84%D9%8A%D8%A8%20%D8%A7%D8%B3%D8%A3%D9%84%D9%88%D8%A7%20%D8%AC%D9%86%D8%AF%20%D8%A7%D9%84%D8%AA%D8%AA%D8%A7%D8%B1.mp3",
        "title": "اسألوا جند الصليب اسألوا جند التتار.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A7%D8%B3%D8%A7%D9%85%D8%A9%20%D8%A8%D9%86%20%D9%84%D8%A7%D8%AF%D9%86.mp3",
        "title": "اسامة بن لادن.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A7%D8%B3%D9%8A%D8%B1.mp3",
        "title": "اسير.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A7%D8%BA%D9%8A%D8%A8%20%D9%88%D8%B0%D9%88%20%D8%A7%D9%84%D9%84%D8%B7%D8%A7%D8%A6%D9%81%20%D9%84%D8%A7%20%D9%8A%D8%BA%D9%8A%D8%A8.mp3",
        "title": "اغيب وذو اللطائف لا يغيب.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A7%D9%82%D9%85%20%D8%A7%D9%84%D8%B5%D9%84%D8%A7%D8%A9.mp3",
        "title": "اقم الصلاة.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A7%D9%84%D8%A8%D8%B1%D8%AF%D8%A9.mp3",
        "title": "البردة.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A7%D9%84%D8%A8%D9%88%D8%AF%D9%8A%20%D8%B4%D9%88%D9%89%20%D8%B5%D8%A8%D9%8A%D8%A7%D9%86%D9%8A.mp3",
        "title": "البودي شوى صبياني.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A7%D9%84%D8%AF%D9%84%20%D9%8A%D8%AB%D9%82%D9%84%D9%86%D9%8A.mp3",
        "title": "الدل يثقلني.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A7%D9%84%D8%AF%D9%86%D9%8A%D8%A7%20%D8%B8%D9%84%20%D8%B2%D8%A7%D8%A6%D9%84.mp3",
        "title": "الدنيا ظل زائل.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A7%D9%84%D8%B5%D9%88%D9%85%D8%A7%D9%84%20%D8%B2%D9%85%D8%AC%D8%B1.mp3",
        "title": "الصومال زمجر.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A7%D9%84%D8%B9%D8%A7%D8%A8%D8%AB%D9%8A%D9%86%20%D8%A8%D8%B9%D8%B1%D8%B6%20%D8%A7%D9%85%D8%AA%D9%87%D9%85%20-%20%D9%88%D8%B4%D9%87%D8%A7%D8%AF%D8%A9%20%D9%8A%D8%A7%20%D8%B1%D8%A8%20%D9%86%D8%B7%D9%84%D8%A8%D9%87%D8%A7%20%D9%83%D9%8A%20%D9%85%D8%A7%20%D8%AA%D8%AE%D8%A7%D8%B7%D8%A8%D9%86%D8%A7%20%D8%A8%D9%84%D8%A7%20%D8%B3%D8%AA%D8%B1.mp3",
        "title": "العابثين بعرض امتهم - وشهادة يا رب نطلبها كي ما تخاطبنا بلا ستر.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A7%D9%84%D9%82%D8%AF%D8%B3.mp3",
        "title": "القدس.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A7%D9%84%D9%82%D9%88%D9%84%20%D9%82%D9%88%D9%84%20%D8%A7%D9%84%D8%B5%D9%88%D8%A7%D8%B1%D9%85.mp3",
        "title": "القول قول الصوارم.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A7%D9%84%D9%83%D8%A7%D8%B0%D8%A8%D9%88%D9%86%20%D8%B9%D9%84%D9%89%20%D8%A7%D9%84%D9%85%D8%AF%D9%89.MP3",
        "title": "الكاذبون على المدى.MP3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A7%D9%84%D9%84%D9%87%20%D8%A3%D9%83%D8%A8%D8%B1%20%D9%81%D9%88%D9%82%20%D9%83%D9%8A%D8%AF%20%D8%A7%D9%84%D9%85%D8%B9%D8%AA%D8%AF.mp3",
        "title": "الله أكبر فوق كيد المعتد.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A7%D9%84%D9%84%D9%87%D9%85%20%D8%A8%D8%A5%D8%B3%D9%85%D9%83%20%D9%8A%D8%A7%20%D8%AC%D8%A8%D8%A7%D8%B1.MP3",
        "title": "اللهم بإسمك يا جبار.MP3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A7%D9%84%D9%86%D9%81%D8%B3%20%D9%86%D8%AF%D9%85%D8%A7%D9%86%D8%A9.MP3",
        "title": "النفس ندمانة.MP3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A7%D9%84%D9%8A%D9%88%D9%85%20%D8%B2%D9%81%20%D8%A5%D9%84%D9%89%20%D8%A7%D9%84%D8%AD%D9%88%D8%B1%D8%A7%D8%A1%20%D8%B9%D8%A7%D8%B4%D9%82%D9%87%D8%A7.mp3",
        "title": "اليوم زف إلى الحوراء عاشقها.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A7%D9%85%D8%A7%D9%85%20%D8%A7%D9%84%D8%B6%D9%84%D9%85%20%D8%A5%D8%B9%D8%B5%D8%A7%D8%B1%D8%A7%20%D8%B9%D8%AA%D9%8A%D8%A7.mp3",
        "title": "امام الضلم إعصارا عتيا.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A7%D9%85%D8%A7%D9%87%20%D9%84%D8%A7%20%D8%AA%D8%A8%D9%83%D9%8A%20%D8%B9%D9%84%D9%8A.mp3",
        "title": "اماه لا تبكي علي.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A7%D9%85%D8%A7%D9%87%20%D9%84%D8%A7%20%D8%AA%D9%85%D9%86%D8%B9%D9%8A%D9%86%D9%8A%20%D8%A8%D8%A7%D9%84%D8%AF%D9%85%D8%B9%20%D8%A7%D9%88%20%D8%A7%D9%84%D9%82%D8%A8%D9%84.mp3",
        "title": "اماه لا تمنعيني بالدمع او القبل.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A7%D9%85%D8%A9%20%D8%A7%D9%84%D8%A5%D8%B3%D9%84%D8%A7%D9%85%20%D8%A8%D8%B4%D8%B1%D9%89.mp3",
        "title": "امة الإسلام بشرى.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A7%D9%86%D8%A7%20%D9%85%D8%B3%D9%84%D9%85%20%D8%A7%D8%B9%D9%8A%D8%B4%20%D9%85%D9%86%20%D8%A7%D8%AC%D9%84%20%D8%AF%D9%8A%D9%86%D9%8A.mp3",
        "title": "انا مسلم اعيش من اجل ديني.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A7%D9%86%D8%A7%20%D9%85%D8%B3%D9%84%D9%85.mp3",
        "title": "انا مسلم.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A7%D9%86%D8%B4%D9%88%D8%AF%D8%A9%20%D8%BA%D8%B1%D8%A8%D8%A7%D8%A1.mp3",
        "title": "انشودة غرباء.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A7%D9%86%D8%B4%D9%88%D8%AF%D8%A9%20%D9%84%D8%A8%D9%8A%D9%83%20%D8%A7%D8%B3%D9%84%D8%A7%D9%85%20%D8%A7%D9%84%D8%A8%D8%B7%D9%88%D9%84%D8%A9%20%D8%A7%D9%84%D9%86%D8%B3%D8%AE%D8%A9%20%D8%A7%D9%84%D9%83%D8%A7%D9%85%D9%84%D8%A9.mp3",
        "title": "انشودة لبيك اسلام البطولة النسخة الكاملة.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A7%D9%86%D8%B8%D8%B1%20%D8%AA%D8%B1%D9%89%20%D8%A7%D9%84%D9%85%D9%84%D9%8A%D8%A7%D8%B1%20%D9%83%D9%8A%D9%81%20%D8%AA%D8%AE%D8%A7%D8%AF%D9%84%D9%88%D8%A7.mp3",
        "title": "انظر ترى المليار كيف تخادلوا.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A7%D9%86%D9%86%D8%A7%20%D9%86%D8%AD%D9%86%20%D8%A7%D8%B6%D8%B9%D9%86%D8%A7%20%D9%85%D8%AC%D8%AF%D9%86%D8%A7%20%D9%8A%D8%A7%20%D9%85%D8%B3%D9%84%D9%85%D9%8A%D9%86.mp3",
        "title": "اننا نحن اضعنا مجدنا يا مسلمين.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A7%D9%88%D8%AC%D8%B9%D9%8A%D9%86%D9%8A%20%D9%8A%D8%A7%20%D8%AC%D8%B1%D8%A7%D8%AD%D9%8A.mp3",
        "title": "اوجعيني يا جراحي.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A7%D9%88%D8%AF%D8%B9%D9%83%D9%85%20%D8%A8%D8%AF%D9%85%D8%B9%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B9%D9%8A%D9%88%D9%86.mp3",
        "title": "اودعكم بدمعات العيون.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A7%D9%88%D9%83%D8%A7%D9%86%20%D8%A7%D8%B1%D9%87%D8%A7%D8%A8%D8%A7%20%D8%AC%D9%87%D8%A7%D8%AF%20%D9%86%D8%A8%D9%8A%D9%86%D8%A7.mp3",
        "title": "اوكان ارهابا جهاد نبينا.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A7%D9%8A%D9%86%20%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D9%88%D9%82%D8%AF%20%D8%AA%D8%B1%D9%85%D9%84%D8%AA%20%D9%86%D8%B3%D8%A7%D8%A6%D9%86%D8%A7.mp3",
        "title": "اين السلام وقد ترملت نسائنا.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A7%D9%8A%D9%87%D8%A7%20%D8%A7%D9%84%D8%AD%D8%B1%20%D8%A7%D9%84%D9%85%D9%82%D8%A7%D8%AA%D9%84.mp3",
        "title": "ايها الحر المقاتل.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A7%D9%8A%D9%87%D8%A7%20%D8%A7%D9%84%D9%85%D8%B3%D9%84%D9%85%D9%88%D9%86.mp3",
        "title": "ايها المسلمون.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A8%D8%A7%D8%B9%20%D8%A7%D9%84%D8%AB%D9%85%D9%8A%D9%86%20%D8%A8%D9%84%D8%A7%20%D8%AB%D9%85%D9%86.mp3",
        "title": "باع الثمين بلا ثمن.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A8%D8%A7%D9%84%D8%AE%D9%84%D8%A7%D9%81%D8%A9%20%D9%84%D9%8A%D8%B3%20%D8%A5%D9%84%D8%A7.mp3",
        "title": "بالخلافة ليس إلا.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A8%D8%A7%D9%84%D8%AE%D9%8A%D9%84%20%D8%AA%D8%B5%D9%87%D9%84%20%D9%83%D8%A7%D9%84%D8%B1%D8%B9%D9%88%D8%AF.mp3",
        "title": "بالخيل تصهل كالرعود.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A8%D8%AC%D9%87%D8%A7%D8%AF%D9%86%D8%A7.mp3",
        "title": "بجهادنا.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A8%D8%AF%D9%85%D9%8A%20%D8%A3%D8%A8%D8%AB%20%D8%B4%D9%83%D8%A7%D9%8A%D8%AA%D9%8A%20%D9%88%20%D8%B9%D8%B0%D8%A7%D8%A8%D9%8A.MP3",
        "title": "بدمي أبث شكايتي و عذابي.MP3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A8%D8%AF%D9%85%D9%8A%20%D8%B3%D8%A3%D8%B1%D9%88%D9%8A%20%D8%B1%D8%A7%D9%8A%D8%AA%D9%8A.mp3",
        "title": "بدمي سأروي رايتي.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A8%D8%B9%D9%86%D8%A7%20%D9%85%D8%A8%D8%A7%D8%AF%D8%A6%D9%86%D8%A7.mp3",
        "title": "بعنا مبادئنا.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A8%D9%83%D8%AA%20%D8%A7%D9%84%D9%82%D9%84%D9%88%D8%A8%20%D8%B9%D9%84%D9%89%20%D9%81%D8%B1%D8%A7%D9%82%20%D8%B1%D9%85%D8%B6%D8%A7%D9%86.mp3",
        "title": "بكت القلوب على فراق رمضان.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A8%D9%83%D9%80%D9%80%D9%8A%D8%AA%20%D8%B9%D9%84%D9%89%20%D8%A7%D9%84%D9%85%D8%A2%D8%B3%D9%8A%20%D8%B7%D9%88%D9%84%20%D8%B9%D9%85%D8%B1%D9%8A.mp3",
        "title": "بكــيت على المآسي طول عمري.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A8%D9%83%D9%8A%D8%AA%D9%83%20%D9%8A%D8%A7%20%D8%A3%D9%8F%D8%AE%D9%8A.mp3",
        "title": "بكيتك يا أُخي.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A8%D9%84%D8%A7%D8%AF%20%D8%A7%D9%84%D8%B4%D8%A7%D9%85%20%D9%84%D8%A7%20%D8%AA%D8%A3%D8%B3%D9%8A.mp3",
        "title": "بلاد الشام لا تأسي.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%A8%D9%86%D9%8A%20%D8%A7%D9%84%D8%A5%D8%B3%D9%84%D8%A7%D9%85%20%D9%82%D8%AF%20%D8%A2%D9%86%20%D9%83%D9%8A%20%D9%86%D8%B5%D8%A8%D8%AD%20%D9%84%D9%84%D9%87%D8%AF%D9%89%20%D8%AC%D9%86%D8%AF%D8%A7.mp3",
        "title": "بني الإسلام قد آن كي نصبح للهدى جندا.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%AA%D8%A3%D9%85%D9%84%D8%AA%20%D9%88%D8%A7%D9%84%D8%AF%D9%86%D9%8A%D8%A7%20%D8%A8%D9%87%D8%A7%20%D8%A7%D9%84%D8%B9%D8%AC%D8%A8%20%D9%88%D8%A7%D9%84%D8%B9%D8%AC%D8%A8.mp3",
        "title": "تأملت والدنيا بها العجب والعجب.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%AA%D8%A4%D9%85%D9%84%20%D9%8A%D9%88%D9%85%D8%A7%20%D8%AA%D8%AA%D9%88%D8%A8.mp3",
        "title": "تؤمل يوما تتوب.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%AA%D8%A8%D9%82%D9%89%20%D8%B4%D8%B9%D8%A7%D8%B1%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B5%D9%85%D9%88%D8%AF%20%D8%B3%D9%84%D9%8A%D9%85%D8%A9%20%D9%88%20%D8%A7%D9%86%D8%A7%20%D8%A7%D9%84%D9%82%D8%AA%D9%8A%D9%84.mp3",
        "title": "تبقى شعارات الصمود سليمة و انا القتيل.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%AA%D8%AE%D9%8A%D9%84%D8%A7%D8%AA%20%D8%AD%D8%A7%D8%A6%D8%B1%20%D8%B1%D8%B3%D8%A7%D9%84%D8%A9%20%D8%A7%D9%84%D9%89%20%D9%84%D8%A3%D9%86%D8%B5%D8%A7%D8%B1%20%D8%A7%D9%84%D8%B7%D9%88%D8%A7%D8%BA%D9%8A%D8%B7.mp3",
        "title": "تخيلات حائر رسالة الى لأنصار الطواغيط.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%AA%D8%AF%D9%83%D8%B1%D9%86%D8%A7%20%D8%A7%D9%86%20%D8%A7%D9%84%D8%AC%D9%87%D8%A7%D8%AF%20%D9%81%D8%B1%D9%8A%D8%B6%D8%A9.mp3",
        "title": "تدكرنا ان الجهاد فريضة.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%AA%D8%B9%D8%A7%D9%84%D9%88%D8%A7%20%D8%A5%D9%84%D9%89%20%D8%A7%D9%84%D8%AE%D9%8A%D8%B1%20%D9%8A%D8%A7%20%D9%85%D8%B3%D9%84%D9%85%D9%88%D9%86.mp3",
        "title": "تعالوا إلى الخير يا مسلمون.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%AA%D9%82%D8%AF%D9%85%20%D8%A7%D8%AE%D9%8A%20%D9%84%D9%84%D9%82%D9%8A%D8%A7%20%D8%A7%D9%84%D8%B1%D8%AC%D8%A7%D9%84.mp3",
        "title": "تقدم اخي للقيا الرجال.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%AA%D9%88%D8%AD%D8%AF%D9%88%D8%A7%20%D9%81%D9%8A%20%D8%AE%D9%86%D8%AF%D9%82.mp3",
        "title": "توحدوا في خندق.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%AC%D8%AF%D9%88%D8%AF%D9%86%D9%8E%D8%A7%20%D9%83%D8%A7%D9%86%D9%88%D8%A7%20%D9%85%D9%8F%D9%84%D9%88%D9%83%D8%A7%D9%8B.mp3",
        "title": "جدودنَا كانوا مُلوكاً.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%AC%D9%86%D9%88%D8%AF%20%D9%81%D9%8A%20%D8%A7%D9%84%D9%88%D8%BA%D9%89%20%D8%AA%D9%85%D8%B6%D9%8A.mp3",
        "title": "جنود في الوغى تمضي.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%AD%D8%A7%D9%86%D8%AA%20%D8%B3%D8%A7%D8%B9%D8%A9%20%D8%A7%D9%84%D9%81%D8%B1%D9%82%D8%A9.mp3",
        "title": "حانت ساعة الفرقة.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%AD%D8%A8%D9%8A%D8%A8%D8%AA%D9%8A%20%D8%A7%D9%84%D8%B4%D9%87%D8%A7%D8%AF%D8%A9.mp3",
        "title": "حبيبتي الشهادة.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%AD%D9%83%D9%85%20%D8%A7%D9%84%D9%85%D9%86%D9%8A%D8%A9%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A8%D8%B1%D9%8A%D8%A9%20%D8%AC%D8%A7%D8%B1%D9%8A.mp3",
        "title": "حكم المنية في البرية جاري.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%AD%D9%85%D9%84%D9%88%D9%86%D9%8A%20%D8%B9%D9%84%D9%89%20%D8%A7%D9%84%D8%A7%D9%83%D8%AA%D8%A7%D9%81%20%D8%A7%D8%B1%D8%A8%D8%B9%D8%A9.mp3",
        "title": "حملوني على الاكتاف اربعة.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%AD%D9%86%D8%A7%20%D8%A3%D9%86%D8%B5%D8%A7%D8%B1%20%D8%A7%D9%84%D8%B4%D8%B1%D9%8A%D8%B9%D8%A9.MP3",
        "title": "حنا أنصار الشريعة.MP3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%AD%D9%88%D8%B1%D8%A7%D9%86%20%D9%86%D8%A7%D8%AF%D8%AA%20%D8%A8%D8%A7%D9%84%D8%B1%D8%AC%D8%A7%D9%84%20%D8%AA%D8%AD%D8%B1%D9%83%D9%88%D8%A7.mp3",
        "title": "حوران نادت بالرجال تحركوا.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%AD%D9%8A%20%D8%A7%D9%84%D9%83%D8%AA%D8%A7%D8%A6%D8%A8.MP3",
        "title": "حي الكتائب.MP3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%AD%D9%8A%D8%A7%D8%A9%20%D8%A7%D9%84%D8%AD%D8%B1%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%AF%D9%86%D9%8A%D8%A7%20%D8%AC%D9%87%D8%A7%D8%AF.mp3",
        "title": "حياة الحر في الدنيا جهاد.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%AD%D9%8A%D9%8A%20%D8%A7%D9%84%D8%B4%D8%A8%D8%A7%D8%A8%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%D9%84%D9%8A%D9%86.MP3",
        "title": "حيي الشباب العاملين.MP3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%AE%D8%AF%D9%88%D8%A7%20%D9%85%D9%86%D9%8A%20%D9%81%D8%A4%D8%A7%D8%AF%D9%8A%20%D9%88%D9%85%D9%86%D8%AD%D9%88%D9%86%D9%8A%20%D8%B3%D9%84%D8%A7%D8%AD%D9%8A.mp3",
        "title": "خدوا مني فؤادي ومنحوني سلاحي.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%AE%D8%B0%D9%88%D9%86%D9%8A%20%D9%84%D9%84%D8%AC%D9%87%D8%A7%D8%AF%20%D9%88%20%D8%A3%D9%86%D9%82%D8%B0%D9%88%D9%86%D9%8A.mp3",
        "title": "خذوني للجهاد و أنقذوني.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%AE%D9%84%20%D8%A7%D9%84%D8%AE%D8%B7%D8%A7%D8%A8%20%D9%84%D9%85%D8%AF%D9%81%D8%B9%20%D9%87%D8%AF%D8%A7%D8%B1.mp3",
        "title": "خل الخطاب لمدفع هدار.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%AF%D8%B9%D8%A7%20%D8%A7%D9%84%D8%AF%D8%A7%D8%B9%D9%8A%20%D9%84%D9%84%D8%AC%D9%87%D8%A7%D8%AF.MP3",
        "title": "دعا الداعي للجهاد.MP3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%AF%D9%83%D8%B1%D9%83%20%D9%8A%D8%A7%20%D8%B1%D8%B3%D9%88%D9%84%20%D8%A7%D9%84%D9%84%D9%87%20%D8%B2%D8%A7%D8%AF.mp3",
        "title": "دكرك يا رسول الله زاد.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%AF%D9%83%D8%B1%D9%89%20%D8%A7%D9%84%D9%85%D8%B9%D8%A7%D8%B1%D9%83%20%D9%88%D8%A7%D9%84%D8%B4%D9%87%D8%A7%D8%AF%D8%A9.mp3",
        "title": "دكرى المعارك والشهادة.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%AF%D9%85%D8%B9%D8%A9%20%D8%A7%D9%84%D8%A3%D9%84%D9%85.mp3",
        "title": "دمعة الألم.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%AF%D9%85%D9%88%D8%B9%20%D8%A7%D9%84%D8%AF%D9%86%D8%A8.mp3",
        "title": "دموع الدنب.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%AF%D9%8A%D9%86%D9%86%D8%A7%20%20%D9%85%D8%AC%D8%AF%20%D8%A7%D9%84%D8%AD%D9%8A%D8%A7%D8%A9.mp3",
        "title": "ديننا  مجد الحياة.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%B0%D9%87%D8%A8%20%D8%A7%D9%84%D8%B0%D9%8A%D9%86%20%D8%A5%D8%B0%D8%A7%20%D9%85%D8%B1%D8%B1%D8%AA%20%D8%A8%D8%AF%D8%A7%D8%B1%D9%87%D9%85.mp3",
        "title": "ذهب الذين إذا مررت بدارهم.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%B1%D8%A8%D8%A7%D9%83%20%D8%B1%D8%A8%D9%83%20%D8%AC%D9%84%20%D9%85%D9%86%20%D8%B1%D8%A8%D8%A7%D9%83%20%D9%8A%D8%A7%20%D8%B1%D8%B3%D9%88%D9%84%20%D8%A7%D9%84%D9%84%D9%87.mp3",
        "title": "رباك ربك جل من رباك يا رسول الله.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%B1%D8%A8%D9%8A%20%D8%A7%D8%B9%D9%81%D9%88%20%D8%B9%D9%86%20%D8%B9%D8%A8%D8%AF%20%D9%84%D8%AF%D9%8A%D9%83.mp3",
        "title": "ربي اعفو عن عبد لديك.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%B1%D8%AA%D9%84%20%D9%85%D9%86%20%D9%85%D9%86%D9%87%D9%84%20%D8%A7%D9%84%D9%82%D8%B1%D8%A2%D9%86.MP3",
        "title": "رتل من منهل القرآن.MP3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%B1%D8%AD%D9%84%20%D8%A7%D9%84%D8%A3%D8%B3%D9%88%D8%AF.mp3",
        "title": "رحل الأسود.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%B1%D9%88%D9%8A%D8%AF%D9%83%20%D8%A3%D9%8F%D8%B3%D8%A7%D9%85%D8%A9%20%D9%85%D9%86%20%D8%AA%D9%86%D8%A7%D8%AF%D9%8A.mp3",
        "title": "رويدك أُسامة من تنادي.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%B2%D9%84%D8%B2%D9%84%D9%88%D8%A7%20%D8%B9%D8%B1%D8%B4%20%D8%A7%D9%84%D8%B5%D9%84%D9%8A%D8%A8.mp3",
        "title": "زلزلوا عرش الصليب.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%B3%D8%A3%D8%B1%D8%AD%D9%84%20%D9%86%D8%AD%D9%88%20%D8%AF%D8%A7%D8%B1%20%D8%A7%D9%84%D8%B9%D8%B2.mp3",
        "title": "سأرحل نحو دار العز.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%B3%D8%A3%D9%82%D8%A8%D9%84%20%D9%8A%D8%A7%20%D8%AE%D8%A7%D9%84%D9%82%D9%8A%20%D9%85%D9%86%20%D8%AC%D8%AF%D9%8A%D8%AF.mp3",
        "title": "سأقبل يا خالقي من جديد.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%B3%D8%A3%D9%83%D8%AA%D8%A8%20%D9%84%D9%84%D8%A3%D9%86%D8%A7%D9%85%20%D8%B9%D8%B2%D8%A7%D8%A6%D9%8A%20%20-%20%D8%A3%D9%8A%D9%86%20%D8%AC%D9%86%D8%AF%20%D8%A7%D9%84%D9%84%D9%87.mp3",
        "title": "سأكتب للأنام عزائي  - أين جند الله.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%B3%D8%AA%D9%8F%D8%B3%D8%A3%D9%84%D9%88%D9%86.mp3",
        "title": "ستُسألون.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%B3%D9%83%D8%A8%D8%AA%20%D8%B9%D9%84%D9%8A%D9%87%D9%85%20%D8%AF%D9%85%D9%88%D8%B9%20%D8%A7%D9%84%D9%81%D8%B1%D8%A7%D9%82.mp3",
        "title": "سكبت عليهم دموع الفراق.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%89%20%D8%A7%D8%A8%D9%88%20%D9%85%D8%B5%D8%B9%D8%A8.mp3",
        "title": "سلام على ابو مصعب.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%B3%D9%86%D9%85%D8%B6%D9%8A%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%B7%D8%B1%D9%8A%D9%82%20%D9%88%D9%84%D8%A7%20%D9%86%D8%A8%D8%A7%D9%84%D9%8A.mp3",
        "title": "سنمضي في الطريق ولا نبالي.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%B3%D9%87%D8%B1%20%D9%8A%D8%A4%D8%B1%D9%82%D9%86%D9%8A%20%D9%81%D9%81%D9%8A%20%D9%82%D9%84%D8%A8%D9%8A%20%D8%A7%D9%84%D8%A3%D8%B3%D9%89.mp3",
        "title": "سهر يؤرقني ففي قلبي الأسى.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%B3%D9%88%D9%81%20%D9%86%D8%A8%D9%82%D9%8A%20%D9%87%D9%86%D8%A7.mp3",
        "title": "سوف نبقي هنا.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%B3%D9%8A%D9%81%D8%A7%20%D8%A7%D9%88%20%D8%B2%D9%86%D8%A7%D8%AF%D8%A7.mp3",
        "title": "سيفا او زنادا.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%B4%D8%A8%D8%A7%D8%A8%20%D9%84%D9%84%D9%87%20%D8%A5%D8%B3%D8%AA%D8%AC%D8%A7%D8%A8.mp3",
        "title": "شباب لله إستجاب.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%B5%D8%A7%D8%AD%D9%8E%20%D9%81%D9%8A%D9%86%D8%A7%20%D8%A7%D9%84%D8%B7%D9%81%D9%84%20%D8%AF%D9%8A%D9%86%D8%A7%D9%8B.mp3",
        "title": "صاحَ فينا الطفل ديناً.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%B5%D8%A7%D8%B1%20%D8%A7%D9%84%D8%AC%D9%87%D8%A7%D8%AF%20%D8%AC%D8%B1%D9%8A%D9%85%D8%A9.mp3",
        "title": "صار الجهاد جريمة.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%B5%D8%A7%D9%85%D8%B6%D8%A7%20%D8%B4%D8%A7%D9%85%D8%AE%D8%A7%20%D8%B1%D8%BA%D9%85%20%D8%A7%D9%84%D9%82%D9%8A%D9%88%D8%AF.mp3",
        "title": "صامضا شامخا رغم القيود.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%B5%D8%A8%D8%B1%D8%A7%20%D9%8A%D8%A7%20%D8%A3%D9%82%D8%B5%D9%89.mp3",
        "title": "صبرا يا أقصى.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%B5%D8%A8%D8%B1%D8%A7%20%D9%8A%D8%A7%20%D9%86%D9%81%D8%B3%D9%8A.mp3",
        "title": "صبرا يا نفسي.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%B5%D8%B1%D8%AE%D9%88%D8%A7%20%28%20%D8%B3%D9%88%D8%B1%D9%8A%D8%A7%29.mp3",
        "title": "صرخوا ( سوريا).mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%B6%D8%A7%D9%82%20%D8%A7%D9%84%D9%81%D8%B6%D8%A7%D8%A1%20%D9%8A%D8%A7%20%D9%86%D8%A7%D8%B3.mp3",
        "title": "ضاق الفضاء يا ناس.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%B7%D9%88%D9%84%20%D8%A7%D9%84%D8%A3%D9%85%D9%84%20%D8%A5%D9%86%D8%B4%D8%A7%D8%AF.mp3",
        "title": "طول الأمل إنشاد.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%B9%D8%AF%D8%B1%D8%A7%20%D8%A3%D8%A8%D9%8A%20%D8%B9%D8%B4%D9%82%D8%AA%20%D8%A7%D9%84%D8%AC%D9%87%D8%A7%D8%AF.mp3",
        "title": "عدرا أبي عشقت الجهاد.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%B9%D8%B1%D9%81%D8%AA%20%D8%A7%D9%84%D9%84%D9%87.mp3",
        "title": "عرفت الله.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%B9%D8%B4%D9%82%D8%AA%20%D8%A3%D9%86%D8%BA%D8%A7%D9%85%20%D8%A7%D9%84%D8%AC%D9%87%D8%A7%D8%AF.mp3",
        "title": "عشقت أنغام الجهاد.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%B9%D9%84%D9%89%20%D8%A7%D9%84%D8%AC%D8%AF%D8%B1%D8%A7%D9%86.MP3",
        "title": "على الجدران.MP3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%B9%D9%84%D9%89%20%D8%AF%D8%B1%D8%A8%20%D8%A7%D9%84%D8%AC%D9%87%D8%A7%D8%AF%20%D9%84%D9%86%D8%A7%20%D8%AA%D8%A8%D8%A7%D8%AB.mp3",
        "title": "على درب الجهاد لنا تباث.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%B9%D9%84%D9%89%20%D8%AF%D8%B1%D8%A8%20%D8%A7%D9%84%D8%AE%D9%84%D8%A7%D9%81%D8%A9%20%D9%88%20%D8%A7%D9%84%D8%B1%D8%B4%D8%A7%D8%AF.mp3",
        "title": "على درب الخلافة و الرشاد.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%B9%D9%88%D8%AF%20%D8%B9%D9%84%D9%8A%20%D8%A7%D9%84%D8%B3%D9%87%D8%B1.mp3",
        "title": "عود علي السهر.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%BA%D8%B1%D8%A8%D8%A7%D8%A1%202.mp3",
        "title": "غرباء 2.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D8%BA%D9%88%D8%B7%D8%A9%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%B4%D8%A7%D9%85.mp3",
        "title": "غوطة في الشام.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D9%81%D8%A7%D8%AE%D8%AA%D8%B1%20%D9%84%D8%B9%D8%A8%D8%AF%D9%83%20%D9%85%D9%8A%D8%AA%D8%A9%20%D8%AA%D8%B1%D8%B6%D9%89%20%D8%A8%D9%87%D8%A7.mp3",
        "title": "فاختر لعبدك ميتة ترضى بها.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D9%81%D8%A7%D8%B1%D8%B3%20%D8%B4%D9%82%20%D8%B5%D8%AF%D8%B1%20%D8%A7%D9%84%D9%84%D9%8A%D9%84.mp3",
        "title": "فارس شق صدر الليل.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D9%81%D8%A7%D9%84%D8%BA%D8%B1%D8%A8%20%D8%B9%D8%AF%D9%88%20%D9%83%D8%AA%D8%A7%D8%A8%D9%8A.mp3",
        "title": "فالغرب عدو كتابي.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D9%81%D8%AA%D8%AD%D8%AA%20%D8%AC%D9%86%D8%A7%D9%86%20%D8%A7%D9%84%D8%AE%D9%84%D8%AF%20%D9%84%D9%84%D8%A7%D8%A8%D8%B7%D8%A7%D9%84.MP3",
        "title": "فتحت جنان الخلد للابطال.MP3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D9%81%D8%AA%D9%8A%D8%A7%D9%86%D9%83%D9%85%20%D9%84%D9%85%20%D9%8A%D8%B1%D8%B9%D9%88%20%D8%A7%D9%84%D8%A5%D8%B3%D9%84%D8%A7%D9%85%20%D8%AF%D9%8A%D9%86.mp3",
        "title": "فتيانكم لم يرعو الإسلام دين.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D9%81%D8%AA%D9%8A%D8%A9%20%D8%A7%D9%84%D8%A5%D8%B3%D9%84%D8%A7%D9%85%20%D9%87%D8%A8%D9%88%D8%A7.mp3",
        "title": "فتية الإسلام هبوا.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D9%81%D8%B1%D8%B3%D8%A7%D9%86%20%D8%A7%D9%84%D9%85%D9%8A%D8%A7%D8%AF%D9%8A%D9%86.mp3",
        "title": "فرسان الميادين.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D9%81%D8%B1%D8%B4%D9%8A%20%D8%A7%D9%84%D8%AA%D8%B1%D8%A7%D8%A8%20%D9%8A%D8%B6%D9%85%D9%86%D9%8A.mp3",
        "title": "فرشي التراب يضمني.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D9%81%D9%8A%20%D9%83%D9%84%20%D8%A3%D8%B1%D8%B6%20%D9%84%D9%84%D8%A5%D9%84%D9%87%20%D9%81%D9%88%D8%A7%D8%B1%D8%B3.MP3",
        "title": "في كل أرض للإله فوارس.MP3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D9%81%D9%8A%20%D9%83%D9%84%20%D9%8A%D9%88%D9%85%20%D9%84%D9%84%D8%AC%D9%86%D8%A7%D9%86%20%D9%81%D9%88%D8%A7%D8%B1%D8%B3%20%D8%B4%D9%87%D8%AF%D8%A7%D8%A1%20%D8%B1%D8%A7%D8%B6%20%D8%B9%D9%86%D9%87%D9%85%20%D8%A7%D9%84%D8%B9%D9%84%D8%A7%D9%85.mp3",
        "title": "في كل يوم للجنان فوارس شهداء راض عنهم العلام.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D9%81%D9%8A%20%D9%85%D9%8A%D8%A7%D8%AF%D9%8A%D9%86%20%D8%A7%D9%84%D9%85%D9%86%D9%88%D9%86.mp3",
        "title": "في ميادين المنون.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D9%82%D8%A7%D9%84%20%D9%84%D9%84%D9%87%20%D8%A7%D8%B3%D8%AA%D8%AC%D8%A8%D8%AA.mp3",
        "title": "قال لله استجبت.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D9%82%D8%AF%20%D8%B1%D9%81%D8%B9%D9%86%D8%A7%20%D8%B1%D8%A7%D9%8A%D8%A9%20%D8%A7%D9%84%D8%A7%D8%B3%D9%84%D8%A7%D9%85%20%D8%A7%D8%AF%D9%8A%D9%86%D8%A7%20%D8%A7%D9%84%D9%82%D8%B3%D9%85.mp3",
        "title": "قد رفعنا راية الاسلام ادينا القسم.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D9%82%D8%AF%20%D9%81%D8%A7%D8%B1%D9%82%D9%88%D8%A7%20%D9%87%D8%AF%D9%87%20%D8%A7%D9%84%D8%AD%D9%8A%D8%A7%D8%A9.mp3",
        "title": "قد فارقوا هده الحياة.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D9%82%D8%AF%20%D9%81%D8%B2%D8%AA%20%D9%8A%D8%A7%20%D8%BA%D9%86%D8%AF%D8%B1.MP3",
        "title": "قد فزت يا غندر.MP3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D9%82%D8%B3%D9%85%D8%A7%20%D8%B3%D8%AA%D9%87%D8%B2%D9%85.mp3",
        "title": "قسما ستهزم.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D9%82%D8%B5%D9%8A%D8%AF%D8%A9%20%D8%A3%D9%86%D8%A7%D8%AF%D9%8A%D9%83%D9%85.mp3",
        "title": "قصيدة أناديكم.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D9%82%D8%B5%D9%8A%D8%AF%D8%A9%20%D9%84%D9%84%D9%87%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A2%D9%81%D8%A7%D9%82%20%D8%A2%D9%8A%D8%A7%D8%AA%20%D8%B9%D8%A8%D8%AF%20%D8%A7%D9%84%D9%88%D8%A7%D8%AD%D8%AF%20%D8%A7%D9%84%D9%85%D8%BA%D8%B1%D8%A8%D9%8A.mp3",
        "title": "قصيدة لله في الآفاق آيات عبد الواحد المغربي.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D9%82%D9%84%20%D9%84%D8%A8%D8%A7%D8%BA%20%D9%86%D8%A7%D9%84%20%D9%85%D9%86%D9%87.MP3",
        "title": "قل لباغ نال منه.MP3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D9%82%D9%84%D8%A8%20%D9%83%D8%B3%D9%8A%D8%B1.MP3",
        "title": "قلب كسير.MP3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D9%82%D9%84%D8%A8%D9%8A%20%D8%A8%D9%83%D9%89%20%D9%85%D8%AA%D8%B3%D8%A7%D8%A6%D9%84%D8%A7%20%D8%B9%D9%86%20%D8%A5%D8%AE%D9%88%D8%AA%D9%8A%20%D8%A7%D9%84%D8%A5%D9%8A%D9%85%D8%A7%D9%86%D9%8A.mp3",
        "title": "قلبي بكى متسائلا عن إخوتي الإيماني.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D9%83%D8%A7%D9%86%20%D9%81%D9%8A%20%D9%85%D8%B5%D8%B1%20%D8%A7%D9%85%D9%8A%D8%B1.mp3",
        "title": "كان في مصر امير.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D9%83%D8%AA%D8%A7%D8%A6%D8%A8%20%D8%A8%D8%A8%D9%8A%D8%AA%20%D8%A7%D9%84%D9%85%D9%82%D8%AF%D8%B3.mp3",
        "title": "كتائب ببيت المقدس.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D9%83%D8%AA%D8%A8%D8%AA%20%D8%B9%D8%B2%D8%A9%20%D8%A7%D9%85%D8%AA%D9%8A%20%D9%81%D9%8A%20%D8%B9%D8%B2%D8%AA%D9%8A.mp3",
        "title": "كتبت عزة امتي في عزتي.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D9%83%D8%AA%D8%A8%D8%AA%20%D9%82%D8%B5%D9%8A%D8%AF%D8%AA%D9%8A.MP3",
        "title": "كتبت قصيدتي.MP3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D9%83%D8%AA%D8%A8%D9%86%D8%A7%20%D8%A8%D8%A7%D9%84%D8%AF%D9%85%20%D8%A7%D9%84%D8%BA%D8%A7%D9%84%D9%8A%20%D8%A8%D9%8A%D8%A7%D9%86%D8%A7.mp3",
        "title": "كتبنا بالدم الغالي بيانا.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D9%83%D9%81%D9%89%20%D9%8A%D8%A7%20%D9%86%D9%81%D8%B3.MP3",
        "title": "كفى يا نفس.MP3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D9%83%D9%85%20%D9%84%D9%8A%D9%84%D8%A9%20%D8%A7%D9%88%D8%AF%D8%B9%D8%AA%D9%87%D8%A7%20%D9%81%D9%8A%20%D8%B4%D9%87%D9%88%D8%A9%20%D8%A7%D8%B7%D8%B9%D8%AA%D9%87%D8%A7.mp3",
        "title": "كم ليلة اودعتها في شهوة اطعتها.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D9%83%D9%86%D8%A7%20%D8%AC%D8%A8%D8%A7%D9%84%D8%A7.mp3",
        "title": "كنا جبالا.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D9%83%D9%86%D8%AA%20%D8%B9%D8%A8%D8%AF%D8%A7%20%D9%81%D9%8A%20%D9%82%D9%8A%D9%88%D8%AF%20%D8%A7%D9%84%D8%AF%D9%86%D8%A8%20%D9%85%D9%85%D9%84%D9%88%D9%83%D8%A7%20%D8%B1%D9%82%D9%8A%D9%82%D8%A7.mp3",
        "title": "كنت عبدا في قيود الدنب مملوكا رقيقا.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D9%83%D9%8A%20%D8%A3%D8%A8%D8%AF%D9%84%20%D9%85%D8%A3%D8%AA%D9%85%D8%A7%20%D8%A3%D8%B9%D8%B1%D8%A7%D8%B3%D9%8A.mp3",
        "title": "كي أبدل مأتما أعراسي.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D9%84%D8%A7%20%D8%A3%D8%A8%D8%A7%D9%84%D9%8A%20%D8%A8%D8%A7%D9%84%D8%B3%D9%88%D8%A7%D8%AF.mp3",
        "title": "لا أبالي بالسواد.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D9%84%D8%A7%20%D8%AA%D8%A3%D8%B3%D9%81%D9%86%20%D8%B9%D9%84%D9%89%20%D8%A7%D9%84%D8%AF%D9%86%D9%8A%D8%A7.mp3",
        "title": "لا تأسفن على الدنيا.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D9%84%D8%A7%20%D8%AA%D8%A8%D9%82%20%D9%8A%D9%87%D9%88%D8%AF%D8%A7.mp3",
        "title": "لا تبق يهودا.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D9%84%D8%A7%20%D8%AA%D8%A8%D9%83%D9%8A%20%D8%A7%D9%85%D9%8A%20%D9%81%D8%A7%D9%84%D8%AD%D9%8A%D8%A7%D8%A9%20%D8%B1%D8%AE%D9%8A%D8%B5%D8%A9.mp3",
        "title": "لا تبكي امي فالحياة رخيصة.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D9%84%D8%A7%20%D8%AA%D8%B3%D8%A3%D9%84%D9%86%D9%8A%20%D8%B9%D9%86%20%D8%AD%D9%8A%D8%A7%D8%AA%D9%8A.mp3",
        "title": "لا تسألني عن حياتي.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D9%84%D8%A7%20%D8%B9%D8%B4%D9%86%D8%A7%20%D8%AD%D9%8A%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AF%D9%84%20%D9%86%D8%AE%D8%B4%D9%89%20%D8%A7%D9%84%D8%A7%D9%86%D8%AF%D8%A7%D9%84.mp3",
        "title": "لا عشنا حيات الدل نخشى الاندال.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D9%84%D8%AD%D8%B1%D8%A7%D8%B3%20%D8%A7%D9%82%D8%B5%D8%A7%D9%86%D8%A7%20%D9%88%D9%82%D9%81%D8%A9%20%D8%A7%D9%83%D8%A8%D8%A7%D8%B1.mp3",
        "title": "لحراس اقصانا وقفة اكبار.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D9%84%D8%B3%D8%AA%20%D8%A3%D8%B1%D8%B6%D9%89%20%D8%A7%D9%84%D9%85%D9%82%D8%A7%D9%85%20%D9%81%D9%8A%20%D8%B5%D9%81%D9%88%D9%81%20%D8%A7%D9%84%D8%B7%D8%BA%D8%A7%D8%AA.mp3",
        "title": "لست أرضى المقام في صفوف الطغات.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D9%84%D8%B3%D9%88%D9%81%20%D8%A3%D8%B9%D9%88%D8%AF%20%D9%8A%D8%A7%20%D8%A7%D9%85%D9%8A.mp3",
        "title": "لسوف أعود يا امي.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D9%84%D8%BA%D9%8A%D8%B1%20%D8%A7%D9%84%D9%84%D9%87%20%D9%84%D9%86%20%D9%86%D8%B1%D9%83%D8%B9.mp3",
        "title": "لغير الله لن نركع.mp3"
    },
    {
        "href": "https://archive.org/download/20200213_20200213_1515/%D9%84%D9%82%D9%86%D9%8A%20%D8%A7%D9%84%D8%B7%D8%A7%D8%BA%D9%8A%20%D8%AF%D8%B1%D9%88%D8%B3%D8%A7%D9%8B.mp3",
        "title": "لقني الطاغي دروساً.mp3"
    }
]