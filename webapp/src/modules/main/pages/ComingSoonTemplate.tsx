

/**
* Generated by ExoCoding 0.0.1
*/

import React from 'react';
import { useImmer } from 'use-immer';
import * as FontIcon from 'react-icons/fa';
import styles from './ComingSoonTemplate.module.css';
import useTitle from '@/hooks/useTitle';
import useBodystyle from '@/hooks/useBodystyle';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

type ComingSoonTemplateProps = {};

/**
* An almost emtpy page
*/
export const ComingSoonTemplate = (props: ComingSoonTemplateProps) => {

    useTitle('ComingSoonTemplate');

    return (
      <>
    
        <Row className={`${styles.comingsoon}`}>
    
    <Col sm={12} className={`d-flex ${styles.gradientcolumn} bg-`}>
    
        <Row className={`${styles.content}`}>
    
        <Row className={`${styles.rowitems}`}>
    
                <p className={`${styles.plum_low}`}>
                    Our Website is Coming Soon
                </p>
    
    
        <Row className={`${styles.generate_cum}`}>
    <Form.Group className={`${styles.inputemail}`}>
        <Form.Label>
            
        </Form.Label>
        <InputGroup>
            <InputGroup.Text><FontIcon.FaEnvelope/></InputGroup.Text>
            <Form.Control
                type="email"
placeholder="Enter email address..."
required={true}
disabled={false}            />
        </InputGroup>
    </Form.Group>
    
        <Button
            variant="secondary"
            className={`${styles.unfolded_digitized}`}
            
        >
                NOTIFY ME!

        </Button>
    
        </Row>
    
        </Row>
    
        </Row>
    
    </Col>
    
        </Row>
    
      </>
    )
};
