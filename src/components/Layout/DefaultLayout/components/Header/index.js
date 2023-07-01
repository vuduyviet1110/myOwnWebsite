import Nav from 'react-bootstrap/Nav';
function Header() {
    return ( 
        <div className="container-fluid">
            <div className="row navBar1"> 
                <Nav className='col-md-6' variant="pills" defaultActiveKey="/home">
                    <Nav.Item>
                    <Nav.Link href="/home">LOGO</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="link-1">PRODUCTS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="link-2">NEW ARRIVALS</Nav.Link>
                    </Nav.Item>
                </Nav> 
                <Nav className='col-md-6' variant="pills" defaultActiveKey="/home">
                    <Nav.Item>
                    <Nav.Link eventKey="link-4">👀</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="link-5">🔕</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="link-6">📤</Nav.Link>
                    </Nav.Item>
                </Nav> 
            </div>
        </div>
    );
}

export default Header;