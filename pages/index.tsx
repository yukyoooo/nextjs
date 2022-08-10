import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'

const H1 = styled.h1`
    color: red;
`
const Badge = styled.span`
    padding: 8px 16px;
    font-weight: bold;
    text-align: center;
    color: white;
    background: red;
    bourder-radius: 16px;
`

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                ...
                <H1>
                    Welcome to <a href="https://nextjs.org">Next.js!</a>
                </H1>
                <Badge>Hi hogehoge!</Badge>
            </main>
        </div>
    )
}

export default Home
