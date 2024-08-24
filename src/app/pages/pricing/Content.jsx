import React from "react";

const Content = () => {
  return (
    <div className="text-black bg-[#EFEBE0]">
      <div className="cmMobile:w-[90%] cm1500:w-3/5 m-auto py-8">
        <h3 className="font-medium text-2xl mb-2">Important Information</h3>
        <p>{`The actual treatment lasts 30, 60, 90 or 120 minutes, but I never include the time you
              need to change or ask questions in that time. Allow an extra fifteen minutes for yourself
              in addition to the treatment duration.`}</p>
        <p>{`During my treatments I use only carefully selected certified products manufactured by
            local businesses.`}</p>
        <h3 className="font-medium text-2xl mb-2">Health Insurance</h3>
        <p>{`Lots of private health insurance companies now cover massage treatments provided by
            FHT members. Please check with your policy and insurance provider to see if you are
            eligible. I am happy to provide an invoice as proof of treatment.`}</p>
        <h3 className="font-medium text-2xl mb-2">Gift Vouchers</h3>
        <p>Gift vouchers available</p>
        <h3 className="font-medium text-2xl mb-2">Payments</h3>
        <p>{`Payments: Upfront online, card or cash at the clinic.`}</p>
        <h3 className="font-medium text-2xl mb-2">Cancellation</h3>
        <p>{`Cancellations: 24hrs cancellation policy with full refund on all treatments.`}</p>
        <p>
          {`Please note changes or cancellations after that time won't be possible and you will be
          charged the full amount.`}
        </p>
      </div>
    </div>
  );
};

export default Content;
