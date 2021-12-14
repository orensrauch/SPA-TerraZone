import React from 'react'
import { Accordion, Card, Button } from 'react-bootstrap';

const AccordionHeimdallOnSite = ({customStyle}) => {
    return (
        <Accordion className={`rn-accordion-style ${customStyle}`} defaultActiveKey="0">
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        What is Heimdall ? How does it work?
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>Heimdall stands for Zero Trust over SMB protocol, simply saying it is secure Email with advanced automations and Blockchain* encryption level vaults for file sharing. </Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        How can I run Heimdall on the cloud?
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>You can run SDE on the cloud easily. First You'll need to have node and npm on your machine. we deliver the cloud to you, all you need is to configure your needs...</Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                        How can I get the customer support?
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                    <Card.Body>After purchasing the product need you any support you can be share with us with sending mail to support@terrazone.io.</Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="3">
                        Can I get update regularly and For how long do I get updates?
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                    <Card.Body>Yes, We will get update SDE on weekly basis as it SaaS and we want to protect our clients small to corporate againt constant evolving treats.</Card.Body>
                </Accordion.Collapse>
            </Card>

        </Accordion>
    )
}
export default AccordionHeimdallOnSite

