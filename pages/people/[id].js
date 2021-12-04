import Preload from '../../components/Utilities/Preload';
import Header from '../../components/Core/Header';
import Head from 'next/head';
import PeopleSingleDetail from '../../components/Core/PeopleSingleDetail';

export default function People() {
    return (
        <div>
            <Head>
                <title>people</title>
            </Head>
            <Preload />
            <Header />
            <PeopleSingleDetail />
        </div>
    );
}
