import Layout from "../components/Layout";

const Error = ({ message }) => (
    <Layout pageTitle="Error">
        <div>
            <p>{message}</p>
        </div>
    </Layout>
);

export default Error;
