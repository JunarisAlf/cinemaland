import Preload from '../../../components/Utilities/Preload';
import Header from '../../../components/Core/Header';
import Head from 'next/head';
import Hero from '../../../components/Core/Hero';
import PeopleSearchResult from '../../../components/Core/PeopleSearchResult';

export default function PeopleSearch() {
    return (
        <div>
            <Head>
                <title>Search</title>
            </Head>
            <Preload />
            <Header />
            <Hero />
            <PeopleSearchResult />
        </div>
    );
}
