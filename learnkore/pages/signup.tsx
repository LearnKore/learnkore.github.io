import { useState } from 'react'
import { useRouter } from 'next/router'
import { supabase } from '../lib/supabaseClient'
import Link from 'next/link'

export default function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const router = useRouter()

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault()
        const { error } = await supabase.auth.signUp({ email, password })
        if (error) return setError(error.message)
        router.push('/dashboard')
    }

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSignup}>
                <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
                <button type="submit">Sign Up</button>
            </form>
            {error && <p>{error}</p>}
            <Link href="/login">Sign In</Link>
        </div>
    )
}
