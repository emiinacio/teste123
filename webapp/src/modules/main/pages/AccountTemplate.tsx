

/**
* Generated by ExoCoding 0.0.1
*/

import React from 'react';
import { useImmer } from 'use-immer';
import * as FontIcon from 'react-icons/fa';
import styles from './AccountTemplate.module.css';
import useTitle from '@/hooks/useTitle';
import useBodystyle from '@/hooks/useBodystyle';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

type AccountTemplateProps = {};

/**
* An almost emtpy page
*/
export const AccountTemplate = (props: AccountTemplateProps) => {
      const [showPassword, setShowPassword] = React.useState<any>();
      const [showPassword, setShowPassword] = React.useState<any>();

    useTitle('AccountTemplate');

    return (
      <>
    
    <Container fluid="fluid" className={`d-flex ${styles.accounttemplate} bg-primary`}>
    
        <Row className={`${styles.conteiner}`}>
    
    <Col  className={`d-flex ${styles.image} bg-warning`}>
    </Col>
    
    
    <Col  className={`d-flex ${styles.content} bg-light`}>
    
                <p className={`${styles.createaccount}`}>
                    Create an Account!
                </p>
    
    
        <Row className={`${styles.funk_viral}`}>
    
    <Form.Group className={`${styles.inputfirstname}`}>
        <Form.Label>
            
        </Form.Label>
        <Form.Control
            type="text"
placeholder="First Name"        />
    </Form.Group>
    
    
    <Form.Group className={`${styles.inputlastname}`}>
        <Form.Label>
            
        </Form.Label>
        <Form.Control
            type="text"
placeholder="Last Name"        />
    </Form.Group>
    
    <Form.Group className={`${styles.inputname}`}>
        <Form.Label>
            
        </Form.Label>
        <InputGroup>
            <InputGroup.Text><FontIcon.FaEnvelope/></InputGroup.Text>
            <Form.Control
                type="email"
placeholder="Email Address"
disabled={false}            />
        </InputGroup>
    </Form.Group>
    <Form.Group className={`${styles.inputpassword}`}>
        <Form.Label>
            
        </Form.Label>
        <InputGroup>
            <Form.Control
                type={showPassword ? 'text' : 'password'}
placeholder="Password"            />
            <Button variant="outline-secondary" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FontIcon.FaEyeSlash /> : <FontIcon.FaEye />}
            </Button>
        </InputGroup>
    </Form.Group>
    <Form.Group className={`${styles.inputconfirmpass}`}>
        <Form.Label>
            
        </Form.Label>
        <InputGroup>
            <Form.Control
                type={showPassword ? 'text' : 'password'}
placeholder="Repeat Password"            />
            <Button variant="outline-secondary" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FontIcon.FaEyeSlash /> : <FontIcon.FaEye />}
            </Button>
        </InputGroup>
    </Form.Group>
        </Row>
    
    
        <Button
            variant="primary"
            className={`${styles.buttonregisteraccount}`}
            
        >
                Register Account

        </Button>
    
    
        <Row className={`${styles.deliverables_electric}`}>
    
        <Button
            variant="danger"
            className={`${styles.buttonlogingoogle}`}
            
        >
    <div className='d-inline' style={{  }}>
       <FontIcon.FaGoogle />
    </div>
                 Register with Google

        </Button>
    
    
        <Button
            variant="secondary"
            className={`${styles.buttonloginfacebook}`}
            
        >
    <div className='d-inline' style={{  }}>
       <FontIcon.FaFacebookF />
    </div>
                 Register with Facebook 

        </Button>
    
        </Row>
    
    
                <p className={`${styles.forgotpasslabel}`}>
                    Forgot Password? 
                </p>
    
    
                <p className={`${styles.alreadyaccountlabel}`}>
                    Already have an account? Login!
                </p>
    
    </Col>
    
        </Row>
    
    </Container>
    
      </>
    )
};
