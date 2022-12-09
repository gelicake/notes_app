import React, { Suspense, useEffect, useState } from 'react'
import { Await, Navigate, useLoaderData, useNavigate } from 'react-router-dom'
import { editNote } from '../api/notes';

const EditPage = () => {
    const { id, notePromise } = useLoaderData()
    const navigate = useNavigate()
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const handleTitleChange = (e) => setTitle(e.target.value);
    const handleBodyChange = (e) => setBody(e.target.value);
    const handleCreate = () => {
        editNote(id, title, body).then((n) => {
            navigate(`/notes/${n.id}`)
        })
    };
    useEffect(() => {
        notePromise.then((note) => {
            setBody(note.body);
            setTitle(note.title)
        })
    }, [notePromise])
    return (
        <div className="py-4">
            <h2 className="text-2xl text-center">Edit note</h2>
            <Suspense fallback={<p>Loading...</p>}>
                <Await resolve={notePromise} errorElement={<Navigate to={"/404"} />}>
                    <div className="max-w-xs mx-auto flex flex-col gap-2">
                        <input
                            type="text"
                            className="border border-gray-300 py-1 px-2 rounded-md"
                            value={title}
                            placeholder="Title"
                            onChange={handleTitleChange}
                        />
                        <textarea
                            className="border border-gray-300 py-1 px-2 rounded-md"
                            value={body}
                            placeholder="Body"
                            onChange={handleBodyChange}
                        />
                        <button
                            className="bg-slate-400 py-1 px-2 rounded-md text-white"
                            onClick={handleCreate}
                        >
                            Save
                        </button>
                    </div>
                </Await>
            </Suspense>
        </div>
    );
}

export default EditPage