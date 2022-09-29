import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className='text-center py-3'>
                        Copyright &copy; The Apple Store
                    </Col>
                </Row>
                <Row>
                    <Col className='text-center bg-dark text-muted py-2 '>
                        by @yuvraaaj | Email: yuvraj1999pratyush@gmail.com
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer