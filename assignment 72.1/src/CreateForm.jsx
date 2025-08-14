import React, { useState } from 'react';

function CreateForm({ onCancel, onSave }) {
    const [text, setText] = useState("");
    function handleSave() {
        onSave(text);
        setText("");
    }
    return (
        <div className='border border-gray-300 rounded p-4 flex flex-col gap-4'>
            <h1 className='text-lg font-semibold'>Create a todo</h1>
            <input type="text" value={text} onChange={(event) => setText(event.target.value)} className='w-80 border-2 border-gray-300 outline-none rounded-lg px-2 py-1 focus:border-yellow-500' placeholder='Write an article about XState' />
            <div className='flex gap-2'>
                <button className='bg-yellow-500 hover:bg-yellow-600 rounded text-white px-4 py-2' onClick={handleSave}>Save</button>
                <button className='px-4 py-2 border border-gray-300 rounded' onClick={onCancel}>Cancel</button>
            </div>
        </div>
    );
}

export default CreateForm;