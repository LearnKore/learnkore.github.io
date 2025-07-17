import Header from '@/components/Header'
import Footer from '@/components/Footer'

function Dashboard() {
    return (
        <>
            <Header />
            <main className="p-4">
                <h1>Your Dashboard</h1>
                <p>Manage your enrolled courses here.</p>
            </main>
            <Footer />
        </>
    );
}

export default Dashboard;