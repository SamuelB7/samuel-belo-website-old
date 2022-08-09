import React from "react";
import "./Contact.css"
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion"

export function Contact() {
    const { t, i18n } = useTranslation()

    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
            <div className="form-contact mt-5">
                <div className="container">
                    <h1 className="text-center mb-1">{t('contact_title')}</h1>
                    <form action="">
                        <div className="form-group">
                            <input placeholder={t('contact_name_label')} type="text" className="form-control mb-2" name="name"/>
                            <input placeholder={t('contact_email_label')} type="email" className="form-control mb-2" name="email"/>
                            <textarea placeholder={t('contact_message_label')} name="message" ></textarea>
                        </div>

                        <button className="btn btn-blue col-12">Enviar</button>
                    </form>
                </div>
            </div>
        </motion.div>
    )
}