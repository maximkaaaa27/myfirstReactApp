import React, {useState, useContext} from 'react';
import { AlertContext } from '../context/alert/alertContext'
import { FirebaseContext } from '../context/firebase/firebaseContext'

export const Form = () => {
    const [value, setvalue] = useState('')
    const alert = useContext(AlertContext)
    const firebase = useContext(FirebaseContext)

    const submitHandler = event => {
        event.preventDefault()
        if (value.trim()) {
        firebase.addNote(value.trim()).then(() => {
            alert.show('Note was create', 'success')
        }).catch(() => {
            alert.show('Something going wrong', 'danger')
        })
        
        setvalue('')
        } else {
            alert.show('Enter Note')
        }
    }

    return (
        <form onSubmit = {submitHandler}>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Input Note's Name"
                    value={value}
                    onChange={e => setvalue(e.target.value)}
                />
            </div>
        </form>
    )
}