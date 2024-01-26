import { classNames } from 'helpers/classNames/classNames';
import cls from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

interface NavbarProps {
    className?: string;
}

const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.navbar)}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={''} className={classNames(cls.mainLink)}>Главная</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>О сайте</AppLink>
            </div>
        </div>
    );
};

export default Navbar;
