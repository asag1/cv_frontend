import React, { useState } from "react";
import "./index.css";
import { useFetch } from "../../Utils/fetch-hooks";
import { API_DOMAIN, API_ENDPOINTS } from "../../Utils/constants";
import {
  FaEnvelope,
  FaGithubAlt,
  FaLinkedinIn,
  FaMapMarker,
  FaPhone
} from "react-icons/fa";
import { post } from "../../Utils/post";
import { fetchdelete } from "../../Utils/delete";
import { putContact } from "../../Utils/put";

const icons = { FaEnvelope, FaPhone, FaMapMarker, FaLinkedinIn, FaGithubAlt };

function Item(props) {
  const Icon = icons[props.data.type];

  const clicked = async event => {
    event.preventDefault();
    const { value } = event.target;
    console.log(value);
    props.removeContact(props.data.id);
    await fetchdelete(API_ENDPOINTS.deleteContact, value);
  };
  return (
    <div>
      <a className="Contacts--item" href={props.data.url}>
        <Icon className="Contacts--item-icon" />
        <span className="Contacts--item-text">{props.data.value}</span>
      </a>
      <button value={props.data.id} onClick={clicked}>
        Delete
      </button>
    </div>
  );
}

function Contacts(props) {
  const { loading, data, setData } = useFetch(API_ENDPOINTS.contacts);
  const addContact = contact => {
    setData([...data, contact]);
  };
  const removeContact = contactId => {
    setData(data.filter(contact => contactId !== contact.id));
  };
  return (
    <section className="Contacts">
      <h3>Contacts</h3>
      {loading ? (
        <div />
      ) : (
        data.map(contact => (
          <Item removeContact={removeContact} data={contact} />
        ))
      )}
      <AddContactForm addContact={addContact} />
    </section>
  );
}

function AddContactForm(props) {
  const initialFormState = { value: "", type: "FaEnvelope", url: "" };
  const [contact, setContact] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setContact({ ...contact, [name]: value });
  };

  const { loading, data } = useFetch(API_ENDPOINTS.contactTypes);

  const creatContact = async event => {
    event.preventDefault();
    if (!contact.value || !contact.type || !contact.url) return;

    const response = await post(API_ENDPOINTS.addContacts, contact);
    props.addContact(response);
    setContact(initialFormState);
  };

  return (
    <form onSubmit={creatContact}>
      <label className="Form">Value</label>
      <input
        className="Input"
        type="text"
        name="value"
        value={contact.value}
        onChange={handleInputChange}
      />
      <label className="Form">Type</label>
      <select
        className="Input"
        value={contact.type}
        name="type"
        onChange={handleInputChange}
      >
        {loading ? (
          <div>Loading...</div>
        ) : (
          data.map(type => <option value={type}>{type}</option>)
        )}
      </select>
      <label className="Form">Url</label>
      <input
        className="Input"
        type="text"
        name="url"
        value={contact.url}
        onChange={handleInputChange}
      />
      <button>Add new contact</button>
    </form>
  );
}

export default Contacts;
