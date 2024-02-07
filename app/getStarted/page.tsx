"use client"
import React, { useState } from 'react'
import logo from '../images/logo.png'
import Image from 'next/image'
import { Button, Input, Modal } from "antd"

const GetStarted = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <Image src={logo} alt='logo' />
            <form action="submit">
                <div>
                    <div className='flex'>
                        <Input type='text' placeholder="First Name*" />
                        <Input type='text' placeholder="Last Name*" />
                    </div>
                    <Input type='text' placeholder='Location*' />
                    <Input type='text' placeholder='What is the approximate value of your assets in Naira' />
                    <Input type='text' placeholder="Executor's Name" />
                    <div>
                        <Button type='primary' className='bg-blue-500'>Submit</Button>
                        <Button type='primary' onClick={showModal} className='bg-blue-500'>Add Beneficiaries</Button>
                        <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                            <h2>Add Beneficiary</h2>
                            <Input type='text' placeholder="First Name*" />
                            <Input type='text' placeholder="Last Name*" />
                            <Input type='text' placeholder="Percentage &#37;*" />

                        </Modal>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default GetStarted