import Header from '../../components/Core/Header';
import Head from 'next/head';
import Hero from '../../components/Core/HeroForAll';
import Image from 'next/image';


export default function Post() {
    return (
        <div>
            <Head>
                <title>Blog - Dosen Muda Berbakat UMRI, Berhasil Raih Prestasi sebagai Best Paper dalam “International Character Education and Digital Learning (ICCEDL 2021)”</title>
            </Head>
            <Header />
            <Hero title="Blog" />
            <div className="page-single">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="blog-detail-ct my-post-detail">
                                <h1>Dosen Muda Berbakat UMRI, Berhasil Raih Prestasi sebagai Best Paper dalam “International Character Education and Digital Learning (ICCEDL 2021)”</h1>
                                <span className="time">30 December 2021</span>
                                <Image src='/post-image-1.png' alt="" height={470} width={870} />
                                <p>
                                <strong>UMRI-</strong> {`UMRI kembali mencetak prestasi melalui salah satu dosen muda berbakat, Dr Deprizon M.Pd.I. Beliau terpilih sebagai Best Paper dalam "International Character Education and Digital Learning (ICCEDL 2021)"" dengan judul artikel: Characteristics the Development Tahfizhul-Qur'an Screening for Students of the PGMI study program Muhammadiyah University Riau. Konfrensi ini dilaksanakan pada Sabtu, 11 Desember 2021. Diikuti peserta dari 4 negara dengan narasumber dari tim guru besar yang telah teruji sesuai kepakaran pada bidang Pendidikan. Lebih lanjut, Dr Dian Cita Sari dan Dr. Hanadyo Dardjito sebagai Ketua Panitia menjelaskan bahwa Konfrensi ini merupakan langkah di penghujung tahun 2021 untuk penataan karya penelitian berkelanjutan.`}
                                </p>
                                <p>
                                {`"Para pemakalah melakukan presentasi hasil penelitian untuk menerima lebih banyak pengembangan arah penelitian kedepannya," Kata Dr Ari Setiawan M.Pd. selaku ketua Asosiasi Dosen Lintas Negara. Hal ini menjadi solusi praktis dimasa pandemi, dimana kita senantiasa terikat Protokol kesehatan.`}
                                </p>

                                <p>
                                Dalam konfrensi ini juga dilakukan beberapa kolaborasi Memorandum of understanding (MOU)yang menjadi dasar pembekalan multi-tahun dalam optimalisasi aneka program tridarma perguruan tinggi. Fokus manfaat dari konfrensi ini tidak hanya sebagai ruang publikasi karya, tapi juga wahanajaringan pertemanan dari berbagai institusi baik dalam negeri maupun luar negeri.
                                </p>
                                <p>Sumber : <a href="https://umri.ac.id/baca/berita/id/1639538958">https://umri.ac.id/baca/berita/id/1639538958</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
