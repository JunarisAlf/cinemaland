import Header from '../../components/Core/Header';
import Head from 'next/head';
import Hero from '../../components/Core/HeroForAll';
import Image from 'next/image';

export async function getStaticPaths() {
    return {
        paths: [
            {
                params: { id: 'universitas-muhammadiyah-riau' },
            },
            {
                params: { id: 'tentang-universitas-muhammadiyah-riau' },
            },
        ],
        fallback: false,
    };
}
export async function getStaticProps({ params }) {
    let post = {};
    if (params.id == 'universitas-muhammadiyah-riau') {
        post = {
            id: 'tentang-universitas-muhammadiyah-riau',
            title: ' Tentang Universitas Muhammadiyah Riau',
            date: '20 December 2021',
            img: '/images/uploads/blog-detail.jpg',
            content: `<p>
                        Joss Whedon has a little bit of a history
                        with superhero movies, and for creating
                        layered female characters. After his
                        documented frustrations with Wonder Woman,
                        he's getting another chance at the DC
                        Extended Universe and Warner Bros., closing
                        in on a deal to write direct and produce a
                        Batgirl movie.
                    </p>

                    <p>
                        It's a somewhat surprising, but welcome
                        move, given that Whedon has taken a long
                        break to write something original, but has
                        now pivoted to focus on developing the
                        Batgirl project. First appearing in 1967 in
                        Gardner Fox and Carmine Infantino's story
                        run The Million Dollar Debut Of Batgirl,
                        she's the superhero alias of Barbara Gordon,
                        daughter of Gotham City Police Commissioner
                        James Gordon. So we can likely expect J.K.
                        Simmons' take on Gordon to appear along with
                        other Bat-related characters.
                    </p>

                    <p>
                        Based on Lissa Evans’ novel “Their Finest
                        Hour and a Half” and directed by Lone
                        Scherfig (“An Education”), the film is set
                        in London during World War II when the
                        British ministry was utilizing propaganda
                        films to boost morale. Arterton plays Catrin
                        Cole, a scriptwriter who is brought on to
                        handle the women’s dialogue — commonly
                        referred to as “the nausea.” The film,
                        opening this week, features an outstanding
                        ensemble, including Bill Nighy as a
                        washed-up actor and Sam Claflin as Catrin’s
                        fellow writer and sparring partner.
                    </p>`,
        };
    } else if (params.id == 'tentang-universitas-muhammadiyah-riau') {
        post = {
            id: 'tentang-universitas-muhammadiyah-riau',
            title: ' Tentang Universitas Muhammadiyah Riau',
            date: '20 December 2021',
            img: '/images/uploads/blog-detail.jpg',
            content: `<p>
                        Joss Whedon has a little bit of a history
                        with superhero movies, and for creating
                        layered female characters. After his
                        documented frustrations with Wonder Woman,
                        he's getting another chance at the DC
                        Extended Universe and Warner Bros., closing
                        in on a deal to write direct and produce a
                        Batgirl movie.
                    </p>

                    <p>
                        It's a somewhat surprising, but welcome
                        move, given that Whedon has taken a long
                        break to write something original, but has
                        now pivoted to focus on developing the
                        Batgirl project. First appearing in 1967 in
                        Gardner Fox and Carmine Infantino's story
                        run The Million Dollar Debut Of Batgirl,
                        she's the superhero alias of Barbara Gordon,
                        daughter of Gotham City Police Commissioner
                        James Gordon. So we can likely expect J.K.
                        Simmons' take on Gordon to appear along with
                        other Bat-related characters.
                    </p>

                    <p>
                        Based on Lissa Evans’ novel “Their Finest
                        Hour and a Half” and directed by Lone
                        Scherfig (“An Education”), the film is set
                        in London during World War II when the
                        British ministry was utilizing propaganda
                        films to boost morale. Arterton plays Catrin
                        Cole, a scriptwriter who is brought on to
                        handle the women’s dialogue — commonly
                        referred to as “the nausea.” The film,
                        opening this week, features an outstanding
                        ensemble, including Bill Nighy as a
                        washed-up actor and Sam Claflin as Catrin’s
                        fellow writer and sparring partner.
                    </p>`,
        };
    }
    return {
        props: { post },
    };
}

export default function Blog({ post }) {
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
                                <h1>{post.title}</h1>
                                <span className="time">{post.date}</span>
                                <img src={post.img} alt="" />
                                <div dangerouslySetInnerHTML={{__html: post.content}} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
