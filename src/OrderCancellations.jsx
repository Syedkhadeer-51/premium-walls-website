import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const OrderCancellation = () => {
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
                            Contact Us: If you have any questions or concerns about our Order Cancellation Policy, please don't hesitate to contact us at <span className='font-bold'>support@premiumwalls.in  or Phone : 9742974269, 8151815149</span></li>
                        <h5>By scheduling a service appointment with Premium Walls, you agree to abide by the terms outlined in this Order Cancellation Policy. We appreciate your cooperation and understanding.</h5>
                        <h5>This Order Cancellation Policy was last updated on 23rd July 2024</h5>
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

export default OrderCancellation;
