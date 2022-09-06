import type { NextPage } from "next"
import Head from "next/head"
import Component from "../components/Component"
import Footer from "../components/Footer"
import Header from "../components/Header"

const Home: NextPage = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-2">
            <Head>
                <title>Next App with Tailwind CSS</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <Component />
            <Footer />
        </div>
    )
}

export default Home
