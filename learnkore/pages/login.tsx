import { useState } from 'react'
import { useRouter } from 'next/router'
import { supabase } from '../lib/supabaseClient'
import Link from 'next/link'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const router = useRouter()

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        const { error } = await supabase.auth.signInWithPassword({ email, password })
        if (error) return setError(error.message)
        router.push('/dashboard')
    }

    return (
        <div>
            <h1>Log In</h1>
            <form onSubmit={handleLogin}>
                <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
                <button type="submit">Log In</button>
            </form>
            {error && <p>{error}</p>}
            <Link href="/signup">Sign Up</Link>
        </div>
    )
}
