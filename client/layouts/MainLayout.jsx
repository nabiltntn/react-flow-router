const {
    Grid, Row, Col
} = ReactBootstrap


MainLayout = React.createClass({
    render() {
        return (
            <div>
                <header>
                <Grid>
                    <Row>
                        <Col xs={12} md={8}><h1>Posts with , react,flow router, react-layout, subs-Manager </h1></Col>
                    </Row>
                </Grid>
                </header>
                <main>
                
                <Grid>
                    <Row>
                        <Col xs={12} md={8}>{this.props.content}</Col>
                        <Col xs={6} md={4}></Col>
                    </Row>
                </Grid>
                
                
                </main>
                <footer>
                <Grid>
                    <Row>
                        <Col xs={12} md={8}><hr/>2015 - Nabil - Learn React, flow-router, subs-Manger</Col>
                    </Row>
                </Grid>
                </footer>
            </div>
        )
    }
})