import Link from 'next/link'
import Image from 'next/image'

export default function ImageSticky() {
    return (
        <div className="col-md-4 col-sm-12 col-xs-12">
            <div className="movie-img   ">
                <Image src="/images/uploads/movie-single.jpg" alt="" width={340} height={521}/>
                <div className="movie-btn">
                    <div className="btn-transform transform-vertical red">
                        <div>
                            <Link href="#">
                                <a  className="item item-1 redbtn">
                                    <i className="ion-play"></i> Watch Trailer
                                </a>
                            </Link>
                            
                        </div>
                        <div>
                            <Link href="https://www.youtube.com/embed/o-0hcF97wy0">
                                <a className=" item item-2 redbtn fancybox-media hvr-grow"  >
                                    <i className="ion-play"></i>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="btn-transform transform-vertical">
                        <div>
                            <Link href="#" >
                                <a className="item item-1 yellowbtn">
                                    <i className="ion-card"></i> Buy ticket
                                </a>
                            </Link>
                            
                        </div>
                        <div>
                            <Link href="#">
                                <a  className="item item-2 yellowbtn">
                                    <i className="ion-card"></i>
                                </a>
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
