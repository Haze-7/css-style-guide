import { useState } from 'react';
import { supabase } from '../supabaseClient';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  async function signUp() {
    setLoading(true);
    setMessage('');
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) setMessage(error.message);
    else setMessage("You're signed up!");
    setLoading(false);
  }

  async function signIn() {
    setLoading(true);
    setMessage('');
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setMessage(error.message);
    else setMessage('Logged in successfully!');
    setLoading(false);
  }

  return (
    <div className="bg-gold text-dark p-24 rounded-lg shadow-lg ">
      <h2>Sign Up / Sign In</h2>
      <input
        type="email"
        placeholder="Your email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Your password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button className="m-4 bg-gray p-2 rounded-xl" onClick={signUp} disabled={loading}>Sign Up</button>
      <button className="m-4 bg-gray p-2 rounded-x" onClick={signIn} disabled={loading}>Sign In</button>
      {message && <p>{message}</p>}
    </div>
  );
}