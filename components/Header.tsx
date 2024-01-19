import NasaLogo from '@/assets/nasalogo.jpg';
import GitLogo from '@/assets/githublogo.jpg';
import Image from 'next/image';

import s from './Header.module.css';

export const Header = () => {
    return (
        <header className={s.header}>
            <div className="header__logo">
                <Image src={NasaLogo} alt="Nasa logo" />
            </div>
            <div className="header__git-link">
                <a href="#">
                    <Image src={GitLogo} alt='Link to repository' />
                </a>
            </div>
        </header>
    );
}