import React from "react";
import "./Contact.css"
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion"
import { useSearchParams } from "react-router-dom";
import { AiOutlineWhatsApp, AiOutlineMail } from 'react-icons/ai'

export function Contact() {
    const { t, i18n } = useTranslation()
    const [searchParams, setSearchParams] = useSearchParams();


    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
            <div className="form-contact mt-5">
                <div className="container">
                    <h1 className="text-center mb-1">{t('contact_title')}</h1>
                    <p className="text-center mb-2">{t('contact_sub_title')}</p>
                    {/* <form action="https://formsubmit.co/belo.samuel@gmail.com" method="POST">
                        <div className="form-group">
                            <input type="hidden" name="_captcha" value="false"/>
                            <input type="hidden" name="_next" value="https://samuelbelo.com.br/contact?toast=true"></input>
                            <input placeholder={t('contact_name_label')} type="text" className="form-control mb-2" name="name" required/>
                            <input placeholder={t('contact_email_label')} type="email" className="form-control mb-2" name="email" required/>
                            <textarea placeholder={t('contact_message_label')} name="message" required></textarea>
                        </div>

                        <button type="submit" className="btn btn-blue col-12">Enviar</button>
                    </form> */}
                    <div className="row g-3">
                        <div className="col-6 col-md-6 col-lg-6">
                            <a target={"_blank"} href="https://wa.me/554198834077" className="btn btn-lg btn-blue col-12"> <AiOutlineWhatsApp className="github_icon"/>  {t('contact_whatsapp_label')}</a>
                        </div>
                        <div className="col-6 col-md-6 col-lg-6">
                            <a target={"_blank"} href="mailto:belo.samuel@gmail.com" className="btn btn-lg btn-blue col-12"> <AiOutlineMail className="github_icon"/>  {t('contact_email_label')}</a>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}