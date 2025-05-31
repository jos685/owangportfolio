import React from 'react';
import Link from 'next/link';

export default function Languages() {
    return (
        <main>
            <div className='Languages'>

                <div className="tit">
                    <h1 className='title'>Languages</h1>
                </div>
                
                <div className="grid-container">
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
                        <div key={index} className="language-item">
                            <img src={lang.src} alt={lang.name} />
                            <div className="language-label">{lang.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}