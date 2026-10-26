import { Component } from "react";
import { nanoid } from "nanoid";
import { Formwrap,Button,Label,Input } from "./Form.styled";
class Form extends Component {
  render() {
    const nameId = nanoid(5);
    const phoneId = nanoid(5);
    const { onSubmit, onInput,name,number } = this.props;
    return (
      <>
        <h1>Phonebook</h1>
        <Formwrap onSubmit={onSubmit}>
          <Label htmlFor={nameId}>Name
            <Input
            onChange={onInput}
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            id={nameId}
            placeholder="Enter Name"
          />
          </Label>
          <Label htmlFor={phoneId}>Phone Number
            <Input
            onChange={onInput}
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            id={phoneId}
            placeholder="Enter Phone number"
          />
          </Label>
          <Button type="submit">Add contact</Button>
        </Formwrap>
      </>
    );
  }
}

export default Form;
