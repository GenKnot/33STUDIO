"use client";
import { useState } from "react";
import { useLanguage } from "@/lib/i18n/context";

export default function ContactForm() {
    const { t } = useLanguage();
    const [result, setResult] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setResult("");

        const formData = new FormData(event.target);
        formData.append("access_key", "f5629454-c239-48ab-b71d-b57e90d264c8");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("success");
                event.target.reset();
            } else {
                setResult("error");
            }
        } catch (error) {
            setResult("error");
        } finally {
            setIsSubmitting(false);
        }
    };
    
    return (
        <div className="contact-form-box">
            <h3 className="contact-form__title">{t('contact.subtitle')}</h3>
            <form onSubmit={onSubmit}>
                <div className="row gutter-y-default justify-content-center">
                    <div className="col-lg-6">
                        <input
                            type="text"
                            name="name"
                            placeholder={t('contact.form.namePlaceholder')}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="col-lg-6">
                        <input
                            type="tel"
                            name="phone"
                            placeholder={t('contact.form.phonePlaceholder')}
                            className="form-control"
                        />
                    </div>
                    <div className="col-lg-12">
                        <input
                            type="email"
                            name="email"
                            placeholder={t('contact.form.emailPlaceholder')}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="col-lg-12">
                        <textarea
                            name="message"
                            placeholder={t('contact.form.messagePlaceholder')}
                            className="form-control"
                            required
                            defaultValue={""}
                        />
                    </div>
                    <div className="col-auto">
                        <button 
                            type="submit" 
                            className="btn btn-primary hvr-fill-black"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? t('contact.form.sending') || 'Sending...' : t('contact.form.submit')}
                            <i className="fa-solid fa-arrow-right icon-arrow-corner" />
                        </button>
                    </div>
                    {result && (
                        <div className="col-12">
                            <p className={`form-result ${result === "success" ? "text-success" : "text-danger"}`}>
                                {result === "success" 
                                    ? t('contact.form.successMessage') || 'Message sent successfully!' 
                                    : t('contact.form.errorMessage') || 'Something went wrong. Please try again.'}
                            </p>
                        </div>
                    )}
                </div>
            </form>
        </div>
    );
}
