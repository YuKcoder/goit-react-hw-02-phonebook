import PropTypes from 'prop-types';

export default function ContactItem({
  name,
  number,
  contactId,
  onDeleteContact,
}) {
  return (
    <li>
      <button type="button" onClick={() => onDeleteContact(contactId)}>
        x
      </button>
      {name}: {number}
    </li>
  );
}

ContactItem.propTypes = {
  contactId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
