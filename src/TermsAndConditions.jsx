import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const TermsAndConditions = () => {
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
                    <div className="terms-header text-center">Terms and Conditions</div>
                    <h5 className='font-bold py-3'>These Terms and Conditions ("Terms") govern your use of services provided by Premium Walls, including but not limited to painting, cleaning, and related services. By accessing or using our services, you agree to comply with these Terms.</h5>
                    <ul>
                        <li className='p-2'>Service Agreement: By scheduling a service appointment with Premium Walls, you agree to the terms outlined in these Terms and Conditions.
                            Our services will be performed in accordance with industry standards and best practices.</li>
                        <li className='p-2'>Booking and Payment: To book a service appointment, you must provide accurate and complete information, including your name, contact information, and service requirements.</li>   
                        <li className='pt-2'>Payment Terms</li>  
                    </ul>
                    <ol className='px-2 px-md-5'>
                        <li className='pb-1'>Slot booking payment 10%</li>
                        <li className='pb-1'>40% After reached Workers to site Before starting work</li>
                        <li className='pb-1'>50% Payment On Completion of Total work.</li>
                    </ol>
                    <p className='pb-3'>We accept payment via PhonePe , Google Pay, and all payments are subject to applicable taxes and fees.</p>
                    <ul>
                        <li className='p-2'>Service Provision: We will make reasonable efforts to perform the services in a timely and professional manner.</li>
                        <li className='p-2'>You agree to provide access to the premises and any necessary utilities or equipment required to perform the services..</li>
                        <li className='pt-2'> Any changes to the scope of work must be approved by the Premium Walls first</li>
                    </ul>
                    <ul>
                        <li className='p-2'>Liability:</li>
                        <p> Premium Walls is not liable for any damages or losses resulting from:
                            Your failure to provide accurate or complete information.
                            Any delays or interruptions in service beyond our control.
                            Damage to property caused by factors outside of our reasonable control.
                            Our liability for any damages or losses arising from our services is limited to the amount paid for the services.</p>
                        <li className='p-2'>Warranty: Premium Walls warrant that our services will be performed with reasonable care and skill. </li>
                        <li className='p-2'>If you are not satisfied with the quality of our services, please contact us within 1 days of service completion, and we will work to address your concerns. </li>
                        If you are not satisfied with the quality of our services, please contact us within 1 days of service completion, and we will work to address your concerns.
                        <li className='p-2'>Intellectual Property: All intellectual property rights associated with our services, including but not limited to trademarks, logos, and content, are owned by Premium Walls.</li>
                        <li className='p-2'>Termination:Either party may terminate the service agreement with written notice to the other party. Upon termination, you agree to pay for any services rendered up to the termination date.</li>
                        <li className='p-2'>Modification: Premium Walls reserve the right to modify or update these Terms at any time. Any changes will be effective immediately upon posting on our website.</li>
                        <li className='p-2'>Governing Law: These Terms are governed by the laws of [jurisdiction], and any disputes arising under these Terms shall be resolved in the courts of jurisdiction.</li>
                    </ul>
                    <div className='text-center'>
                        <button className="contact-btn my-4 btn px-5" type="button" onClick={handleOkClick}>Ok</button>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
};

export default TermsAndConditions;
