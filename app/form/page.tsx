"use client"
import { Button, Divider, Form, Input, Modal, Space } from 'antd'
import React, { useEffect, useState } from 'react'

interface FormType {
    beneficiaryFirstName: string | "",
    beneficiaryLastName: string | "",
    percentage: string | ""
}
const Formpage = () => {
    const storedList = JSON.parse(localStorage.getItem('Beneficiary-list') || "")
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [location, setLocation] = useState("")
    const [assetsPercentage, setAssetsPercentage] = useState("")
    const [executorName, setExecutorName] = useState("")
    // const [newBeneficiaryFirstName, setNewBeneficiaryFirstName] = useState("")
    // const [newBeneficiaryLastName, setNewBeneficiaryLastName] = useState("")
    // const [newPercentage, setNewPercentage] = useState("")
    const [newFormValues, setNewFormValues] = useState<any>({
        newBeneficiaryFirstName: "",
        newBeneficiaryLastName: "",
        newPercentage: ""
    })
    const [formValues, setFormValues] = useState<FormType>({
        beneficiaryFirstName: storedList.beneficiaryFirstName,
        beneficiaryLastName: storedList.beneficiaryLastName,
        percentage: storedList.percentage
    })


    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);

        if (storedList === "") {
            return ""
        }

        const newBeneficiariesList: any = {
            id: storedList.length === 0 ? 1 : storedList.length + 1,
            firstName: newFormValues.newBeneficiaryFirstName,
            lastName: newFormValues.newBeneficiaryLastName,
            percentage: newFormValues.newPercentage
        }
        const newForm = { ...formValues, newBeneficiariesList }
        setFormValues(newForm)
        setNewFormValues("")
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const handleForm = (e: any
    ) => {
        e.preventDefault()

    }

    useEffect(() => {
        localStorage.setItem('Beneficiary-list', JSON.stringify(formValues))
    }, [formValues])

    return (
        <div>
            <form onSubmit={handleForm} className='py-6 px-24 flex flex-col justify-center'>
                <Space direction='vertical'>
                    <Input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="First Name" className="py-3 w-[40rem] mx-auto border-blue-500" />
                    <Input value={lastName} onChange={(e) => setName(e.target.value)} type="text" placeholder="Last Name" className=" py-3 w-[40rem] mx-auto border-blue-500" />
                    <Input value={location} onChange={(e) => setName(e.target.value)} type="text" placeholder="Location" className="py-3 w-[40rem] mx-auto border-blue-500" />
                    <Input value={assetsPercentage} onChange={(e) => setName(e.target.value)} type="text" placeholder="What is the approximate value of your assets in Naira" className="py-3 w-[40rem] mx-auto border-blue-500" />
                    <Input value={executorName} onChange={(e) => setName(e.target.value)} type="text" placeholder="Executor's name" className="py-3 w-[40rem] mx-auto border-blue-500" />
                </Space>
                <button onClick={showModal} className='w-1/5 text-lg mt-5 rounded-lg bg-blue-500 py-3'>Add Beneficiaries</button>
            </form>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Input value={newFormValues.newBeneficiaryFirstName} onChange={(e) => setNewFormValues({ ...newFormValues, newBeneficiaryFirstName: e.target.value })} type="text" placeholder="First Name" className="py-2 border-blue-500" />
                <Input value={formValues.beneficiaryLastName} onChange={(e) => setFormValues({ ...formValues, beneficiaryLastName: e.target.value })} type="text" placeholder="Last Name" className="py-2 border-blue-500 my-4" />
                <Input value={formValues.percentage} onChange={(e) => setFormValues({ ...formValues, percentage: e.target.value })} type="text" placeholder="Percentage &#37;" className="py-3 border-blue-500" />
            </Modal>
            <div className='flex justify-between w-1/4 pl-4 bg-blue-200 p-14'>
                <div className='flex'>
                    <h1 className='mr-3'>{formValues.beneficiaryFirstName}</h1>
                    <h1>{formValues.beneficiaryLastName}</h1>
                </div>
                <div>
                    {formValues.percentage &&

                        <div>
                            <span>{formValues.percentage}</span>
                            <span>&#37;</span>
                        </div>}
                </div>
            </div>
        </div>
    )
}

export default Formpage