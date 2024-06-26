import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(cls.navbar)}>
            <div className={cls.links}>

            </div>
        </div>
    );
};

export default Navbar;
