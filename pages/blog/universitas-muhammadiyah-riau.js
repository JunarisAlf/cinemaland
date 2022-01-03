import Header from '../../components/Core/Header';
import Head from 'next/head';
import Hero from '../../components/Core/HeroForAll';
import Image from 'next/image';


export default function Post() {
    return (
        <div>
            <Head>
                <title>UMRI - Universitas Muhammadiyah Riau</title>
            </Head>
            <Header />
            <Hero title="Blog" />
            <div className="page-single">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="blog-detail-ct my-post-detail">
                                <h1>UMRI Kampus Impian</h1>
                                <span className="time">30 December 2021</span>
                                <Image src='/post-image-2.png' alt="" height={470} width={870} />
                                <a href="https://www.umri.ac.id"></a>
                                <p>
                                Belum genap berusia 20 tahun, <a href="https://www.umri.ac.id">Universitas Muhammadiyah Riau (UMRI)</a>  sudah berkembang sangat pesat baik dari segi kualitas pendidikan maupun infrastruktur. <a href="https://www.umri.ac.id">UMRI</a>  jelas terbukti telah dipercaya masyarakat. Berada di dua lokasi berbeda dengan jumlah delapan fakultas, <a href="https://www.umri.ac.id">UMRI</a> siap mendidik dan menciptakan lulusan yang berkualitas.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
