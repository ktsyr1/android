import Layout from 'theme/layout'
import '../styles/globals.css'
import 'styles/theme.sass'
import 'styles/theme@v2.sass'


import NProgress from 'nprogress'; //nprogress module 

import 'nprogress/nprogress.css';
import Router, { useRouter } from 'next/router';

NProgress.configure({
    showSpinner: true,
    trickleSpeed: 200,
    minimum: 0.8,
    easing: 'ease',
    trickle: true,
    trickleSpeed: 200,
    trickleFadeSpeed: 200, // speed of fade out
    trickleRate: 1,
})
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
    let { route } = useRouter()
    if (route === "/apps/[app]/embed") {
        return (
            <Component {...pageProps} />
        )
    } else return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp
