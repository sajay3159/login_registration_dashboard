import { useFormik } from "formik";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import authFetch from "./AuthFetch";

function Login({ setToggle }) {

  const nav = useNavigate();

  const SignupSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .required("Please Enter Your Email!"),

    password: Yup.string().required("Please Enter Password"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: SignupSchema,

    onSubmit: (values) => {
      authFetch.post("https://real-pear-fly-kilt.cyclic.app/accounts/authenticate",values)
      .then(response=> {

        localStorage.setItem("token",response.data.jwtToken);

        nav("/profile");
        setToggle(true);

      })
      // console.log(values)


    },
  });

  return (
    <Row className="justify-content-center">
      <Col className="shadow bg-white col-lg-5 mt-5">
        <Form className="p-3" onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" onChange={formik.handleChange} isInvalid={formik.touched.email && formik.errors.email} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
            <Form.Control.Feedback type="invalid">
            {formik.touched.email && formik.errors.email}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" onChange={formik.handleChange} isInvalid={formik.touched.password && formik.errors.password}/>
            <Form.Control.Feedback type="invalid">
            {formik.touched.password && formik.errors.password}
            </Form.Control.Feedback>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  )
}

export default Login;
