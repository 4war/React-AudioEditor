import './styles/index.scss';
import { Suspense } from 'react';
import { classNames } from '../helpers/classNames/classNames';
import { useTheme } from './providers/ThemeProvider';
import AppRouter from './providers/router/ui/AppRouter';
import { Navbar } from 'widgets/Navbar';

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <button onClick={toggleTheme}>Toggle</button>
            <AppRouter/>
        </div>
    );
};

export default App;