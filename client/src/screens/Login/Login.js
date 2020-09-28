import React, { Fragment } from 'react';
import Slider from 'react-slick';
import BlockUi from 'react-block-ui';
import { Loader, Types } from 'react-loaders';
import bg1 from '../../assets/utils/images/originals/city.jpg';
import bg2 from '../../assets/utils/images/originals/citydark.jpg';
import bg3 from '../../assets/utils/images/originals/citynights.jpg';
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  Alert,
} from 'reactstrap';
import { useForm, FormProvider } from 'react-hook-form';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers';
import { TextInput, GoogleSignin } from 'components';
import { useAuth } from 'context/Auth';

const validationSchema = object().shape({
  email: string().required('Email is required'),
  password: string().required('Password is required'),
});

const EMAIL = 'email';
const PASSWORD = 'password';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  initialSlide: 0,
  autoplay: true,
  adaptiveHeight: true,
};

const Login = () => {
  const { signIn, hookErrors, loading } = useAuth();
  console.log('hookErrors', hookErrors);
  const methods = useForm({ resolver: yupResolver(validationSchema) });
  const { handleSubmit, errors } = methods;
  return (
    <Fragment>
      <BlockUi
        tag="div"
        blocking={loading}
        className="block-overlay-dark"
        loader={<Loader color="#ffffff" active type="ball-triangle-path" />}
      >
        <div className="h-100">
          <Row className="h-100 no-gutters">
            <Col lg="4" className="d-none d-lg-block">
              <div className="slider-light">
                <Slider {...settings}>
                  <div className="h-100 d-flex justify-content-center align-items-center bg-plum-plate">
                    <div
                      className="slide-img-bg"
                      style={{
                        backgroundImage: 'url(' + bg1 + ')',
                      }}
                    />
                    <div className="slider-content">
                      <h3>Perfect Balance</h3>
                      <p>
                        ArchitectUI is like a dream. Some think it's too good to
                        be true! Extensive collection of unified React Boostrap
                        Components and Elements.
                      </p>
                    </div>
                  </div>
                  <div className="h-100 d-flex justify-content-center align-items-center bg-premium-dark">
                    <div
                      className="slide-img-bg"
                      style={{
                        backgroundImage: 'url(' + bg3 + ')',
                      }}
                    />
                    <div className="slider-content">
                      <h3>Scalable, Modular, Consistent</h3>
                      <p>
                        Easily exclude the components you don't require.
                        Lightweight, consistent Bootstrap based styles across
                        all elements and components
                      </p>
                    </div>
                  </div>
                  <div className="h-100 d-flex justify-content-center align-items-center bg-sunny-morning">
                    <div
                      className="slide-img-bg opacity-6"
                      style={{
                        backgroundImage: 'url(' + bg2 + ')',
                      }}
                    />
                    <div className="slider-content">
                      <h3>Complex, but lightweight</h3>
                      <p>
                        We've included a lot of components that cover almost all
                        use cases for any type of application.
                      </p>
                    </div>
                  </div>
                </Slider>
              </div>
            </Col>
            <Col
              lg="8"
              md="12"
              className="h-100 d-flex bg-white justify-content-center align-items-center"
            >
              <Col lg="9" md="10" sm="12" className="mx-auto app-login-box">
                <div className="app-logo" />
                <h4 className="mb-0">
                  <div>Welcome back,</div>
                  <span>Please sign in to your account.</span>
                </h4>
                <h6 className="mt-3">
                  No account? <span className="text-primary">Sign up now</span>
                </h6>
                <Row className="divider" />
                <div>
                  <FormProvider {...methods}>
                    <Form onSubmit={handleSubmit(data => signIn(data))}>
                      <Row form>
                        <Col md={6}>
                          <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <TextInput
                              type="email"
                              name={EMAIL}
                              id="exampleEmail"
                              placeholder="Email here..."
                              invalid={errors.hasOwnProperty(EMAIL)}
                            />
                            {errors[EMAIL] && (
                              <FormFeedback>
                                {errors[EMAIL].message}
                              </FormFeedback>
                            )}
                          </FormGroup>
                        </Col>
                        <Col md={6}>
                          <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <TextInput
                              type="password"
                              name={PASSWORD}
                              id="examplePassword"
                              placeholder="Password here..."
                              invalid={errors.hasOwnProperty(PASSWORD)}
                            />
                          </FormGroup>
                        </Col>
                        {/* <Col md={12}>Invalid email or password</Col> */}
                      </Row>
                      <FormGroup check>
                        <Input type="checkbox" name="check" id="exampleCheck" />
                        <Label for="exampleCheck" check>
                          Keep me logged in
                        </Label>
                      </FormGroup>
                      <Row className="divider" />
                      <GoogleSignin />
                      <div className="d-flex align-items-center">
                        <div className="ml-auto">
                          <span className="btn-lg btn btn-link">
                            Recover Password
                          </span>{' '}
                          <Button color="primary" size="lg">
                            Login to Dashboard
                          </Button>
                        </div>
                      </div>
                    </Form>
                  </FormProvider>
                </div>
              </Col>
            </Col>
          </Row>
        </div>
      </BlockUi>
    </Fragment>
  );
};

export default Login;
