import React, { useEffect } from "react";
import styles from "./Services.module.css";
import { useI18n } from "../../utils/i18n";

export const Services: React.FC = () => {
    const { t } = useI18n();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // @ts-ignore
    const services = t("services") as { title: string; description: string }[] || [];

    return (
        <section className={styles.services}>
            <div className={styles.container}>
                <h1 className={styles.servicesTitle}>{t("servicesTitle") || "Mes Services"}</h1>
                <p className={styles.servicesSubtitle}>
                    {t("servicesSubtitle") || "Je propose des services personnalisés adaptés à vos besoins. Contactez-moi pour discuter de votre projet ! 🚀"}
                </p>

                <div className={styles.servicesGrid}>
                    {services.map((service, idx) => (
                        <div className={styles.serviceCard} key={idx}>
                            <h2>{service.title}</h2>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>

                <div className={styles.contactSection}>
                    <p>{t("servicesContactText") || "Intéressé par un de ces services ? Discutons ensemble de votre projet !"}</p>
                    <a href="/contact" className={styles.ctaButton}>{t("contactCta") || "Me contacter"}</a>
                </div>
            </div>
        </section>
    );
};