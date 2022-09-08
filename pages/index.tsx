import type { NextPage } from "next"
import Head from "next/head"
import Content from "../components/Content"
import Footer from "../components/Footer"

const Home: NextPage = () => {
    return (
        <div className="flex min-h-screen flex-col justify-between mx-auto bg-violet background">
            <Head>
                <title>Huddle Landing Page</title>
                <link rel="icon" href="/favicon-32x32.png" />
            </Head>
            <Content />
            <Footer />
        </div>
    )
}

export default Home
