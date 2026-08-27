import Image from "next/image";
import { ArrowUp, FileText, Github, Mail } from "lucide-react";

const contactLinks = [
    { label: "GitHub", href: "https://github.com/bynestorcode", icon: Github },
    { label: "Email", href: "mailto:hola@nestorvazquez.mx", icon: Mail },
    { label: "CV", href: "https://rxresu.me/rocketmx_/cv-nestor-devsecops", icon: FileText },
];

export default function SiteFooter() {
    return (
        <footer className="mt-12 border-t border-white/10 pb-28 pt-12 text-white md:pb-12">
            <div className="mx-auto grid max-w-7xl gap-10 rounded-3xl border border-white/10 bg-slate-950/60 p-7 shadow-2xl shadow-slate-950/20 backdrop-blur-md sm:p-10 lg:grid-cols-[1.35fr_0.9fr_auto] lg:items-end">
                <div>
                    <a href="#welcome" className="inline-flex items-center gap-3 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200">
                        <Image src="/saturno.png" width={42} height={42} alt="Néstor Vázquez" />
                        <span className="text-lg font-bold">Néstor Vázquez</span>
                    </a>
                    <p className="mt-5 max-w-md leading-7 text-slate-400">Platform Engineer building secure, scalable systems that make delivery more reliable for people and teams.</p>
                    <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-300/25 bg-emerald-300/10 px-3 py-1.5 text-xs font-semibold text-emerald-100">
                        <span className="size-2 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(110,231,183,0.9)]" aria-hidden="true" />
                        Available for remote collaboration
                    </div>
                </div>

                <div>
                    <p className="text-sm font-semibold text-slate-200">Let&apos;s connect</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {contactLinks.map(({ label, href, icon: Icon }) => (
                            <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 text-sm font-semibold text-slate-300 transition hover:border-cyan-200/50 hover:bg-cyan-300/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200">
                                <Icon className="size-4 text-cyan-200" aria-hidden="true" /> {label}
                            </a>
                        ))}
                    </div>
                </div>

                <a href="#welcome" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-cyan-200/35 bg-cyan-300/10 px-4 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/20 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200">
                    Back to top <ArrowUp className="size-4" aria-hidden="true" />
                </a>
            </div>
            <p className="mx-auto mt-6 max-w-6xl px-2 text-center text-xs text-slate-500">© {new Date().getFullYear()} Néstor Vázquez. Built with care in Mexico.</p>
        </footer>
    );
}
