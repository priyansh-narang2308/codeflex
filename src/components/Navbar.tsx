"use client";
import {
    SignInButton,
    SignUpButton,
    UserButton,
    useUser,
} from "@clerk/nextjs";
import Link from "next/link";
import {
    DumbbellIcon,
    HomeIcon,
    User2Icon,
    ZapIcon,
    MenuIcon,
    XIcon,
} from "lucide-react";
import React, { useState } from "react";
import { Button } from "./ui/button";

const Navbar = () => {
    const { isSignedIn } = useUser();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-md border-b border-border py-3">
            <div className="container mx-auto flex items-center justify-between px-4">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="p-1 bg-primary/10 rounded">
                        <ZapIcon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-xl font-bold font-mono">
                        code<span className="text-primary">flex</span>.ai
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-5">
                    {isSignedIn ? (
                        <>
                            <Link
                                href="/"
                                className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
                            >
                                <HomeIcon size={16} />
                                <span>Home</span>
                            </Link>
                            <Link
                                href="/generate-program"
                                className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
                            >
                                <DumbbellIcon size={16} />
                                <span>Generate</span>
                            </Link>
                            <Link
                                href="/profile"
                                className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
                            >
                                <User2Icon size={16} />
                                <span>Profile</span>
                            </Link>
                            <Button
                                asChild
                                variant="outline"
                                className="ml-2 border-primary/50 text-primary hover:text-white hover:bg-primary/10"
                            >
                                <Link href="/generate-program">Get Started</Link>
                            </Button>
                            <UserButton />
                        </>
                    ) : (
                        <>
                            <SignInButton>
                                <Button
                                    variant="outline"
                                    className="border-primary/50 text-primary hover:text-white hover:bg-primary/10"
                                >
                                    Sign In
                                </Button>
                            </SignInButton>
                            <SignUpButton>
                                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                                    Sign Up
                                </Button>
                            </SignUpButton>
                        </>
                    )}
                </nav>

                <button
                    className="md:hidden p-2 rounded hover:bg-primary/10 transition"
                    onClick={toggleMobileMenu}
                >
                    {isMobileMenuOpen ? (
                        <XIcon className="w-5 h-5 text-primary" />
                    ) : (
                        <MenuIcon className="w-5 h-5 text-primary" />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-background border-t border-border px-4 py-4 space-y-3">
                    {isSignedIn ? (
                        <>
                            <Link
                                href="/"
                                className="flex items-center gap-2 text-sm hover:text-primary"
                            >
                                <HomeIcon size={16} />
                                Home
                            </Link>
                            <Link
                                href="/generate-program"
                                className="flex items-center gap-2 text-sm hover:text-primary"
                            >
                                <DumbbellIcon size={16} />
                                Generate
                            </Link>
                            <Link
                                href="/profile"
                                className="flex items-center gap-2 text-sm hover:text-primary"
                            >
                                <User2Icon size={16} />
                                Profile
                            </Link>
                            <Link
                                href="/generate-program"
                                className="block text-sm border border-primary/50 rounded px-3 py-1 text-primary hover:bg-primary/10"
                            >
                                Get Started
                            </Link>
                            <UserButton />
                        </>
                    ) : (
                        <>
                            <SignInButton>
                                <Button
                                    variant="outline"
                                    className="w-full border-primary/50 text-primary hover:text-white hover:bg-primary/10"
                                >
                                    Sign In
                                </Button>
                            </SignInButton>
                            <SignUpButton>
                                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                                    Sign Up
                                </Button>
                            </SignUpButton>
                        </>
                    )}
                </div>
            )}
        </header>
    );
};

export default Navbar;
