import React from 'react';
import {
    Button,
    Form,
    Grid,
    Header,
    Segment,
  } from 'semantic-ui-react';


class Register extends React.Component {
 
  constructor() {
    super();

    this.state = {
      name:'',
      mobile:'',
      email: '',
      password: '',
      empId:''
        
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}
handleChange(e) {
  let target = e.target;
  let value = target.value;
  let name = target.name;

  this.setState({
    [name]: value
  });
}
handleSubmit(e) {
  e.preventDefault();

  console.log('The form was submitted with the following data:');
  console.log(this.state);
}

    render() {
        return (
            <div >
 <Grid centered columns={2}>
    <Grid.Column>
      <Header as="h1" textAlign="center">
        Register
      </Header>
      <Segment>
        <Form size="large" onSubmit={this.handleSubmit}>
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="Name"
            name="name"
            value={this.state.name} onChange={this.handleChange}
          />
          <Form.Input
            fluid
            icon="mobile"
            iconPosition="left"
            placeholder="Phone Number"
            type="text"
            name="mobile"
            value={this.state.mobile} onChange={this.handleChange}
          />
          <Form.Input
            fluid
            icon="at"
            iconPosition="left"
            placeholder="Email"
            name="email"
            value={this.state.email} onChange={this.handleChange}
          />
           <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
            name="password"
            value={this.state.password} onChange={this.handleChange}
          />
           <Form.Input
            fluid
            icon="user plus"
            iconPosition="left"
            placeholder="Employee Id"
            type="text "
            name="empId"
            value={this.state.empId} onChange={this.handleChange}
          />
          <Button color="blue" fluid size="large">
            Register
          </Button>
        </Form>
      </Segment>
    
    </Grid.Column>
  </Grid>

            </div>
        );
    } 
}

export default Register;

