"use client"
import "./App.scss"
import React, { useState } from 'react';
import { Layout, Flex, Typography, Button, Space, Input, ConfigProvider, Form } from 'antd';
import logo from "./images/logo.png"
import Image from 'next/image';
import Formpage from "./form/page";

const { Header, Footer, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#777',
    height: 74,
    paddingInline: 68,
    lineHeight: '64px',
    // backgroundColor: '#4096ff',
    backgroundColor: '#FFFFFF',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
};

const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    // minHeight: 120,
    padding: '7.8rem 2rem',
    lineHeight: '120px',
    color: '#ffffff',
    // backgroundColor: '#0958d9',
    backgroundColor: '#2F323A'
};

// const siderStyle: React.CSSProperties = {
//     textAlign: 'center',
//     lineHeight: '120px',
//     color: '#fff',
//     backgroundColor: '#1677ff',
// };

const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#ffffff'
    // backgroundColor: '#4096ff',
};

const layoutStyle = {
    // borderRadius: 8,
    overflow: 'hidden',
    width: 'calc(100% - 8px)',
    maxWidth: 'calc(100% - 8px)',
};

// const handleForm = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault()
//     setFor
// }
const App: React.FC = () => {
    const [openForm, setOpenForm] = useState<boolean>(false);
    return (
        <div>
            <Flex gap="middle" wrap="wrap">
                <Layout style={layoutStyle}>
                    <Header style={headerStyle}>
                        <div>
                            <Image src={logo} alt='logo' className='w-48' />
                        </div>
                        <div>
                            <Typography.Link className='p-4' style={{ color: '#777', borderRight: "0.001rem solid rgba(119, 119,119, 0.1)", }}>Home</Typography.Link>
                            <Typography.Link href="/faqs" className='p-4' style={{ color: '#777', borderRight: "0.001rem solid rgba(119, 119,119, 0.1)", }}>FAQs</Typography.Link>
                            <Typography.Link className='p-4' style={{ color: '#777', borderRight: "0.001rem solid rgba(119, 119,119, 0.1)", }}>About Us</Typography.Link>
                            <Typography.Link className='py-2 px-6 ml-2 bg-blue-400' style={{ color: 'white' }}>GenerateWill</Typography.Link>
                        </div>
                    </Header>
                    <Content style={contentStyle}>
                        <Typography.Title level={1} className="pageContentText">
                            Always the completely free way <br /> to make your will.
                        </Typography.Title>
                        <Button type="primary" onClick={() => setOpenForm(!openForm)}>GenerateWill</Button>
                    </Content>
                    <Footer style={footerStyle}>
                        <Typography.Text className='text-xl font-bold'>
                            No account needed, no credit card - just 100% free! - Instant download (Word or PDF)
                        </Typography.Text>
                    </Footer>
                    {openForm &&
                        <Formpage />}
                </Layout>


            </Flex>
        </div>
    )
};
export default App;

