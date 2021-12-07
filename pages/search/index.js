import Preload from '../../components/Utilities/Preload';
import Header from '../../components/Core/Header';
import Head from 'next/head';
import Hero from '../../components/Core/Hero';
import NotFound from '../../components/Sub/Search/NotFound';
import MovieSearchResult from '../../components/Core/MovieSearchResult';
import PeopleSearchResult from '../../components/Core/PeopleSearchResult';

import { useRouter } from 'next/dist/client/router';

export async function getServerSideProps(context) {
    let result = {};
    if (context.query.movie) {
        const resSearch = await fetch(
            `https://api.themoviedb.org/3/search/movie?query=${context.query.movie}&api_key=${process.env.api_key}`
        );
        result = await resSearch.json();

        return {
            props: { result, keyword: context.query.movie, kind: Object.keys(context.query)[0] },
        };
    } else if (context.query.people) {
        const resSearch = await fetch(
            `https://api.themoviedb.org/3/search/person?query=${context.query.people}&api_key=${process.env.api_key}`
        );
        result = await resSearch.json();
        return {
            props: { result, keyword: context.query.people, kind: Object.keys(context.query)[0] },
        };
    }
    return {
        redirect: {
            destination: '/',
            permanent: false,
        },
    };
}

export default function Search({ result, keyword, kind}) {
    const route = useRouter();
    let resultUI = <MovieSearchResult result={result} />;
    if (result.results.length !== 0) {
        if (route.query.people) {
            resultUI = <PeopleSearchResult result={result} />;
        }
    } else {
        resultUI = <NotFound />;
    }

    return (
        <div>
            <Head>
                <title>Search</title>
            </Head>
            {/* <Preload /> */}
            <Header  keywordURL={keyword} kindURL={kind}/>
            <Hero keyword={keyword} />
            {resultUI}
        </div>
    );
}
