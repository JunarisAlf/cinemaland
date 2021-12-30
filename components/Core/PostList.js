import Image from 'next/image';
import Link from 'next/link';
export default function PostList({data}) {
    return (
        <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="blog-item-style-1 blog-item-style-3">
                
                <div class="blog-it-infor  my-post">
                    <h3>
                        <Link href="blogdetail.html">
                            <a >
                                {data.title}
                            </a>
                        </Link>
                        
                    </h3>
                    <span class="time">{data.date}</span>
                    <p>
                        {data.preview}
                    </p>
                </div>
            </div>
        </div>
    );
}
