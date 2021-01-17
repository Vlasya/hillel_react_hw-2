import React from "react";
import s from './Contacts.module.sass'


export const Contacts = (props) => {
    console.log(props.contacts)
    // let td= `<tr`
    const contact = props.contacts.map((contact, index) =>
        <tr key={index}>
            <td>{index + 1}</td>
            <td>{contact.name}</td>
            <td>{contact.surname}</td>
            <td>{contact.phone}</td>
        </tr>)
    return (
        <div className={s.wrapper}>
            <table className={s.table}>
                <thead>
                <tr>
                    <td>№</td>
                    <td>Name</td>
                    <td>Surname</td>
                    <td>Phone number</td>
                </tr>
                </thead>
                <tbody>
                {contact}
                </tbody>

            </table>
        </div>
    )
}