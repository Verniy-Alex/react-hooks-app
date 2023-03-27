import React, { useState } from 'react';
import Contact from '../contact/Contact';
import '../contracts/contracts.css'

const Contracts = ({ contacts }) => {
    const [contactItem] = useState(contacts)
    const [search, setSearch] = useState('')
    const [firstBox, setFirstBox] = useState(true)
    const [secondBox, setSecondBox] = useState(true)
    const [thirdBox, setThirdBox] = useState(true)

    function changeFirstBox() {
        setFirstBox(!firstBox)
    }
    function changeSecondBox() {
        setSecondBox(!secondBox)
    }
    function changeThirdBox() {
        setThirdBox(!thirdBox)
    }

    function handleInputValue(e) {
        setSearch(e.target.value)
    }

    return (
        <div className='contracts-wrapper'>
            <div className='contacts-content'>
                <h1>Контакти</h1>
                <div className='inputs-block'>
                    <input
                        className='search-input'
                        onChange={handleInputValue}
                        value={search}
                        type='text'
                        placeholder='search'
                    />
                    <div className='check-inputs'>
                        <label>
                            <input type='checkbox'
                                value={firstBox}
                                onChange={changeFirstBox}
                                label='male'
                            />
                            male
                        </label>
                        <label>
                            <input type='checkbox'
                                value={secondBox}
                                onChange={changeSecondBox}
                                label="female"
                            />
                            female
                        </label>

                        <input type='checkbox'
                            value={thirdBox}
                            onChange={changeThirdBox}
                            label="?"
                        />
                    </div>
                </div>

                {contactItem.filter((item) => {
                    if (
                        item.firstName
                            .toLocaleLowerCase()
                            .includes(search.toLocaleLowerCase()) ||
                        item.lastName
                            .toLocaleLowerCase()
                            .includes(search.toLocaleLowerCase()) ||
                        item.phone.includes(search.toLocaleLowerCase())
                    )
                        return true;
                })
                    .filter((item) => {
                        if (
                            (item.gender === "male" && firstBox) ||
                            (item.gender === "female" && secondBox) ||
                            (!item.gender && thirdBox)
                        ) {
                            return true;
                        }
                    }).map((contact) => (<Contact key={contact.id} {...contact} />))}
            </div>
        </div>
    );
};

export default Contracts;