import NasaLogo from '@/assets/nasalogo.jpg';
import GitLogo from '@/assets/githublogo.jpg';
import Image from 'next/image';

import s from './Header.module.css';
import { HeaderMenu } from './HeaderMenu';
import Link from 'next/link';

export const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.header__logo}>
                <Link href="/"><Image src={NasaLogo} alt="Nasa logo" /></Link>
                <HeaderMenu />
            </div>
            <div className="header__git-link">
                <a href="https://github.com/Les84Brest/nasa-apod-nextjs">
                    <Image src={GitLogo} alt='Link to repository' />
                </a>
            </div>
        </header>
    );
}