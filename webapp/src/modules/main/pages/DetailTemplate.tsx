

/**
* Generated by ExoCoding 0.0.1
*/

import React from 'react';
import { useImmer } from 'use-immer';
import * as FontIcon from 'react-icons/fa';
import styles from './DetailTemplate.module.css';
import useTitle from '@/hooks/useTitle';
import useBodystyle from '@/hooks/useBodystyle';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

type DetailTemplateProps = {};

/**
* Detail page with a form
*/
export const DetailTemplate = (props: DetailTemplateProps) => {

    useTitle('DetailTemplate');

    return (
      <>
    
        <Row className={`${styles.componentBllOOlBdtz}`}>
    
    <Col sm={12} className={`d-flex ${styles.componentfqrJifwTcg}`}>
    
                <h1 className={`${styles.detail_template_label}`}>
                    Dashboard
                </h1>
    
    </Col>
    
        </Row>
    
      </>
    )
};
