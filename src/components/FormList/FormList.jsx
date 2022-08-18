import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contactsActions';
import s from './FormList.module.css';

const FormList = () => {
  const items = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const filteredContacts = items.filter(el =>
    el.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={s.contact}>
      {filteredContacts.map(el => (
        <li key={el.id} className={s.con}>
          <p className={s.conName}>
            {el.name}: <span>{el.number}</span>
          </p>
          <button
            className={s.btn}
            type="button"
            onClick={() => dispatch(deleteContact(el.id))}
          >
            del
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FormList;
