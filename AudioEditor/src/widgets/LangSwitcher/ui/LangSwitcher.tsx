import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LangSwitcher.module.scss';
import { useTranslation } from 'react-i18next';
import i18n from 'shared/config/i18n/i18n';
import Button, { ThemeButton } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
    className?: string;
}

const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <div className={classNames(cls.LanguageSwitcher, {}, [className])}>
            <Button theme={ThemeButton.CLEAR} onClick={toggle}>
                {t('language')}
            </Button>
        </div>
    );
    
};

export default LangSwitcher;
