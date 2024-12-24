import { HiUser, HiPhone, HiOutlineTrash } from 'react-icons/hi';
import s from '../Contact/Contact.module.css';

const Contact = ({ data: { id, name, number }, onDelete }) => {
  return (
    <>
      <div>
        <p className={s.text}>
          <HiUser className={s.icon} />
          &nbsp;
          {name}
        </p>
        <p className={s.text}>
          <HiPhone className={s.icon} />
          &nbsp;
          {number}
        </p>
      </div>
      <button className={s.btn} type="button" onClick={() => onDelete(id)}>
        Delete &nbsp;
        <HiOutlineTrash />
      </button>
    </>
  );
};

export default Contact;
