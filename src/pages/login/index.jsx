import { UserOutlined } from "@ant-design/icons";
import "./index.scss";
import { Link, useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input, Space } from "antd";
import api from "../../config/axios";
import FormItem from "antd/es/form/FormItem";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "../../redux/features/counterSlice";
import { useForm } from "antd/es/form/Form";

function LoginPopup() {
  const distpatch = useDispatch();
  const redux = useSelector(selectUser);
  const navigate = useNavigate();
  const [form] = useForm();

  const onFinish = async (values) => {
    try {
      console.log(values);
      const user = await api.post("/api/login", values);
      distpatch(login(user.data));
      localStorage.setItem("token", user.data.token); //lưu token vao localStogare
      toast.success("login success");
      navigate("/");
    } catch (error) {
      toast.error("Login false");
      console.log(error.response.data.error);
      form.resetFields();
    }
  };

  return (
    <div className="loginPage">
      <div className="loginPage__left ">
        <img
          src="https://i.pinimg.com/originals/5e/47/a8/5e47a80fa0cbfb1e51034a17841d1d86.jpg"
          alt=""
        />
      </div>
      <div className="loginPage__right ">
        <>
          <Form
            onFinish={onFinish}
            form={form}
            name="validateOnly"
            layout="vertical"
            autoComplete="off"
          >
            <h2>Login Page</h2>
            <Form.Item
              name="phone"
              label="Phone"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item>
              <Space>
                <Button
                  htmlType="submit"
                  className="btnStyle"
                  form={form}
                  onClick={() => form.submit()}
                >
                  Submit
                </Button>
              </Space>
            </Form.Item>

            <Form.Item>
              <p style={{ textAlign: "center", fontWeight: "700" }}>Or</p>
            </Form.Item>

            <Form.Item>
              <Space>
                <Button
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "20px",
                    cursor: "pointer",
                    borderRadius: "20px",
                  }}
                  form={form}
                >
                  <img
                    width={30}
                    src="https://storage.googleapis.com/support-kms-prod/ZAl1gIwyUsvfwxoW9ns47iJFioHXODBbIkrK"
                    alt=""
                  />
                  Login with google
                </Button>
              </Space>
            </Form.Item>
          </Form>
        </>
      </div>
    </div>
  );
}

export default LoginPopup;
