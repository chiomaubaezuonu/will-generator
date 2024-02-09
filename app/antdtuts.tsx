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
import { Layout, Flex } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: '#4096ff',
};

const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#0958d9',
};

const siderStyle: React.CSSProperties = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#1677ff',
};

const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#4096ff',
};

const layoutStyle = {
    borderRadius: 8,
    overflow: 'hidden',
    width: 'calc(50% - 8px)',
    maxWidth: 'calc(50% - 8px)',
};

const App: React.FC = () => (
    <Flex gap="middle" wrap="wrap">
        <Layout style={layoutStyle}>
            <Header style={headerStyle}>Header</Header>
            <Content style={contentStyle}>Content</Content>
            <Footer style={footerStyle}>Footer</Footer>
        </Layout>


    </Flex>
);

export default App;