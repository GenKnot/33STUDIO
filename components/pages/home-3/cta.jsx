"use client";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/context";

export default function Cta() {
    const { t, locale } = useLanguage();
    
    return (
        <div
            className="cta-section-03 overlay-07 section-padding-140"
            style={{
                backgroundImage: 'url("/images/cta/moonbeam-design.jpg")',
            }}
        >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="cta-content-03">
                            <div className="cta-content-03__text-block">
                                <h1 className={`cta-content-03__title heading-lg text-sand mb-40 ${locale !== 'zh' ? 'heading-lg-en' : ''}`}>
                                    {t('cta.title')}
                                </h1>
                                <p className="text-sand" style={{fontSize: '1.25rem', lineHeight: '2', maxWidth: '900px', margin: '0 auto'}}>
                                    {t('cta.p1')}
                                    {t('cta.p2')}
                                    {t('cta.p3')}
                                </p>
                            </div>
                            <div className="cta-content-03__button">
                                <Link
                                    href="/contact"
                                    className="btn btn-primary hvr-fill-black"
                                >
                                    {t('common.contact')}
                                    <i className="fa-solid fa-arrow-right icon-arrow-corner" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
