import React from 'react';

const HeaderSection = () => {
    return (
        <section class="bg-gradient pt-5 pb-6">
            <div class="container">
                <div class="row">
                    <div class="col-12 d-flex flex-row align-items-center justify-content-between">
                        <div class="heading-brand">Prism.js</div>
                        <a href="https://prismjs.com/download.html" class="btn btn-dark" target="_blank">Download</a>
                    </div>
                </div>
                <div class="row mt-6">
                    <div class="col-md-8 mx-auto text-center">
                        <h1>Syntax Highlighter for Every Language</h1>
                        <p class="lead mb-5">Prism is a lightweight, extensible syntax highlighter, built with modern web
                        standards in mind. It’s used in thousands of websites, including some of those you visit daily.
                      </p>
                        <a href="https://github.com/LeaVerou/prism/" class="btn btn-success svg-icon">
                            <em class="mr-2" data-feather="github"></em>
                          Contribute
                      </a>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col-md-9 mx-auto">
                        <div class="code-window">
                            <div class="dots">
                                <div class="red"></div>
                                <div class="orange"></div>
                                <div class="green"></div>
                            </div>
                            <pre class="language-javascript line-numbers">
                                <code class="language-javascript">
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