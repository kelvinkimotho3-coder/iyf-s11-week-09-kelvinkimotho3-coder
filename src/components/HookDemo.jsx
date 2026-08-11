import useLocalStorage from '../hooks/useLocalStorage';
import useToggle from '../hooks/useToggle';
import useForm from '../hooks/useForm';

function HookDemo() {
    const [theme, setTheme] = useLocalStorage('demoTheme', 'light');
    const [isOpen, { toggle, setFalse }] = useToggle(false);

    const validate = (values) => {
        const errors = {};
        if (!values.email.includes('@')) {
            errors.email = 'Invalid email';
        }
        return errors;
    };

    const { values, errors, touched, handleChange, handleBlur, reset } =
        useForm({ name: '', email: '' }, validate);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
        reset();
    };

    return (
        <div>
            <select value={theme} onChange={e => setTheme(e.target.value)}>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
            </select>

            <button onClick={toggle}>Open Modal</button>
            {isOpen && (
                <div className="modal">
                    <p>Modal Content</p>
                    <button onClick={setFalse}>Close</button>
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <input name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} placeholder="Name" />
                <input name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} placeholder="Email" />
                {touched.email && errors.email && <span className="error">{errors.email}</span>}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default HookDemo;