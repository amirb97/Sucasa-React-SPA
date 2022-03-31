import React from 'react';

function About() {
    return (
        <div className='row'>
            <h2 className='text-center py-4'>About Us!</h2>
            <p className='text-center col-12 mx-auto'>
                Located in beautiful Paso Robles, we are a family owned and operated latin themed restaurant.
                We first opened our doors in 2016, and have been proudly serving the Paso Robles community since then!
                We like to think when you're here, you're in our home. Our goal is to provide a pleasant dining experience for locals and tourists alike,
                and add our own touch to the Paso Robles life-style!
            </p>

            <div className='col-12 border border-dark rounded shadow py-2 my-2 mx-auto'>
                <div className='row'>
                    <div className='col-8 row'>
                        <h3 className='text-center h4 my-auto'>Lorem Ipsum</h3>
                        <p className='text-center h6'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div className='col-4'>
                        <iframe width="100%" height="100%" src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=2927%20Spring%20St+(Su%20Casa)&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'></iframe>
                    </div>
                </div>
            </div>

            <div className='col-12 border border-dark rounded shadow py-2 my-2 mx-auto'>
                <div className='row'>
                    <div className='col-4'>
                        <img width="100%" height="100%" src={require('../../assets/owners/Aida.jpg').default} alt='Owner'></img>
                    </div>
                    <div className='col-8 row'>
                        <h3 className='text-center h4 my-auto'>Lorem Ipsum</h3>
                        <p className='text-center h6'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </div>

            <div className='col-12 border border-dark rounded shadow py-2 my-2 mx-auto'>
                <div className='row'>
                    <div className='col-8 row'>
                        <h3 className='text-center h4 my-auto'>Lorem Ipsum</h3>
                        <p className='text-center h6'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div className='col-4'>
                    <img width="100%" height="100%" src={require('../../assets/owners/Mo.jpg').default} alt='Owner'></img>
                    </div>
                </div>
            </div>

            <div className='col-12 mx-auto'>
                <a href="https://www.google.com/search?gs_ssp=eJzj4tZP1zcsSU_JK0_KMmC0UjWosDBITU5OSzMyNDFPTktOTLICCqUkAgUsLEzTkhJNTczMvYSLSxWSE4sTFQoSi_MVivKTclKLAUTBF0g&q=su+casa+paso+robles&rlz=1C1CHBF_enUS863US863&oq=su+casa&aqs=chrome.1.69i57j46i39i175i199j0i67i457j0i402j46i175i199i512j69i60l3.3792j0j7&sourceid=chrome&ie=UTF-8" target="_blank">
                    <img className="col-6" src="https://broadly.com/wp-content/uploads/2018/04/Google-Review-Link.png" alt="First slide" />
                </a>
                
                <a href="https://www.yelp.com/biz/su-casa-bar-and-grill-paso-robles" target="_blank">
                    <img className="col-5" src="https://thecenterofharmony.com/wp-content/uploads/carousel/elementor/thumbs/yelp-ork9zbqrhrmvfnjawsj5qd0gckrf6szumeodri9d3c.png" alt="First slide" />
                </a>
            </div>
        </div>
    )
}

export default About;
