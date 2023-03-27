import '../contact/contact.css'
const Contact = (contactItem) => {

    return (
        <div>
            <div className='contact-block'>
                <p><span>Ім'я:</span> {contactItem.firstName}</p>
                <p><span>Прізвище:</span> {contactItem.lastName}</p>
                <p><span>Стать:</span> {contactItem.gender}</p>
                <p><span>Телефон</span> :{contactItem.phone}</p>
            </div>
        </div>
    );
};

export default Contact;