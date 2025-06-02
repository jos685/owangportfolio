import React from 'react';
import styles from './Language.module.css'

export default function Languages() {
    return (
        <main>
            <div className={styles.language}>

                <div className={styles.tit}>
                    <h1 className={styles.title}>Languages</h1>
                </div>
                
                <div className={styles.grid_container}>
                    {/* Language Items */}
                    {[
                        { src: "/Languages/js.jpg", name: "Javascript" },
                        { src: "/Languages/python.jpg", name: "Python" },
                        { src: "/Languages/django.jpg", name: "Django" },
                        { src: "/Languages/php.jpg", name: "PHP" },
                        { src: "/Languages/laravel.jpg", name: "Laravel" },
                        { src: "/Languages/node.jpg", name: "Node JS" },
                        { src: "/Languages/next.jpg", name: "Next JS" },
                        { src: "/Languages/vue.jpg", name: "Vue" },
                    ].map((lang, index) => (
                        <div key={index} className={styles.container}>
                            <img src={lang.src} alt={lang.name} className={styles.image} />
                            <div className={styles.language_label}>{lang.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}