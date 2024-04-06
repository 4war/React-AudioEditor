import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PageError.module.scss';
import { useTranslation } from 'react-i18next';
import Button from 'shared/ui/Button/Button';

interface PageErrorProps {
    className?: string;
}

const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        location.reload();
    }

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p>{t('Unexpected error')}</p>
            <Button onClick={reloadPage}>{t('Reload page')}</Button>
        </div>
    );
};

export default PageError;
