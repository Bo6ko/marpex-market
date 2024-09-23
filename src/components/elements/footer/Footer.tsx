import css from './Footer.module.css';
import { ReactComponent as Logo } from '../../../assets/svg/logo.svg';
import { ReactComponent as FacebookIcon } from '../../../assets/svg/facebook-icon.svg';
import { ReactComponent as YoutubeIcon } from '../../../assets/svg/youtube-icon.svg';
import { ReactComponent as AddressIcon } from '../../../assets/svg/address-icon.svg';
import { ReactComponent as EmailIcon } from '../../../assets/svg/email-icon.svg';
import { ReactComponent as PhoneIcon } from '../../../assets/svg/phone-icon.svg';
import Subscription from '../../../pages/home/Subscription/Subscription';
import WebStarLogo from '../../../assets/images/webstar-logo.png';

const Footer = () => {

    return (
        <>
            <footer>
                <div className={`container ${css.footerContainer}`}>
                    <Subscription className={css.subscription} />
                    <div className={css.footerSection}>
                        <div className={css.box}>
                            <Logo className={css.logo} />
                            <p className={css.aboutUsDesc}>
                                При нас може да намерите всичко за Вашата ферма. Ние предлагаме всички нужни консумативи и техника за животновъдството и конния спорт.
                            </p>
                            <FacebookIcon className={css.facebookIcon} />
                            <YoutubeIcon className={css.youtubeIcon}/>
                        </div>

                        <div className={css.box}>
                            <p className={css.title}>Линкове</p>
                            <ul>
                                <li>Настройки на бисквитки</li>
                                <li>Политика за бисквитки</li>
                                <li>Политика за поверителност</li>
                                <li>Рекламация и връщане</li>
                                <li>Общи условия</li>
                                <li>За нас</li>
                                <li>Контакти</li>
                            </ul>
                        </div>

                        <div className={css.box}>
                            <p className={css.title}>Линкове</p>
                            <ul>
                                <li>Настройки на бисквитки</li>
                                <li>Политика за бисквитки</li>
                                <li>Политика за поверителност</li>
                                <li>Рекламация и връщане</li>
                                <li>Общи условия</li>
                                <li>За нас</li>
                                <li>Контакти</li>
                            </ul>
                        </div>

                        <div className={css.box}>
                            <div className={css.row}>
                                <p className={css.title}>АДРЕС</p>
                                <p className={css.addressDesc}><AddressIcon /> гр. Русе, Липник 128 (Хиподрум)</p>
                            </div>

                            <div className={css.row}>
                                <p className={css.title}>ЕЛ. поща</p>
                                <p className={css.addressDesc}><EmailIcon /> info@marpex-market.bg</p>
                            </div>

                            <div className={css.row}>
                                <p className={css.title}>телефон</p>
                                <p className={css.addressDesc}><PhoneIcon className={css.phone} /> 0895502266</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            
            <div className={css.allRights}>
                <div className={`container ${css.allRightsSection}`}>
                    <span>Всички права запазени © 2024</span>
                    <img src={WebStarLogo} alt="Webstar logo" />
                </div>
            </div>
        </>
    )
}

export default Footer;