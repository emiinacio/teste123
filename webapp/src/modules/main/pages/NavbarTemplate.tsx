

/**
* Generated by ExoCoding 0.0.1
*/

import React from 'react';
import { useImmer } from 'use-immer';
import * as FontIcon from 'react-icons/fa';
import styles from './NavbarTemplate.module.css';
import useTitle from '@/hooks/useTitle';
import useBodystyle from '@/hooks/useBodystyle';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { NavDropdown } from 'react-bootstrap';

type NavbarTemplateProps = {};

/**
* Simple navbar
*/
export const NavbarTemplate = (props: NavbarTemplateProps) => {

    useTitle('NavbarTemplate');

    return (
      <>
    

        <Navbar bg="primary" expand="lg" className={`${styles.componentZPOFeZnhkf}`}>
            <Container>
                <Navbar.Brand >
                    
                    myapp
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    
      </>
    )
};
