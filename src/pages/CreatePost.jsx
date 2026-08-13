import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/shared/Input/Input';
import Button from '../components/shared/Button/Button';

function CreatePost({ onCreate }) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim() || !body.trim()) return;

        onCreate({
            id: Date.now(),
            title,
            body
        });

        navigate('/posts');
    };

    return (
        <div>
            <h1>Create a New Post</h1>
            <form onSubmit={handleSubmit}>
                <Input
                    label="Title"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Post title"
                    required
                />
                <Input
                    label="Content"
                    name="body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    placeholder="What's on your mind?"
                    required
                />
                <Button type="submit">Publish Post</Button>
            </form>
        </div>
    );
}

export default CreatePost;