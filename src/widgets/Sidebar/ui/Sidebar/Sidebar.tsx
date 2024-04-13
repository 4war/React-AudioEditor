import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import Button, { ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import fontawesome from '@fortawesome/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/fontawesome-free-solid';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/main-32.svg';
import AboutIcon from 'shared/assets/icons/about-32.svg';

interface SidebarProps {
    className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed((previous) => !previous);
    };

    fontawesome.library.add(faBars);

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
                className
            ])}
        >
            <div className={cls.toggleIcon}>
                <Button
                    data-testid='sidebar-toggle'
                    theme={ButtonTheme.BACKGROUND_INVERTED}
                    onClick={onToggle}
                    square={true}
                    size={ButtonSize.L}
                >
                    <FontAwesomeIcon icon="bars" />
                </Button>
                <div className={cls.items}>
                    <div className={cls.item}>
                        <AppLink
                            theme={AppLinkTheme.SECONDARY}
                            to={RoutePath.main}
                            className={cls.link}
                        >
                            <MainIcon className={cls.icon}></MainIcon>
                            <span className={cls.linkText}>{collapsed ? undefined : t('main page')}</span>
                        </AppLink>
                    </div>
                    <div className={cls.item}>
                        <AppLink
                            theme={AppLinkTheme.SECONDARY}
                            to={RoutePath.about}
                            className={cls.link}
                        >
                            <AboutIcon className={cls.icon}></AboutIcon>
                            <span className={cls.linkText}>{collapsed ? undefined : t('about')}</span>
                        </AppLink>
                    </div>
                </div>
                <div className={cls.switchers}>
                    <ThemeSwitcher />
                    <LangSwitcher />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
