import Header from '../../components/Core/Header';
import Head from 'next/head';
import Hero from '../../components/Core/HeroForAll';
import Image from 'next/image';


export default function Blog() {
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
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="blog-detail-ct my-post-detail">
                                <h1>Visi dan Misi Kampus UMRI</h1>
                                <span className="time">2 December 2021</span>
                                <Image src='/images/uploads/blog-detail.jpg' alt="" height={470} width={870} />
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta laudantium, officiis vitae assumenda delectus exercitationem, facere ex quam voluptate beatae eligendi quaerat aut suscipit nobis! Aspernatur illum delectus cum explicabo.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
