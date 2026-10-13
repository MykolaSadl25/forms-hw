import { Component } from "react";
import { List,Item,Input,Button } from "./ContactList.styled";

class ContactList extends Component{
    render(){
        const {data,onTyping,filter,onDel}=this.props
        return(
            <>
            <h2>Contacts</h2>
            <p>Find contacts by a name</p>
            <Input onChange={onTyping}  type="text" placeholder="Enter Name" value={filter}/>
            <List>{data.map(({id,name,number})=>{
                return <Item key={id}>
                    <h2>{name}: <span>{number}</span></h2>
                    <Button type="button" onClick={()=>onDel(id)}>Delete contact</Button>
                </Item>
            })}</List>
            </>
        )
    }
}
export default ContactList