import {useState} from 'react';
import apiClient  from '../api/axios';
import {useAuth} from './AuthContext';

export default function LoginPop({open, onClose, onSuccess}) {
    const { setUser } = useAuth();
    const [isRegister, setIsRegister] = useState(false);
    const [firstName, setFirstName]  = useState('');
    const [lastName, setLastName]  = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [err,setErr] = useState('')
    const [busy, setBusy] = useState(false);
    
    if (!open) return null;

    const submit = async () => {
        try {
            setBusy(true); 
            setErr('');

            //Validation guard
            if (isRegister && (!firstName.trim() || !lastName.trim())) {
                setErr("Please enter both first and last names.");
                setBusy(false);
                return;
            }

    
            if (!email.trim() || !password) {
                setErr("Email and password are required.");
                setBusy(false);
                return;
            }

            //Additional password confirmation check for registration
            if (isRegister && password !== confirmPassword) {
                setErr("Passwords do not match.");
                setBusy(false);
                return;
            }
            //Choosing endpoint based on mode
            const route = isRegister ? '/auth/register' : '/auth/login' ;

            const payload = isRegister 
                ? {
                    firstName: firstName.trim(),
                    lastName: lastName.trim(),
                    email: email.trim().toLowerCase(), 
                    password
                }
                : {email: email.trim().toLowerCase(), password};

            const r = await apiClient.post(route, payload);
            setUser(r.data.user);
            onSuccess?.(
                isRegister
                    ? "Registration successful! Welcome, " + r.data.user.firstName
                    : "Login successful! Welcome back, " + r.data.user.firstName
            );
            onClose?.();
        } catch (e) {
            const data = e?.response?.data;
            const msg = data?.message || (data?.errors ? data.errors.map(x => x.msg).join(", ") : null) || e.message || "Login failed";
        setErr(msg);

        } finally {setBusy(false); }
    };
    
    return (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/50">
            <div className="w-full max-w-sm rounded-2xl border border-white/15 bg-blue-800/90 p-6 text-white backdrop-blur">            {/*Dynamic Title*/}
                <h2 className="text-xl font-extrabold">
                    {isRegister ? 'Register' : 'Welcome Back!'}
                </h2>
                <p className="mt-1 text-sm text-yellow-300/80">
                    {isRegister ? 'Create Your Account Below' : 'Sign in to continue.'}
                </p>
                <div className="mt-4 flex flex-col gap-3">
                {/*Show Name input only if registering*/}
                {isRegister && (
                    <div className="flex gap-2">
                        <input
                        className="w-full rounded-xl border border-white/20 bg-black/25 px-3 py-2 text-white placeholder-white/60 outline-none focus:border-yellow-300 focus:ring-4 focus:ring-yellow-300/20"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        disabled={busy}
                        />
                        <input
                        className="w-full rounded-xl border border-white/20 bg-black/25 px-3 py-2 text-white placeholder-white/60 outline-none focus:border-yellow-300 focus:ring-4 focus:ring-yellow-300/20"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        disabled={busy}
                        />
                    </div>
                )}
            
                <input
                    className="w-full rounded-xl border border-white/20 bg-black/25 px-3 py-2 text-white placeholder-white/60 outline-none focus:border-yellow-300 focus:ring-4 focus:ring-yellow-300/20"
                    placeholder="Please Enter School Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoFocus={!isRegister}
                    disabled={busy}
                />
                <input
                    className="w-full rounded-xl border border-white/20 bg-black/25 px-3 py-2 text-white placeholder-white/60 outline-none focus:border-yellow-300 focus:ring-4 focus:ring-yellow-300/20"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={busy}
                />
                {isRegister &&
                    <input
                        className="w-full rounded-xl border border-white/20 bg-black/25 px-3 py-2 text-white placeholder-white/60 outline-none focus:border-yellow-300 focus:ring-4 focus:ring-yellow-300/20"
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        disabled={busy}
                    />
                }
                {err && <div className="text-red-600 text-sm mb-3">{err}</div>}

                <div className="mt-4 flex justify-end gap-3">
                    <button onClick={onClose} 
                        disabled={busy}
                        className="cursor-pointer hover:underline disabled:opacity-60"
                    >
                        Cancel
                    </button>
                    
                    <button
                        className="rounded-xl bg-yellow-300 px-4 py-2 font-bold text-black transition hover:brightness-105 transform disabled:opacity-60 cursor-pointer"
                        onClick={submit}
                        disabled={busy}
                    >
                        {busy ? 'Processing...' : (isRegister ? 'Sign Up' : 'Sign In')}
                    </button>
                </div>
                {/*Toggle link*/}
                <div className="text-center text-sm mb-3">
                    <span className="text-gray-500">
                        {isRegister ? "Already have an account? "  : "Don't have an account? "}
                    </span>
                    <button
                        onClick={() => {
                        setIsRegister(!isRegister);
                        setErr('');
                        setFirstName('');
                        setLastName('');
                        setEmail('');
                        setPassword('');
                        setConfirmPassword('');
                    }}
                    className="font-bold text-yellow-300 hover:underline disabled:opacity-60 cursor-pointer">
                        {isRegister ? "Sign In" : "Register"}
                    </button>
                </div>
            </div>
            </div>
        </div>
    );

}