import './styles/index.scss';
import { classNames } from '../helpers/classNames/classNames';
import { useTheme } from './providers/ThemeProvider';
import AppRouter from './providers/router/ui/AppRouter';
import { Navbar } from 'widgets/Navbar';

const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <AppRouter/>
        </div>
    );
};

export default App;