"use client"
// import { Button,  DatePicker,  Input, Space, Typography } from 'antd'
// import React from 'react'
// import "./App.scss"
// import logo from "./images/logo.png"
// import Image from 'next/image'

// const Antdtuts = () => {
//     return (
//         <div className='app'>
//             <header className='appHeader'>
//                 <Space size={12} direction='vertical'>
//                     <Image src={logo} alt='logo' />
//                     <Input placeholder='First Name' />
//                     <Input placeholder='Last Name' />
//                     <Button  className='ant-btn'>Click me</Button>
//                     <DatePicker className="datePicker"></DatePicker>
//                 </Space>
//             </header>
//         </div>
//     )
// }

// export default Antdtuts

import React from 'react';
import { Layout, Flex, Typography, Button } from 'antd';
import logo from "./images/logo.png"
import Image from 'next/image';

const { Header, Footer, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    // color: '#ff0000',
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
    padding: '9rem 2rem',
    lineHeight: '120px',
    color: '#fff',
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

const App: React.FC = () => (
    <Flex gap="middle" wrap="wrap">
        <Layout style={layoutStyle}>
            <Header style={headerStyle}>
                <div>
                    <Image src={logo} alt='logo' className='w-48' />
                </div>
                <div>
                    <Typography.Link className='p-4'>Home</Typography.Link>
                    <Typography.Link className='p-4'>FAQs</Typography.Link>
                    <Typography.Link className='p-4'>About Us</Typography.Link>
                    <Typography.Link className='py-2 px-6 bg-blue-400' style={{ color: 'white' }}>GenerateWill</Typography.Link>
                </div>
            </Header>
            <Content style={contentStyle}>
                <Typography.Title level={1} style={{ color: 'white' }}>
                    Always the completely free way to make your will.
                </Typography.Title>
                <Button>GenerateWill</Button>
            </Content>
            <Footer style={footerStyle}>
                <Typography.Text>
                    No account needed, no credit card - just 100% free! - Instant download (Word or PDF)
                </Typography.Text>
            </Footer>
        </Layout>


    </Flex>
);

export default App;