

/**
* Generated by ExoCoding 0.0.1
*/

import React from 'react';
import { useImmer } from 'use-immer';
import * as FontIcon from 'react-icons/fa';
import styles from './DashboardTemplate.module.css';
import useTitle from '@/hooks/useTitle';
import useBodystyle from '@/hooks/useBodystyle';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

type DashboardTemplateProps = {};

/**
* An almost emtpy page
*/
export const DashboardTemplate = (props: DashboardTemplateProps) => {

    useTitle('dashboardTemplate');

    return (
      <>
    
    <Container fluid="fluid" className={`d-flex ${styles.dashboard} bg-`}>
    
        <Row className={`${styles.content}`}>
    
        <Row className={`${styles.bigender_row}`}>
    
                <p className={`${styles.silver_delicious}`}>
                    Dashboard
                </p>
    
    
        <Button
            variant="primary"
            className={`${styles.componentfjcAioOgnT}`}
            
        >
    <div className='d-inline' style={{  marginRight: '10px',  }}>
       <FontIcon.FaDownload />
    </div>
                Generate Report

        </Button>
    
        </Row>
    
    
        <Row className={`${styles.blockcontent}`}>
    
        <Row className={`${styles.earningslabel}`}>
    
    <Col sm={9} className={`d-flex ${styles.because_quae}`}>
    
                <p className={`${styles.earningsmonthly}`}>
                    EARNINGS (MONTHLY)
                </p>
    
    
                <p className={`${styles.monthlyinfo}`}>
                    $40,000
                </p>
    
    </Col>
    
    
        <Button
            variant=""
            className={`${styles.calendericon}`}
            
        >
    <div className='d-inline' style={{  }}>
       <FontIcon.FaCalendar />
    </div>
                null

        </Button>
    
        </Row>
    
    
        <Row className={`${styles.annulcontent}`}>
    
    <Col sm={9} className={`d-flex ${styles.bike_picket}`}>
    
                <p className={`${styles.earingsannual}`}>
                    EARNINGS (ANNUAL)
                </p>
    
    
                <p className={`${styles.annualinfo}`}>
                    $215,000
                </p>
    
    </Col>
    
    
        <Button
            variant=""
            className={`${styles.dollarsingicon}`}
            
        >
    <div className='d-inline' style={{  }}>
       <FontIcon.FaDollarSign />
    </div>
                null

        </Button>
    
        </Row>
    
    
        <Row className={`${styles.tasksrow}`}>
    
    <Col sm={9} className={`d-flex ${styles.paradigms_mercury}`}>
    
                <p className={`${styles.taskslabel}`}>
                    TASKS
                </p>
    
    
    <ProgressBar animated={true} />
    
    </Col>
    
    
        <Button
            variant=""
            className={`${styles.clipboardlist}`}
            
        >
    <div className='d-inline' style={{  }}>
       <FontIcon.FaClipboardList />
    </div>
                null

        </Button>
    
        </Row>
    
    
        <Row className={`${styles.pedingrequestrow}`}>
    
    <Col sm={9} className={`d-flex ${styles.northwest_ascii}`}>
    
                <p className={`${styles.pendingrequests}`}>
                    PENDING REQUESTS
                </p>
    
    
                <p className={`${styles.requestinfo}`}>
                    18
                </p>
    
    </Col>
    
    
        <Button
            variant=""
            className={`${styles.commentsicon}`}
            
        >
    <div className='d-inline' style={{  }}>
       <FontIcon.FaComments />
    </div>
                null

        </Button>
    
        </Row>
    
        </Row>
    
    
        <Row className={`${styles.bigender_sports}`}>
    
        <Row className={`${styles.earningsoverviewcard}`}>
    
        <Row className={`${styles.earningsoverview_row}`}>
    
                <p className={`${styles.earningsoverview}`}>
                    Earnings Overview
                </p>
    
        </Row>
    
        </Row>
    
    
        <Row className={`${styles.revenuesourcescard}`}>
    
        <Row className={`${styles.revenuesourcesrow}`}>
    
                <p className={`${styles.revenuesources}`}>
                    Revenue Sources
                </p>
    
        </Row>
    
        </Row>
    
        </Row>
    
    
        <Row className={`${styles.invoice_mapping}`}>
    
        <Row className={`${styles.west_female_column1}`}>
    
        <Row className={`${styles.projectcard}`}>
    
        <Row className={`${styles.label_project}`}>
    
                <p className={`${styles.projectlabel}`}>
                    Projects
                </p>
    
        </Row>
    
    
        <Row className={`${styles.projectscard}`}>
    
        <Row className={`${styles.lead_invoice}`}>
    
                <p className={`${styles.spree_copy}`}>
                    Server Migration
                </p>
    
    
    <ProgressBar animated={true} />
    
        </Row>
    
    
        <Row className={`${styles.pish_honda}`}>
    
                <p className={`${styles.spree_copy}`}>
                    Sales Tracking
                </p>
    
    
    <ProgressBar animated={true} />
    
        </Row>
    
    
        <Row className={`${styles.urgently_evolve}`}>
    
                <p className={`${styles.spree_copy}`}>
                    Customer Database
                </p>
    
    
    <ProgressBar animated={true} />
    
        </Row>
    
    
        <Row className={`${styles.borders_recklessly}`}>
    
                <p className={`${styles.spree_copy}`}>
                    Payout Details
                </p>
    
    
    <ProgressBar animated={true} />
    
        </Row>
    
    
        <Row className={`${styles.hyundai_hybrid}`}>
    
                <p className={`${styles.spree_copy}`}>
                    Account Setup
                </p>
    
    
    <ProgressBar animated={true} />
    
        </Row>
    
        </Row>
    
        </Row>
    
    
        <Row className={`${styles.rutherfordium_jovial}`}>
    
    <Col sm={5} className={`d-flex ${styles.triumphantly_gate} bg-primary`}>
    
                <p className={`${styles.primary}`}>
                    Primary
                </p>
    
    
                <p className={`${styles.color}`}>
                    #4e73df
                </p>
    
    </Col>
    
    
    <Col sm={5} className={`d-flex ${styles.azure_kilogram} bg-success`}>
    
                <p className={`${styles.primary}`}>
                    Success
                </p>
    
    
                <p className={`${styles.color}`}>
                    #1cc88a
                </p>
    
    </Col>
    
    
    <Col sm={5} className={`d-flex ${styles.tools_southeast} bg-info`}>
    
                <p className={`${styles.primary}`}>
                    Info
                </p>
    
    
                <p className={`${styles.color}`}>
                    #36b9cc
                </p>
    
    </Col>
    
    
    <Col sm={5} className={`d-flex ${styles.dynamic_buckinghamshire} bg-warning`}>
    
                <p className={`${styles.primary}`}>
                    Warning
                </p>
    
    
                <p className={`${styles.color}`}>
                    #f6c23e
                </p>
    
    </Col>
    
    
    <Col sm={5} className={`d-flex ${styles.avon_fantastic} bg-danger`}>
    
                <p className={`${styles.primary}`}>
                    Danger
                </p>
    
    
                <p className={`${styles.color}`}>
                    #e74a3b
                </p>
    
    </Col>
    
    
    <Col sm={5} className={`d-flex ${styles.maldives_virtual} bg-secondary`}>
    
                <p className={`${styles.primary}`}>
                    Secondary
                </p>
    
    
                <p className={`${styles.color}`}>
                    #858796
                </p>
    
    </Col>
    
    
    <Col sm={5} className={`d-flex ${styles.metrics_what} bg-`}>
    
                <p className={`${styles.primary}`}>
                    Light
                </p>
    
    
                <p className={`${styles.color}`}>
                    #f8f9fc
                </p>
    
    </Col>
    
    
    <Col sm={5} className={`d-flex ${styles.sol_green} bg-`}>
    
                <p className={`${styles.primary}`}>
                    Dark
                </p>
    
    
                <p className={`${styles.color}`}>
                    #5a5c69
                </p>
    
    </Col>
    
        </Row>
    
        </Row>
    
    
        <Row className={`${styles.developmentapproachcard}`}>
    
        <Row className={`${styles.spoon_customer}`}>
    
        <Row className={`${styles.contentlabel}`}>
    
                <p className={`${styles.illustrations}`}>
                    Illustrations
                </p>
    
        </Row>
    
    
        <img className={`figure-img ${styles.platforms_navigate}`} src={`https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg`} alt='' title=''/>
    
    
                <p className={`${styles.svglabel}`}>
                    Add some quality, svg illustrations to your project courtesy of unDraw, a constantly updated collection of beautiful svg images that you can use completely free and without attribution!
                </p>
    
    
                <p className={`${styles.svglinl}`}>
                    Browse Illustrations on unDraw →
                </p>
    
        </Row>
    
    
        <Row className={`${styles.automotive_adjust}`}>
    
        <Row className={`${styles.labelproject}`}>
    
                <p className={`${styles.developmentapproach}`}>
                    Development Approach
                </p>
    
        </Row>
    
    
                <p className={`${styles.sbadminlabel}`}>
                    SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat and poor page performance. Custom CSS classes are used to create custom components and custom utility classes.
                </p>
    
    
                <p className={`${styles.workinglabel}`}>
                    Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classes.
                </p>
    
        </Row>
    
        </Row>
    
        </Row>
    
    
        <Row className={`${styles.copyright}`}>
    
                <p className={`${styles.copyright_label}`}>
                    Copyright © Your Website 2023
                </p>
    
        </Row>
    
        </Row>
    
    </Container>
    
      </>
    )
};
