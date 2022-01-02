import Header from '../components/Core/Header';
import Head from 'next/head';
import Hero from '../components/Core/HeroForAll';
import MovieSearchResult from '../components/Core/MovieSearchResult';
import { useRouter } from 'next/dist/client/router';
import Pagination from '../components/Core/Pagination';
import Image from 'next/image';
import PostList from '../components/Core/PostList';
export async function getStaticProps() {
    const posts = [
        {
            key:'1',
            title: 'title',
            image: '/public/images/post1.jpg',
            date: '30 December 2021',
            preview: 'lorem ipsum dolor sit emet lorem ipsum dolor sit emet lorem ipsum dolor sit emet lorem ipsum dolor sit emet lorem ipsum dolor sit emet lorem ipsum dolor sit emet lorem ipsum dolor sit emet'
        },
        {
            key:'2',
            title: 'lorem ipsum dolor sit emet lorem',
            image: '/public/images/post2.jpg',
            date: '30 December 2021',
            preview: 'lorem ipsum dolor sit emet lorem ipsum dolor sit emet lorem ipsum dolor sit emet lorem ipsum dolor sit emet lorem ipsum dolor sit emet lorem ipsum dolor sit emet lorem ipsum dolor sit emet'
        }
    ];
    return {
        props: { posts },
    };
}

export default function Blogs({posts}) {
    return (
        <div>
            <Head>
                <title>hallocinema - Blog</title>
            </Head>
            <Header />
            <Hero title="Blog" />
            <div className="page-single">
                <div className="container">
                    <div className="row">
                        {posts.map(data => (
                            <PostList key={data.key} data={data}/>
                        ))}
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
