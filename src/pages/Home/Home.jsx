import React from "react";
import { useTranslation } from "react-i18next";
import './Home.css'
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai'
import { motion } from "framer-motion"

export function Home() {
    const { t, i18n } = useTranslation()
    
    return (
        <motion.div className="d-flex h-100 text-center" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
            <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                <main className="px-3">
                    <h1 dangerouslySetInnerHTML={{ __html: t('home_main_title') }}></h1>
                    <img className="profile_img" src="/img/samuel.jpg" alt=""/>
                    <p className="lead mt-5">
                        <a target={"_blank"} href="https://github.com/SamuelB7" className="btn btn-lg btn-blue me-3"> <AiOutlineGithub className="github_icon"/>  {t('home_github_btn')}</a>
                        <a target={"_blank"} href="https://www.linkedin.com/in/samuelb7/" className="btn btn-lg btn-blue me-3"> <AiFillLinkedin className="github_icon"/>  {t('home_linkedin_btn')}</a>
                        <a href={t('home_cv_link')} download={"Samuel Belo.pdf"} className="btn btn-lg btn_download">{t('home_cv_btn')}</a>
                    </p>
                </main>
            </div>
        </motion.div>
    )
}