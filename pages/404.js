import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.scss';

export default function Custom404() {
    return (
        <Layout>
            <Head>
                <title>Page not found</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>404 - Page not found</h1>
                <p>
                    The page you were looking for cannot be found.
                </p>
            </article>
        </Layout>
    );
}