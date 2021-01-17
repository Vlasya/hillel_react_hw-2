import React from "react";
import s from './Forms.module.sass'


export class Forms extends React.Component {
    state = {
        name: '',
        surname: '',
        phone: ''
    }

    constructor(props) {
        super(props);
        this.changeInput = this.changeInput.bind(this);
        this.addContact = this.addContact.bind(this)
    }

    render() {
        const {hideForm} = this.props
        return (
            <div className={s.wrapper}>
                <div className={s.inputs}>
                    <label >
                        <p>Enter contact's name</p>
                        <input  placeholder={'Brad'} type="text" value={this.state.name}
                                onChange={this.changeInput('name')}/>
                    </label>
                    <label >
                        <p>Enter contact's surname</p>
                        <input placeholder={'Pitt'} type="text" value={this.state.surname}
                               onChange={this.changeInput('surname')}/>
                    </label>
                    <label >
                        <p>Enter contact's phone</p>
                        <input placeholder={'+38 097 111 111 1'} type="tel" value={this.state.phone}
                               onChange={this.changeInput('phone')}/>
                    </label>

                </div>
                <div className={s.buttons}>
                    <button type="submit" onClick={this.addContact}> Add</button>
                    <button onClick={hideForm}>Cancel</button>
                </div>
            </div>
        );
    }

    changeInput(name) {
        return event => {
            this.setState({
                [name]: event.target.value
            })
        }

    }

    addContact() {
        const inputContact = this.state
        this.props.addContact(inputContact)
        this.setState({
            name: '',
            surname: '',
            phone: ''
        })

    }
}