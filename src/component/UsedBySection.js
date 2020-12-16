import React from 'react';
import useWebAnimations, { heartBeat, bounceInLeft } from '@wellyshen/use-web-animations';
import $ from 'jquery';

const UsedBySection = () => {

    const anim = useWebAnimations(bounceInLeft);
    const googleAnim = useWebAnimations(heartBeat);
    const TwitterAnim = useWebAnimations(heartBeat);
    const vueAnim = useWebAnimations(heartBeat);
    const stripeAnim = useWebAnimations(heartBeat);

    //function to run onload
    React.useEffect(() => {


    }, [])

    // $(document).ready(function () {


    // });

    //play animation on scroll


    return (
        <section class="pb-6">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 mx-auto" ref={anim.ref}>
                        <h2 class="text-center text-md-left">Used by Thousands of Companies</h2>
                        <p class="lead text-muted">Prism.js is used on several websites, small and large.</p>
                        <div class="mt-5 d-flex flex-row justify-content-md-between flex-wrap press-icons">
                            <img
                                src="https://logo.clearbit.com/google.com?size=60"
                                alt="Google"
                                ref={googleAnim.ref}
                                onMouseOver={() => { googleAnim.getAnimation().play() }}
                            />
                            <img
                                src="https://logo.clearbit.com/twitter.com?size=60"
                                alt="Twitter"
                                ref={TwitterAnim.ref}
                                onMouseOver={() => { TwitterAnim.getAnimation().play() }}
                            />
                            <img
                                src="https://logo.clearbit.com/vuejs.org?size=60"
                                alt="Veu.js"
                                ref={vueAnim.ref}
                                onMouseOver={() => { vueAnim.getAnimation().play() }}
                            />
                            <img
                                src="https://logo.clearbit.com/stripe.com?size=60"
                                alt="Stripe"
                                ref={stripeAnim.ref}
                                onMouseOver={() => { stripeAnim.getAnimation().play() }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UsedBySection