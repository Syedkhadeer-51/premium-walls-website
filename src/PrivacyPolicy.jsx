import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const PrivacyPolicy = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, []);

    const handleOkClick = () => {
        navigate('/');
    };

    return (
        <>
            <div className="terms-container p-5">
                <div className="row d-flex justify-content-center pt-3">
                    <div className="terms-header text-center">Privacy Policy</div>
                    <h5 className='font-bold py-3'>Premium Walls is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information when you visit our website or use our services related to Painting, cleaning, etc. By using our services, you agree to the terms outlined in this policy</h5>
                    <ul>
                        <li className='p-2'>Information Premium Walls Collect:
                            Personal Information: Premium Walls may collect personal information such as your name, email address, phone number, and address when you request services or communicate with us..</li>
                        <li className='p-2'>Usage Data: Premium Walls may collect information about how you interact with our website, including IP addresses, browser type, pages visited, and other usage statistics.</li>
                        <li className='pt-2'>How Premium Walls Use Your Information:
                            To Provide Services: Premium Walls use your personal information to deliver painting, cleaning, and related services as requested by you</li>
                        <li className='p-2'>Communication: Premium Walls may use your contact information to respond to inquiries, provide updates on services, and communicate with you about your appointments.</li>
                        <li className='p-2'>Marketing: With your consent, Premium Walls may send you promotional materials or offers about our services.</li>
                        <li className='p-2'>Information Sharing: Third-Party Service Providers: Premium Walls may share your personal information with third-party service providers who assist us in delivering our services, such as contractors or suppliers</li>
                        <li className='p-2'>Legal Compliance: Premium Walls may disclose your information when required by law or to protect our rights, property, or safety, or that of others.</li>
                        <li className='p-2'>Data Security: Premium Walls implement security measures to protect your personal information from unauthorised access, alteration, disclosure, or destruction.</li>
                        <li className='p-2'>However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.:</li>
                        <li className='p-2'>Your Rights: Access: You have the right to access and receive a copy of your personal information held by us</li>
                        <li className='p-2'>Rectification: You have the right to request correction of any inaccurate or incomplete personal information.</li>
                        <li className='p-2'>Erasure: You have the right to request deletion of your personal information, subject to legal requirements</li>
                        <li className='p-2'>Cookies: Premium Walls may use cookies and similar tracking technologies to improve your browsing experience on our website</li>
                        <li className='p-2'>Policy Updates: Premium Walls may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website</li>
                        <li className='p-2'>Contact Us: If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at contact support@premiumwalls.in</li>
                    </ul>
                    <h5 className='font-bold py-3'>Phone Number: 9742974269, 8151815149
                        This Privacy Policy was last updated on 23 July 2024</h5>
                 
                    <div className='text-center'>
                        <button className="contact-btn my-4 btn px-5" type="button" onClick={handleOkClick}>Ok</button>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
};

export default PrivacyPolicy;
