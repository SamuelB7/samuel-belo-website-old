import React from "react";
import "./Toast.css"
import { useTranslation } from "react-i18next";

export function Toast() {
    const { t, i18n } = useTranslation()
    
    return (
        <div className="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
            <div className="toast-header">
                <strong className="me-auto">{t('toast_title')}</strong>
                
                <button type="button" className="btn-close btn-danger" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div className="toast-body">
                {t('toast_msg')}
            </div>
        </div>
    )
}