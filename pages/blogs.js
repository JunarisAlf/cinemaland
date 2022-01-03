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
            title: 'Dosen Muda Berbakat UMRI, Berhasil Raih Prestasi sebagai Best Paper dalam “International Character Education and Digital Learning (ICCEDL 2021)”',
            image: '/post-image-1',
            date: '30 December 2021',
            preview: "UMRI kembali mencetak prestasi melalui salah satu dosen muda berbakat, Dr Deprizon M.Pd.I. Beliau terpilih sebagai Best Paper dalam “International Character Education and Digital Learning (ICCEDL 2021)” dengan judul artikel: Characteristics the Development Tahfizhul-Qur'an Screening for Students of the PGMI study program Muhammadiyah University Riau. Konfrensi ini dilaksanakan pada Sabtu, 11 Desember 2021... ",
            slug: 'dosen-muda-berbakat-umri-berhasil-raih-prestasi-sebagai-best-paper-dalam-international-character-education-and-digital-learning-iccedl-2021'
        },
        {
            key:'2',
            title: 'UMRI Kampus Impian',
            image: '/post-image-2.png',
            date: '28 December 2021',
            preview: 'Belum genap berusia 10 tahun, Universitas Muhammadiyah Riau (UMRI) sudah berkembang sangat pesat baik dari segi kualitas pendidikan maupun infrastruktur. UMRI jelas terbukti telah dipercaya masyarakat. Berada di dua lokasi berbeda dengan jumlah delapan fakultas, UMRI siap mendidik dan menciptakan lulusan yang berkualitas.',
            slug: 'universitas-muhammadiyah-riau'
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
