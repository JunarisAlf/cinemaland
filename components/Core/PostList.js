import Image from 'next/image';
import Link from 'next/link';
export default function PostList({data}) {
    return (
        <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="blog-item-style-1 blog-item-style-3">
                
                <div className="blog-it-infor  my-post">
                    <h3>
                        <Link href={'blog/' + data.slug}>
                            <a >
                                {data.title}
                            </a>
                        </Link>
                        
                    </h3>
                    <span className="time">{data.date}</span>
                    <p>
                        {data.preview}
                    </p>
                </div>
            </div>
        </div>
    );
}
