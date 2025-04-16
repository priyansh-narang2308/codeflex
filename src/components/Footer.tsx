import { ZapIcon, FacebookIcon, TwitterIcon, InstagramIcon, GithubIcon } from "lucide-react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="border-t border-border bg-background/80 backdrop-blur-sm">
            {/* Top border glow */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

            <div className="container mx-auto px-4 py-10">
                <div className="flex flex-col gap-10 md:flex-row justify-between items-center md:items-start">
                    <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="p-1 bg-primary/10 rounded">
                                <ZapIcon className="w-4 h-4 text-primary" />
                            </div>
                            <span className="text-xl font-bold font-mono">
                                code<span className="text-primary">flex</span>.ai
                            </span>
                        </Link>
                        <p className="text-sm text-muted-foreground">
                            © {new Date().getFullYear()} codeflex.ai — All rights reserved.
                        </p>

                        {/* Social Media Icons */}
                        <div className="flex gap-4 mt-2">
                            <Link href="https://github.com" className="hover:text-primary text-muted-foreground transition-colors">
                                <GithubIcon className="w-4 h-4" />
                            </Link>
                            <Link href="https://twitter.com" className="hover:text-primary text-muted-foreground transition-colors">
                                <TwitterIcon className="w-4 h-4" />
                            </Link>
                            <Link href="https://facebook.com" className="hover:text-primary text-muted-foreground transition-colors">
                                <FacebookIcon className="w-4 h-4" />
                            </Link>
                            <Link href="https://instagram.com" className="hover:text-primary text-muted-foreground transition-colors">
                                <InstagramIcon className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-2 text-sm text-center md:text-left">
                        <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                            About
                        </Link>
                        <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                            Terms
                        </Link>
                        <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                            Privacy
                        </Link>
                        <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                            Contact
                        </Link>
                        <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                            Blog
                        </Link>
                        <Link href="/help" className="text-muted-foreground hover:text-primary transition-colors">
                            Help
                        </Link>
                    </div>


                    <div className="flex flex-col items-center md:items-end gap-2">
                        <div className="flex items-center gap-2 px-3 py-2 border border-border rounded-md bg-background/50">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                            <span className="text-xs font-mono">SYSTEM OPERATIONAL</span>
                        </div>
                        <span className="text-xs text-muted-foreground">
                            Last checked: {new Date().toLocaleTimeString()}
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
