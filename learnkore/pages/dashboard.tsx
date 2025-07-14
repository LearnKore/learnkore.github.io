import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { supabase } from '../lib/supabaseClient'

export default function Dashboard() {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState<any>(null)
    const router = useRouter()

    useEffect(() => {
        const checkSession = async () => {
            const { data } = await supabase.auth.getSession()
            if (!data.session) router.replace('/login')
            else setUser(data.session.user)
            setLoading(false)
        }
        checkSession()
    }, [])

    const handleLogout = async () => {
        await supabase.auth.signOut()
        router.push('/login')
    }

    if (loading) return <p>Loading...</p>

    return (
        <div>
            <h1>Welcome to Learnkore, {user?.email}!</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}
