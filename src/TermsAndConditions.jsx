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
                    <h5 className='font-bold py-3'>Phone Number: 9742974269.
                        This Privacy Policy was last updated on 23 July 2023</h5>
                    <div className="terms-header text-center">Order Cancellation Policy</div>
                    <h5 className='font-bold py-3'> Premium Walls understands that circumstances may arise where you need to cancel or reschedule your service appointment. This Order Cancellation Policy outlines our procedures and any applicable fees related to cancellations.</h5>
                    <ul>
                        <li className='p-2'>Cancellation Procedure: To cancel or reschedule your service appointment, please contact us as soon as possible. You can reach us by phone at 9742974269 or email at support@premiumwalls.in.</li>
                        <li className='p-2'>Please provide your name, contact information, and the details of your appointment when requesting a cancellation or rescheduling.</li>
                        <li className='p-2'>Cancellation Fees: If you cancel your appointment within 24 hours/days of the scheduled service time, a cancellation fee may apply. </li>
                        <li className='p-2'>The amount of the cancellation fee may vary depending on factors such as the type of service, the notice period provided, and any costs incurred by Premium Walls in preparing for your appointment</li>
                        <li className='p-2'>Exceptions: We understand that unforeseen circumstances may arise, such as emergencies or sudden changes in plans. In such cases, we will strive to accommodate your needs and may waive the cancellation fee at our discretion.</li>
                        <li className='p-2'>Refunds: If you have already made a payment for the service and are eligible for a refund due to cancellation, we will process the refund within 5 -7 business days using the original method of payment. Any applicable cancellation fees will be deducted from the refund amount</li>
                        <li className='p-2'>Rescheduling: If you need to reschedule your service appointment, please contact us as soon as possible. We will do our best to accommodate your request and find an alternative appointment time that works for you.</li>
                        <li className='p-2'>No-Show Policy: If you fail to show up for your scheduled service appointment without prior notice, you may be subject to a no-show fee.</li>
                        <li className='p-2'>
                            Contact Us: If you have any questions or concerns about our Order Cancellation Policy, please don't hesitate to contact us at <span className='font-bold'>support@premiumwalls.in  or Phone : 9742974269</span></li>
                        <h5>By scheduling a service appointment with Premium Walls, you agree to abide by the terms outlined in this Order Cancellation Policy. We appreciate your cooperation and understanding.</h5>
                        <h5>This Order Cancellation Policy was last updated on 23rd July 2023</h5>
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
