import { Button, Checkbox, Form, FormProps, Input } from 'antd';
import { LoginService } from '../services/AuthService';

const LoginPage = () => {
    type FieldType = {
        email?: string;
        password?: string;
    };

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        LoginService(values);
    };

    return (
        <>
            <section className='bg-gray-100 flex items-center justify-center min-h-screen'>
                {/* login container  */}
                <div className='bg-white w-1/2 flex shadow-2xl max-w-3xl'>

                    {/* form login  */}
                    <div className='w-1/2 px-16'>
                        <h1 className='uppercase font-bold text-2xl py-10 text-center'> login</h1>

                        <Form
                            name="basic"
                            labelCol={{ span: 24 }}
                            wrapperCol={{ span: 24 }}
                            style={{ maxWidth: 600 }}
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            autoComplete="off"
                        >
                            <Form.Item<FieldType>
                                label="email"
                                name="email"
                                rules={[{ required: true, type: 'email', message: 'Vui lòng nhập email hợp lệ!' }]}
                                className=''
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item<FieldType>
                                label="Password"
                                name="password"
                                rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item label={null} className='text-center'>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>

                    </div>

                    {/* image  */}
                    <div className='w-1/2 p-5'>
                        <img className='rounded-2xl' src="../../public/Login Art.png" alt="" />
                    </div>

                </div>
            </section>


        </>
    )
}

export default LoginPage;