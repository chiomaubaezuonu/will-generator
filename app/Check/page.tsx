import { Button, ConfigProvider, Space, theme } from "antd";

const Check: React.FC = () => (
    <ConfigProvider
        theme={{
         algorithm:theme.compactAlgorithm,
            components: {
                Button: {
                    /* here is your component tokens */
                    textHoverBg: "red",
                },
            },
        }}
    >
        ..<Space>
            <Button>Primary</Button>
            <Button>Default</Button>
        </Space>.
    </ConfigProvider>

);

export default Check;