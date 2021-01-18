import React from "react";
import s from './App.module.sass'
import {Contacts} from "./Components/Contacts/Contacts";
import {Forms} from "./Components/Forms/Forms";


export class App extends React.Component {
    state = {
        contacts: [],
        showForm: false,
    }

    constructor(props) {
        super(props);

        this.toggleForm = this.toggleForm.bind(this)
    }

    render() {
        const {showForm} = this.state
        return (
            <div className={s.App}>
                <div className={s.wrapper}>
                    <Contacts contacts={this.state.contacts}/>
                    {showForm ? <Forms addContact={(contact) => this.addContact(contact)}
                                       hideForm={() => this.hideForm()}/> : null}

                    {!showForm ? <button onClick={this.toggleForm}> Add contact</button> : null}
                </div>
            </div>
        )
    }

    hideForm() {
        this.setState({
            showForm: false
        })
    }

    toggleForm() {
        this.setState({
            showForm: !this.state.showForm
        })
    }

    addContact(contact) {
        this.setState({
            contacts: [...this.state.contacts, contact]
        })
    }

}



