// @flow
import * as React from 'react';
import {Col, Container, Row} from "react-bootstrap";

export function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <Container>
                <Row>
                    <Col className="text-center py-3">
                        <p>ProShop &copy; {currentYear}</p>
                    </Col>
                </Row>
            </Container>

        </footer>
    );
};