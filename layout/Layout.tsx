import styles from './Layout.module.css';

import cn from 'classnames';
import { LayoutProps } from './Layout.props';
import { Header } from './Header/Header';
import { Sidebar } from './Sidebar/Sidebar';
import { Footer } from './Footer/Footer';
import { FunctionComponent } from 'react';


// Страница имеет header, центральную часть в которой: левый saidebar и основной вывод, footer
const Layout = ({children }: LayoutProps): JSX.Element => {
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

// HOC функция, которая получает компонент и оборачивает его передавая ему props
export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <Layout>
                <Component {...props} />
            </Layout>  
        )
    }
}