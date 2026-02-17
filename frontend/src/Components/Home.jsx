import {useState} from "react";
import LoginPop from "../auth/LoginPop";

function Card({icon, title, desc}) {
    return (
        <article className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur transitionhover:bg-white/15 transform hover:translate-y-[-2px] hover:shadow-lg cursor-pointer">
            <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-yellow-300 text-black text-2xl">
                    {icon}
                </div>
                <div>
                    <h3 className="font-extrabold text-lg">{title}</h3>
                    <p className="mt-2 text-sm text-orange-300">{desc}</p>
                </div>
            </div>
        </article>
    )
}

export default function Home() {
    const [loginOpen, setLoginOpen] = useState(false);

    return (
        <>
        <div
            className="min-h-screen text-white"
            style={{
                background:
                    "radial-gradient(1200px 600px at 10% 0%, #0800ff, transparent 75%), radial-gradient(900px 500px at 90% 20%, #f2ff00, transparent 75%), #0d5de7",
            }}
        >
            <main className="mx-auto max-w-5xl px-5 py-16 text-center"> 
                <section className="text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
                        Find the Aggie business that suites you!
                    </h1>
                    <p className="mt-4 text-4xl md:text-2xl text-orange-300 text-lg ">
                        Search for that business to suit your needs!
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                        <button className="rounded-xl bg-yellow-300 px-5 py-3 font-bold text-black hover:brightness-105 transform hover:scale-105 cursor-pointer">
                            Get Started
                        </button>
                        <button className="rounded-xl border border-white/25 bg-white/10 px-5 py-3 font-bold hover:bg-white/15 transform hover:scale-105 cursor-pointer"
                            onClick={() => setLoginOpen(true)}
                        >
                            Login
                        </button>
                    </div>
                </section>

                <section className="mt-12 grid gap-4 md:grid-cols-3">
                    <Card icon="🛜" title="Connect with Aggie Businesses" desc="Connect with local business in the NC&T community" />
                    <Card icon="🔎" title="Find new Businesses" desc="Find new businesses to suit your needs." />
                    <Card icon="🎓" title="Keep Track" desc="Keep track of when businesses come and go as your peers join and graduate." />
                </section>

                <section className="mt-10">
                    <div className="rounded-2xl border border-white/15 bg-black/25 p-8 text-center backdrop-blur">
                        <h2 className="text-2xl font-extrabold">Ready to get started?</h2>
                        <p className="mt-2 text-sm text-yellow-300/80">Create an account and start tracking in under a minute.</p>
                        <button className="mt-4 rounded-xl bg-yellow-300 px-5 py-3 font-bold text-black hover:brightness-105 transform hover:scale-105 cursor-pointer"
                            onClick={() => setLoginOpen(true)}
                        >
                            Create an Account
                        </button>
                    </div>
                </section>
            </main>
        </div>

        {/* Login Pop-up Modal */}
        <LoginPop open={loginOpen} onClose={() => setLoginOpen(false)} onSuccess={() => setLoginOpen(false)} />
    </>
    )
}