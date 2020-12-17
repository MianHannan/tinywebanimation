import React from 'react';
import useWebAnimations, { bounceInLeft, bounceInRight, bounceInUp, swing } from '@wellyshen/use-web-animations';


const HeaderSection = () => {

    const logo = useWebAnimations(bounceInLeft);
    const download = useWebAnimations(bounceInRight);
    const text = useWebAnimations(bounceInUp);
    const code = useWebAnimations(swing);

    return (
        <section className="bg-gradient pt-5 pb-6">
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex flex-row align-items-center justify-content-between">
                        <div className="heading-brand" ref={logo.ref} >Prism.js</div>
                        <a href="https://prismjs.com/download.html" ref={download.ref} className="btn btn-dark" target="_blank">Download</a>
                    </div>
                </div>
                <div className="row mt-6" ref={text.ref}>
                    <div className="col-md-8 mx-auto text-center">
                        <h1>Syntax Highlighter for Every Language</h1>
                        <p className="lead mb-5">Prism is a lightweight, extensible syntax highlighter, built with modern web
                        standards in mind. It’s used in thousands of websites, including some of those you visit daily.
                      </p>
                        <a href="https://github.com/LeaVerou/prism/" className="btn btn-success svg-icon">
                            <em className="mr-2" data-feather="github"></em>
                          Contribute
                      </a>
                    </div>
                </div>
                <div className="row mt-5" ref={code.ref}>
                    <div className="col-md-9 mx-auto">
                        <div className="code-window">
                            <div className="dots">
                                <div className="red"></div>
                                <div className="orange"></div>
                                <div className="green"></div>
                            </div>
                            <pre className="language-javascript line-numbers">
                                <code className="language-javascript">
                                    {"import {DomSanitizer} from '@angular/platform-browser';"}
                                </code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeaderSection;