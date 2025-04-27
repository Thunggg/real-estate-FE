import { Button, Form, FormProps, Input, message, notification } from 'antd';
import { LoginService } from '../services/AuthService';
import { useNavigate } from 'react-router-dom';
import { useMessageContext } from '../context/message.context';
import { useCurrentNotify } from '../context/notifycation.context';

const LoginPage = () => {
    const navigate = useNavigate();
    const { messageApi } = useMessageContext();
    const { notificationApi } = useCurrentNotify()
    type FieldType = {
        email?: string;
        password?: string;
    };


    const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {

        try {
            const res = await LoginService(values);
            console.log(res);
            if (res.status_code === 200) {
                messageApi.success({
                    type: 'success',
                    content: 'Đăng nhập thành công!',
                });
                navigate("/home");
            } else {
                notificationApi.error({
                    message: 'Đăng nhập thất bại',
                    showProgress: true,
                    pauseOnHover: false,
                    description: res.message,
                    duration: 5,
                });
            }
        } catch (error) {
            notificationApi.error({
                message: 'Đăng nhập thất bại',
                description: 'Đã có lỗi xảy ra!',
                showProgress: true,
                pauseOnHover: false,
                duration: 5,
            });
        }
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