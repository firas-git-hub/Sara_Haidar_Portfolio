import './page.scss';
import jsonData from '../../../data/areaOfExpertiseData.json';
import { useTranslations } from 'next-intl';

export default function AreaOfExpertise() {
    const t = useTranslations("areaOfExpertisePage")
    return (
        <>
            <div className='areaOfExpertisePage'>
                <div className='introPage page'>
                    <img src={jsonData.patternImgSrc} />
                    <p className='header glassBg'>{t('firstPageHeader')}</p>
                </div>
                <div className='contentPage page'>

                </div>
            </div>
        </>
    )
}