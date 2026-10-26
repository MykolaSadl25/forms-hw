import { Component } from "react";
import Form from "./component/Form/Form";
import ContactList from "./component/ContactList/ContactList";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    name: "",
    number: "",
  };
  componentDidMount(){
    let savedData = window.localStorage.getItem("contacts")
     if (savedData) {
      this.setState({
        contacts:JSON.parse(savedData)
      })
    }
  }


  componentDidUpdate(_,prevState){
    if (prevState.contacts.length !== this.state.contacts.length) {
      window.localStorage.setItem("contacts",JSON.stringify(this.state.contacts))
    }
  }

  handleSubmit = (evt) => {
    evt.preventDefault();

    const { name, number } = this.state;

    const data = {
      id: String(Date.now()),
      name,
      number,
    };

    this.setState((prev) => ({
      contacts: [...prev.contacts, data],
    }));
    this.setState({
      name:"",
      number:"",
    })
  };

  handleInput = (evt) => {
    const { name, value } = evt.target;

    this.setState({
      [name]: value,
    });
  };

  handleFilterInput = (evt) => {
    this.setState({
      filter: evt.target.value,
    });
  };

  handleDelete = (id) => {
    this.setState((prev) => {
      return {
        contacts: prev.contacts.filter((user) => user.id !== id),
      };
    });
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = contacts.filter((user) =>
      user.name.toLowerCase().includes(filter.toLowerCase()),
    );

    return (
      <>
        <Form name={this.state.name} number={this.state.number} onSubmit={this.handleSubmit} onInput={this.handleInput} />

        <ContactList
          data={filteredContacts}
          filter={filter}
          onTyping={this.handleFilterInput}
          onDel={this.handleDelete}
        />
      </>
    );
  }
}

export default App;
