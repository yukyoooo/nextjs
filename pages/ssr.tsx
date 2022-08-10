import {GetServerSideProps, NextPage} from "next";
import Head from "next/head";
import {Simulate} from "react-dom/test-utils";
import contextMenu = Simulate.contextMenu;

type SSRProps = {
    message: string
}

const SSR: NextPage<SSRProps> = (props) => {
    const {message} = props

    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <p>
                    このページはサーバーサイドレンダリングによってアクセス時にサーバーで描写されたページです
                </p>
                <p>{message}</p>
            </main>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps<SSRProps> = async (
    context
) => {
    const timestamp = new Date().toLocaleString()
    const message = `${timestamp}にこのページのgetServerSidePropsが実行されました`
    console.log(message)

    return {
        props: {
            message,
        },
    }
}

export default SSR