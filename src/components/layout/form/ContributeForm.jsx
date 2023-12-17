import React from 'react'
import './ContributeForm.css'

const ContributeForm = () => {
    return (
        <div className='contribute-form'>
            <div className='form'>
                <div className='inputs'>
                    <input type="text" placeholder='Nome' />
                    <input type="text" placeholder='Email' />
                </div>
                <div className='textarea'>
                    <label htmlFor="mensagem">Mensagem</label>
                    <textarea id="mensagem" name="mensagem" rows="4" cols="50">
                    </textarea>
                </div>
            </div>
            <button>
                Enviar mensagem
            </button>
        </div>
    )
}

export default ContributeForm