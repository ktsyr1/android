
import axios from 'axios';
import Card from 'components/apps/card';
import SEO from 'lib/SEO';
import { Component } from 'react'
import { Input } from 'theme/forms';
import Cookie from 'js-cookie'
import { useRouter } from 'next/router';

export async function getServerSideProps(ctx) {
    let { token } = ctx.req.cookies
    if (token) return { redirect: { permanent: false, destination: '/admin' } }
    else return { props: { data: " " } }
}

export default function Auth() {
let route = useRouter()
    async function login() {
        let query = q => document.querySelector(`[name="${q}"]`).value

        let URL = process.env.NEXT_PUBLIC_API
        let { data } = await axios.put(`${URL}/auth`, {
            email: query('email'),
            password: query('password')
        })
        if (data?.token) {
            Cookie.set('token', data.token)
            route.reload('/admin')
        }
    }
    let style = {
        btn: {
            border: '0',
            padding: '10px',
            boxShadow: '1px 5px 10px #bbb',
            borderRadius: '10px',
            marginBottom: '10px'
        }
    }
    return (
        <div className='box grid j' >
            <SEO title='تسجيل الدخول' />
            <div className='ui w-13 h-13 box col space'>
                <h1 style={{ textAlign: 'center', margin: '20px 0' }}>تسجيل الدخول</h1>
                <Input name='email' title='الايميل' style={style.btn} />
                <Input name='password' type='password' title='كلمة السر' style={style.btn} />
                <button className='btn w-full' onClick={login} >دخول</button>
            </div>
        </div>
    )
} 