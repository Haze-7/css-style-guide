import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [user, setUser] = useState(null);

  // On mount, check if already logged in
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => listener.subscription.unsubscribe();
  }, []);

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

  async function signOut() {
    await supabase.auth.signOut();
    setUser(null);
    setMessage('Logged out.');
  }

  if (user) {
    return (
      <div className="bg-gold text-dark p-8 rounded-lg shadow-lg ">
        <p className="mb-4">Welcome, {user.email}</p>
        <button className="bg-gray p-2 rounded-xl" onClick={signOut}>Log Out</button>
        {message && <p className="mt-2">{message}</p>}
      </div>
    );
  }

  return (
    <div className="bg-gold text-dark p-8 rounded-lg shadow-lg h-[30vh] w-[30vw] flex flex-col justify-center items-center">
      <h2 className="mb-4 text-xl font-bold">Sign Up / Sign In</h2>
      <input
        className="block mb-2 p-2 rounded"
        type="email"
        placeholder="Your email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        className="block mb-4 p-2 rounded"
        type="password"
        placeholder="Your password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <div>
        <button className="m-2 bg-gray p-2 rounded-xl" onClick={signUp} disabled={loading}>Sign Up</button>
        <button className="m-2 bg-gray p-2 rounded-xl" onClick={signIn} disabled={loading}>Sign In</button>
      </div>
      {message && <p className="mt-2">{message}</p>}
    </div>
  );
}