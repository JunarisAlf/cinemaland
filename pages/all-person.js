import Header from '../components/Core/Header';
import Head from 'next/head';
import Hero from '../components/Core/HeroForAll';
import PeopleSearchResult from '../components/Core/PeopleSearchResult';

import { useRouter } from 'next/dist/client/router';
import Pagination from '../components/Core/Pagination';

export async function getServerSideProps(context) {
    if(context.query.page <= 0){
        context.query.page = 1;
    }else{
        context.query.page = context.query.page ? context.query.page : 1;
    }
    const page = context.query.page * 4;
    const resPerson1 = await fetch(
        `https://api.themoviedb.org/3/person/popular?api_key=${process.env.api_key}&page=${page-3}`
    );
    const resPerson2 = await fetch(
        `https://api.themoviedb.org/3/person/popular?api_key=${process.env.api_key}&page=${page-2}`
    );
    const resPerson3 = await fetch(
        `https://api.themoviedb.org/3/person/popular?api_key=${process.env.api_key}&page=${page-1}`
    );
    const resPerson4 = await fetch(
        `https://api.themoviedb.org/3/person/popular?api_key=${process.env.api_key}&page=${page}`
    );
    const result1 = await resPerson1.json();
    const result2 = await resPerson2.json();
    const result3 = await resPerson3.json();
    const result4 = await resPerson4.json();

    const results = {
        results: [...result1.results, ...result2.results, ...result3.results, ...result4.results]
    }

    return {
        props: { results, page:context.query.page},
    };
    
}

export default function AllPerson({ results, page}) {
    const route = useRouter();
    return (
        <div>
            <Head>
                <title>All Person</title>
            </Head>
            <Header/>
            <Hero title="All Person" />
            <PeopleSearchResult result={results} />
            <Pagination url="/all-person?page=" page={page}/>
        </div>
    );
}
