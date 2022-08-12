import React from "react";
import "./Contact.css"
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion"
import { useSearchParams } from "react-router-dom";
import { Toast } from "../../components/Toast/Toast";

export function Contact() {
    const { t, i18n } = useTranslation()
    const [searchParams, setSearchParams] = useSearchParams();
    let hasToast = searchParams.get("toast")
    let comp
    if(hasToast == "true") {
        comp = <Toast></Toast>
    }

    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
            <div className="toast-container position-fixed bottom-0 end-0 p-3">
                {comp}
            </div>
            <div className="form-contact mt-5">
                <div className="container">
                    <h1 className="text-center mb-1">{t('contact_title')}</h1>
                    <form action="https://formsubmit.co/belo.samuel@gmail.com" method="POST">
                        <div className="form-group">
                            <input type="hidden" name="_captcha" value="false"/>
                            <input type="hidden" name="_next" value="https://samuelbelo.com.br/contact?toast=true"></input>
                            <input placeholder={t('contact_name_label')} type="text" className="form-control mb-2" name="name" required/>
                            <input placeholder={t('contact_email_label')} type="email" className="form-control mb-2" name="email" required/>
                            <textarea placeholder={t('contact_message_label')} name="message" required></textarea>
                        </div>

                        <button type="submit" className="btn btn-blue col-12">Enviar</button>
                    </form>
                </div>
            </div>
        </motion.div>
    )
}