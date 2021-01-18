import React from "react";
import s from './Forms.module.sass'


export class Forms extends React.Component {
    state = {
        name: '',
        surname: '',
        phone: '',
        formValid: false,
        formErrors: {
            name: false,
            surname: false,
            phone: false
        }
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
                    <label>
                        <p>Enter contact's name</p>
                        <input className={`${!this.state.formErrors.name ? s.hide : null}`}
                               placeholder={'Brad'} type="text"
                               value={this.state.name}
                               onChange={this.changeInput('name')}
                        />
                    </label>
                    <label>
                        <p>Enter contact's surname</p>
                        <input className={`${!this.state.formErrors.surname ? s.hide : null}`}
                               placeholder={'Pitt'} type="text"
                               value={this.state.surname}
                               onChange={this.changeInput('surname')}/>
                    </label>
                    <label>
                        <p>Enter contact's phone</p>
                        <input className={`${!this.state.formErrors.phone ? s.hide : null}`}
                               placeholder={'+38 097 111 111 1'} type="tel"
                               value={this.state.phone}
                               onChange={this.changeInput('phone')}/>
                    </label>

                </div>
                <div className={s.buttons}>
                    <button disabled={!this.state.formValid} type="submit" onClick={this.addContact}> Add</button>
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

            //check inputs
            if (event.target.value.length > 0) {
                this.setState({
                    formErrors: {
                        ...this.state.formErrors,
                        [name]: true
                    }
                })
            } else {
                this.setState({
                    formErrors: {
                        ...this.state.formErrors,
                        [name]: false
                    }
                })
            }
            //Block ADD's btn
            const checkForm = this.state.formErrors
            checkForm.name && checkForm.surname && checkForm.phone ?
                this.setState({formValid: true}) :
                this.setState({formValid: false})


        }

    }

    addContact() {
        const inputContact = this.state
        this.props.addContact(inputContact)
        this.setState({
            name: '',
            surname: '',
            phone: '',
            formValid: false,
            formErrors: {
                name: false,
                surname: false,
                phone: false
            }
        })

    }
}