import Link from 'next/link'
export default function Pagination({page, url}) {
    page = parseInt(page);
    const pagePrev = page-1;
    const pageNext = page+1;

    return (
        <div className="my-pagination">
            <Link  href={url+pagePrev}>
                <a>Prev</a>
            </Link>
            <Link  href={url+pageNext}>
                <a>Next</a>
            </Link>
        </div>
    )
}
