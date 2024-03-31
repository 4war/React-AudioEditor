import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import cls from './AppLink.module.scss';
import { FC } from 'react';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = ({
    className,
    to,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
}: AppLinkProps) => {
    return (
        <Link className={classNames(cls.class, {}, [className, cls[theme]])} to={to} {...otherProps}>
            {children}
        </Link>
    );
};
