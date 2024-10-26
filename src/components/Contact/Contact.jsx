import { MdPerson, MdPhone } from 'react-icons/md';

import css from './Contact.module.css';

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <div className={css.container}>
      <div>
        <p className={css.contactInfo}>
          <MdPerson />
          {name}
        </p>
        <p className={css.contactInfo}>
          <MdPhone />
          {number}
        </p>
      </div>
      <button type="button" className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
