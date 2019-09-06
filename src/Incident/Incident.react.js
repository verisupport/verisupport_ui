import React from 'react';
import { Form , Grid,Header,Segment,Button} from 'semantic-ui-react'

const options = [
    { key: 'm', text: 'Mobile Network', value: 'mobile' },
    { key: 'b', text: 'Bill Payment', value: 'bill' },
   
  ]
  
  class Incident extends React.Component {
    state = {}
  
    handleChange = (e, { value }) => this.setState({ value })
  
    render() {
      const { value } = this.state
      return (
          <Grid centered columns={2}>
              <Grid.Column>
              <Header as="h2" textAlign="center">
        Add an Incident
      </Header>
      <Segment>
        <Form size="large" >
          <Form.Group widths="equal">
            <Form.Input fluid label=' Title' placeholder='Enter the Title'  />
            
            <Form.Select
              fluid
              label='Category'
              options={options}
              placeholder='Category'
              
            />
          </Form.Group>
         
          <Form.TextArea label='Describe the Incident' placeholder='Kindly give the neccessary details in order to serve you better.' />
          <Form.Checkbox label='I agree to the Terms and Conditions' />
          <Button color="blue" fluid size="large">
            Submit
          </Button>
        </Form>
        </Segment>
        </Grid.Column>
        </Grid>
      )
    }
  }
  
export default Incident;
