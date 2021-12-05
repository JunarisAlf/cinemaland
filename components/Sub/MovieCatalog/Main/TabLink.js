import { useState } from 'react';
export default function TabLink({ setGenre }) {
    const [tabActive, setTabActive] = useState('tab1');
    return (
        <ul class="tab-links">
            <li
                className={tabActive == 'tab1' ? 'active' : 'non'}
                onClick={() => {
                    setTabActive('tab1');
                    setGenre(18);
                }}
            >
                <a href="#tab1">#drama</a>
            </li>
            <li
                className={tabActive == 'tab2' ? 'active' : 'non'}
                onClick={() => {
                    setTabActive('tab2');
                    setGenre(28);
                }}
            >
                <a href="#tab2"> #Action</a>
            </li>
            <li
                className={tabActive == 'tab3' ? 'active' : 'non'}
                onClick={() => {
                    setTabActive('tab3');
                    setGenre(16);
                }}
            >
                <a href="#tab3"> #Animation </a>
            </li>
            <li
                className={tabActive == 'tab4' ? 'active' : 'non'}
                onClick={() => {
                    setTabActive('tab4');
                    setGenre(878);
                }}
            >
                <a href="#tab4"> #Science Fiction</a>
            </li>
            <li
                className={tabActive == 'tab5' ? 'active' : 'non'}
                onClick={() => {
                    setTabActive('tab5');
                    setGenre(10749);
                }}
            >
                <a href="#tab4"> #Romance</a>
            </li>
        </ul>
    );
}
