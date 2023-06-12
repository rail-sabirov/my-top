import styles from './Layout.module.css';

import cn from 'classnames';
import { LayoutProps } from './Layout.props';
import { Header } from './Header/Header';
import { Sidebar } from './Sidebar/Sidebar';
import { Footer } from './Footer/Footer';


// Страница имеет header, центральную часть в которой: левый saidebar и основной вывод, footer

export const Layout = ({children }: LayoutProps): JSX.Element => {
    return (<>
        <Header />
        <div>
            <Sidebar />
            <div>
                {children}
            </div>
        </div>
        <Footer />
    </>);
}

