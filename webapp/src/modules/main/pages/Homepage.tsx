

/**
* Generated by ExoCoding 0.0.1
*/

import React from 'react';
import { useImmer } from 'use-immer';
import * as FontIcon from 'react-icons/fa';
import styles from './Homepage.module.css';
import useTitle from '@/hooks/useTitle';
import useBodystyle from '@/hooks/useBodystyle';
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

type HomepageProps = {};

/**
* Hello World
*/
export const Homepage = (props: HomepageProps) => {

    useTitle('Homepage');

    return (
      <>
    
    <Container fluid="md" className={`d-flex ${styles.hello_world_container}`}>
    
                <p className={`${styles.hello_world_label}`}>
                    Hello World!
                </p>
    
    </Container>
    
    
        <Button
            variant="primary"
            className={`${styles.skating_absent}`}
            
        >
                OK

        </Button>
    
      </>
    )
};
