import { Button, Form, Input, Modal, Space } from 'antd'
import React, { useState } from 'react'

const Formpage = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [name, setName] = useState("")

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const handleForm = (e:any
) => {
        e.preventDefault()
        console.log(name)
    }
    return (
        <div>
            <form onSubmit={handleForm} className='py-6 px-24 flex flex-col'>
                <Space direction='vertical'>
                    <Input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="First Name" className="py-3 w-[40rem] mx-auto border-blue-500" />
                    <Input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Last Name" className=" py-3 w-[40rem] mx-auto border-blue-500" />
                    <Input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Location" className="py-3 w-[40rem] mx-auto border-blue-500" />
                    <Input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="What is the approximate value of your assets in Naira" className="py-3 w-[40rem] mx-auto border-blue-500" />
                    <Input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Executor's name" className="py-3 w-[40rem] mx-auto border-blue-500" />
                </Space>
                <button onClick={showModal} className='w-1/5 text-lg mt-5 rounded-lg bg-blue-500 py-3'>Add Beneficiaries</button>
            </form>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </div>
    )
}

export default Formpage