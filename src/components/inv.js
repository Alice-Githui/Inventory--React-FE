import React, {useState} from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants/file";


class NewInventoryForm extends React.Component {
    // const [inv, setInv] = useState([
    //     pk: 0,
    //     name: "",
    //     quantity: 0,
    //     buying_price: 0,
    //     selling_price: 0, 
    //     date: Date
        
    // ])
    state = {
        pk: 0,
        name: "",
        quantity: 0,
        buying_price: 0,
        selling_price: 0,
        date: Date

    };

    componentDidMount() {
        if (this.props.inventory) {
            const { pk, name, quantity, buying_price, selling_price, date } = this.props.inventory;
            this.setState({ pk, name, quantity, buying_price, selling_price, date });
        }
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    createNewInventory = e => {
        e.preventDefault();
        axios.post(API_URL, this.state).then(() => {
            this.props.resetState();
            this.props.toggle();
        });
    };

    editInventory = e => {
        e.preventDefault();

        axios.put(API_URL + this.state.pk, this.state).then(() => {
            this.props.resetState();
            this.props.toggle();
        });
    };

    defaultIfEmpty = value => {
        return value === "" ? "" : value;
    };

    render() {
        return (
            <Form onSubmit={this.props.inventory ? this.editInventory : this.createNewInventory}>
                <FormGroup>
                    <Label for="name">Name:</Label>
                    <Input type="text"
                        name="name"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.name)} />

                </FormGroup>
                <FormGroup>
                    <Label for="quantity">Quantity:</Label>
                    <Input
                        type="number"
                        name="quantity"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.quantity)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="buying_price">Buying Price:</Label>
                    <Input
                        type="number"
                        name="buying_price"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.buying_price)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="selling_price">Selling Price:</Label>
                    <Input
                        type="number"
                        name="selling_price"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.selling_price)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="date">Date:</Label>
                    <Input
                        type="date"
                        name="date"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.date)}
                    />
                </FormGroup>
                <Button>Upload</Button>
            </Form>
                )
    }
}
// function inventory(props){
//     return (
//         <div className="inventory">
//             <p>Let's do this</p>
//             <h4>{props.p}</h4>
//         </div>

//     );
// }

export default NewInventoryForm