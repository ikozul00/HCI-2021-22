import Header from '../modules/header/header.js';
import CTA from '../modules/cta/cta.js';
import Image from 'next/image';

import LogoImg from '../assets/logo.png';

const Hello = () => {
    return (
        <>
            <Header />

            {/* Call to action (CTA) section */}
            <CTA />

            {/* Testimonials section */}
            <section className="mt-12 py-12 bg-gray-50">
                <main className="max-w-4xl flex flex-col mx-auto">
                    <div>
                        <h2 className="capitalize text-4xl font-roboto-condensed font-bold text-gray-700">
                            What our customers are saying
                        </h2>
                        <h4 className="text-xl text-gray-400 mt-2">
                            Read case studies of our happy customers
                        </h4>
                    </div>
                    <div className="mt-12 grid grid-cols-2 gap-4">
                        <div className="h-96 border hover:cursor-pointer">
                            <div className="h-4/5 bg-gray-100 relative">
                                <Image
                                    src={'/design-system.jpg'}
                                    layout="fill"
                                    objectFit="cover"
                                    alt="Grow business"
                                />
                            </div>
                            <div className="h-1/5 bg-gray-300 flex items-center justify-center relative">
                                <p className="capitalize font-roboto-condensed text-xl text-hci-lila">
                                    New design system
                                </p>
                                <div className="absolute right-4 h-full flex items-center">
                                    <Image
                                        src={'/right.svg'}
                                        layout="fixed"
                                        width={15}
                                        height={15}
                                        alt="Right icon"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="h-96 border hover:cursor-pointer">
                            <div className="h-4/5 bg-gray-100 relative">
                                <Image
                                    src={'/from-scratch.jpg'}
                                    layout="fill"
                                    objectFit="cover"
                                    alt="Grow business"
                                />
                            </div>
                            <div className="h-1/5 bg-gray-300 flex items-center justify-center relative">
                                <p className="capitalize font-roboto-condensed text-xl text-hci-lila">
                                    Design from scratch
                                </p>
                                <div className="absolute right-4 h-full flex items-center">
                                    <Image
                                        src={'/right.svg'}
                                        layout="fixed"
                                        width={15}
                                        height={15}
                                        alt="Right icon"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="h-96 border hover:cursor-pointer">
                            <div className="h-4/5 bg-gray-100 relative">
                                <Image
                                    src={'/brand.png'}
                                    layout="fill"
                                    objectFit="cover"
                                    alt="Grow business"
                                />
                            </div>
                            <div className="h-1/5 bg-gray-300 flex items-center justify-center relative">
                                <p className="capitalize font-roboto-condensed text-xl text-hci-lila">
                                    Brand transformation
                                </p>
                                <div className="absolute right-4 h-full flex items-center">
                                    <Image
                                        src={'/right.svg'}
                                        layout="fixed"
                                        width={15}
                                        height={15}
                                        alt="Right icon"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="h-96 border hover:cursor-pointer">
                            <div className="h-4/5 bg-gray-100 relative">
                                <Image
                                    src={'/book-cover.jpg'}
                                    layout="fill"
                                    alt="Grow business"
                                />
                            </div>
                            <div className="h-1/5 bg-gray-300 flex items-center justify-center relative">
                                <p className="capitalize font-roboto-condensed text-xl text-hci-lila">
                                    Book cover design
                                </p>
                                <div className="absolute right-4 h-full flex items-center">
                                    <Image
                                        src={'/right.svg'}
                                        layout="fixed"
                                        width={15}
                                        height={15}
                                        alt="Right icon"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="capitalize mt-12 mb-12 mx-auto w-1/3 py-3 border shadow-md whitespace-nowrap text-xl text-hci-lila font-medium hover:bg-gray-100">
                        View showcase
                    </button>
                </main>
            </section>

            {/* Footer section */}
            <section className="py-12 bg-hci-lila-dark text-hci-lila-light">
                <main className="max-w-4xl flex flex-col mx-auto">
                    <div className="flex items-start justify-between">
                        <div>
                            <Image
                                src={LogoImg}
                                layout="fixed"
                                width={50}
                                height={50}
                                alt="Design logo"
                            />
                            <div className="mt-8">
                                <div className="flex items-center">
                                    <Image
                                        src={'/phone.svg'}
                                        layout="fixed"
                                        width={15}
                                        height={15}
                                        alt="Phone icon"
                                    />
                                    <p className="ml-4">+385 123 0000</p>
                                </div>
                                <div className="flex items-center">
                                    <Image
                                        src={'/email.svg'}
                                        layout="fixed"
                                        width={15}
                                        height={15}
                                        alt="Email icon"
                                    />
                                    <p className="ml-4">design@fesb.hr</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="capitalize text-3xl font-roboto-condensed font-bold text-white">
                                Contact us
                            </h3>
                            <h4 className="text-xl">Drop us a quick message</h4>
                            <div className="mt-2 flex flex-col text-hci-lila-dark">
                                <input
                                    className="mt-4 p-2 w-4/5 opacity-80"
                                    placeholder="Your Name"
                                    type="text"
                                />
                                <input
                                    className="mt-4 p-2 w-4/5 opacity-80"
                                    placeholder="Your E-mail"
                                    type="text"
                                />
                                <textarea
                                    className="mt-4 p-2 resize-none opacity-80"
                                    placeholder="Your Message"
                                    cols="30"
                                    rows="8"
                                ></textarea>
                            </div>
                        </div>

                        <div>
                            <h3 className="capitalize text-3xl font-roboto-condensed font-bold text-white">
                                Sitemap
                            </h3>
                            <h4 className="text-xl">Explore our pages</h4>
                            <ul className="mt-4 list-none font-medium text-white">
                                <li className="whitespace-nowrap cursor-pointer">
                                    Home
                                </li>
                                <li className="whitespace-nowrap cursor-pointer mt-1">
                                    About us
                                </li>
                                <li className="whitespace-nowrap cursor-pointer mt-1">
                                    Products
                                </li>
                                <li className="whitespace-nowrap cursor-pointer mt-1">
                                    Blog
                                </li>
                                <li className="whitespace-nowrap cursor-pointer mt-1">
                                    Contact us
                                </li>
                                <li className="whitespace-nowrap cursor-pointer mt-1">
                                    Private
                                </li>
                            </ul>
                        </div>
                    </div>
                    <p className="mt-12">
                        Copyright @ 2021 FESB. All rights reserved.
                    </p>
                </main>
            </section>
        </>
    );
};

export default Hello;
