import { useState } from 'react';
import Link from 'next/link'


export default function TabLink({ setGenre }) {
    const [tabActive, setTabActive] = useState('tab1');
    return (
        <ul className="tab-links">
            <li
                className={tabActive == 'tab1' ? 'active' : 'non'}
                onClick={() => {
                    setTabActive('tab1');
                    setGenre(18);
                }}
            >
                <Link href="#tab1" style={{ textDecoration: 'none' }}>
                    <a >#drama</a>
                </Link>
               
            </li>
            <li
                className={tabActive == 'tab2' ? 'active' : 'non'}
                onClick={() => {
                    setTabActive('tab2');
                    setGenre(28);
                }}
            >
                <Link href="#tab2" style={{ textDecoration: 'none' }}>
                    <a > #Action</a>
                </Link>
            </li>
            <li
                className={tabActive == 'tab3' ? 'active' : 'non'}
                onClick={() => {
                    setTabActive('tab3');
                    setGenre(16);
                }}
            >
                <Link href="#tab3" style={{ textDecoration: 'none' }}>
                    <a > #Animation </a>
                </Link>
            </li>
            <li
                className={tabActive == 'tab4' ? 'active' : 'non'}
                onClick={() => {
                    setTabActive('tab4');
                    setGenre(878);
                }}
            >
                <Link href="#tab4" style={{ textDecoration: 'none' }}>
                    <a > #Science Fiction</a>
                </Link>
                
            </li>
            <li
                className={tabActive == 'tab5' ? 'active' : 'non'}
                onClick={() => {
                    setTabActive('tab5');
                    setGenre(10749);
                }}
            >
                <Link  href="#tab4" style={{ textDecoration: 'none' }}>
                    <a> #Romance</a>
                </Link>
                
            </li>
        </ul>
    );
}
