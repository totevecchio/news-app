import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layout";

const Index = () => (
    <Layout
        pageTitle="Home"
        footer={`Copyright ${new Date().getFullYear()}`}
    >
    <h2>Hi there, this is my React/NextJs news app, hope you enjoy it!</h2>
    <div className='home'>
            Hi my name is Sebastian Vecchio and i`m a Jr FullStack developer. 
            I built this Front end app with react and nextJs. 
            It`s connected to ALGOLIA api for the "Hacker News" you `ll se displayed in the News section.
        </div>
    <div className="main">
        </div>
    </Layout>
);

export default Index;
