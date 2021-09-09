import Nav from "./Nav";
import Head from "next/head";
import Image from "next/image";
import Footer from './Footer'

const Layout = ({ pageTitle, children }) => (
  <body>
    <Head>
      {/* <Image src="/logo.svg" alt="logo" height={50} width={50} /> */}
      <title>{pageTitle}</title>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"
        crossOrigin="anonymous"
      />
    </Head>
    <Nav />
    {children}
    <Footer />
  </body>
);

export default Layout;
