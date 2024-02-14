"use client"
import { Card, Typography } from 'antd';
const Faqs: React.FC = () => (
    <div className='mt-16 flex flex-col  items-center'>
        <h1 className=' mb-6 font-bold text-2xl ml-0'>FAQs</h1>
        <Card className='w-1/2 mb-4 '>
            <p className='text-[#2f323a] text-lg font-bold'> Do I have to share my email address to complete my Will?</p>
            <p className='card-text'>No. You will not be asked to provide an email address to complete or save your Will.</p>
            <p className='card-text'> DoYourOwnWill.com does not collect or sell email addresses.</p>
        </Card>
        <Card className='w-1/2 mb-4 '>
            <p className='text-[#2f323a] text-lg font-bold'>   Is it really free?</p>
            <p className='card-text'>Yes. DoYourOwnWill.com is 100% free and doesn't accept payments anywhere on <br /> the site, you'll never have to pay for a document you make or download.</p>
            {/* <p className='card-text'> DoYourOwnWill.com does not collect or sell email addresses.</p> */}
        </Card>
        <Card className='w-1/2 mb-4 '>
            <p className='text-[#2f323a] text-lg font-bold'>Do I need to create an account?</p>
            <p className='card-text'>No. You don’t need to create an account to download any document on this site.</p>
        </Card>
        <Card className='w-1/2 mb-4 '>
            <p className='text-[#2f323a] text-lg font-bold'>Why should I write a Will?</p>
            <p className='card-text'>Writing a Will is critically important for all adults regardless of wealth, marital status, or age. A Will <br /> allows you to: ensure that your possessions will be distributed as you wish; appoint and outline powers <br /> of an executor and/or trustee; appoint a guardian for minor children; specify funeral wishes; expedite <br /> the legal process; and reduce stress and heartache for loved ones.</p>
        </Card>
        <Card className='w-1/2 mb-4 '>
            <p className='text-[#2f323a] text-lg font-bold'>What happens after signing my Will</p>
            <p className='card-text'> After signing the Will:
                Decide where the original Will is to be kept and inform the executor of the location. and deliver it (getting a receipt). Beware of storage in a bank safety deposit box as some states require that they be sealed upon death and retrieval of the Will documents could be difficult. Generally, storage in a fireproof box or some other safe location should be sufficient.</p>
                <br />
            <p>Be sure to let the executor and any alternates know the location of the Will. Remember that, should you desire to change your Will in the future, a formal Codicil or new Will will have to be executed. You should not write on or otherwise attempt to revise the Will.</p>
        </Card>
    </div>
);

export default Faqs;