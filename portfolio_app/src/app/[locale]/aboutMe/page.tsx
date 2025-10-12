
import {useTranslations} from 'next-intl';


export default function AboutMe() {
    const t = useTranslations("aboutMePage")
    return(
        <>
            <div>
                <p>
                    In progress
                </p>
                <p>
                    {t('aboutMe')}
                </p>
                <div>
                </div>
            </div>
        </>
    )
}