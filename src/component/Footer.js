import React from 'react';
import Bounce from 'react-reveal/Bounce'

const Footer = () => {

    return (
        <Bounce>
            <footer class="py-5 bg-light">
                <div class="container">
                    <div class="row">
                        <div class="col-12 text-center">
                            <ul class="list-inline">
                                <li class="list-inline-item"><a href="https://prismjs.com/test.html">Test Drive</a></li>
                                <li class="list-inline-item"><a href="https://prismjs.com/extending.html">API Docs</a></li>
                                <li class="list-inline-item"><a href="https://github.com/LeaVerou/prism/">Fork Prism.js on
                                  GitHub</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="row my-2">
                        <div class="col-md-4 mx-auto text-muted text-center small-xl">
                            &copy; 2019 Prism - All Rights Reserved
                  </div>
                    </div>
                </div>
            </footer>
        </Bounce>
    )
}

export default Footer;