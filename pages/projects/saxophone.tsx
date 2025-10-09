"use client";

import { motion } from "framer-motion";
import Background from "@/components/Background";
import Link from "next/link";
import Image from "next/image";

export default function FourierPage() {
    return (
        <Background>
            <div className="relative min-h-screen">
                <div className="relative z-10 max-w-5xl mx-auto p-6 text-zinc-200">
                    {/* Title & Intro */}
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl font-bold text-zinc-100"
                    >
                        Saxophone
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mt-4 text-lg text-zinc-400"
                    >
                        Classical saxophonist on the side.
                    </motion.p>


                    {/* Saxophone Images (side by side) */}
                    <div className="mt-12">
                        <h2 className="mb-4 text-lg font-semibold text-zinc-100">Saxophone</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-black/30">
                                <Image
                                    src="/screenshots/sax1.jpg"
                                    alt="Saxophone performance photo 1"
                                    fill
                                    className="object-contain"
                                    sizes="(min-width: 768px) 45vw, 100vw"
                                    priority
                                />
                            </div>

                            <div className="relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-black/30">
                                <Image
                                    src="/screenshots/sax2.png"
                                    alt="Saxophone performance photo 2"
                                    fill
                                    className="object-contain"
                                    sizes="(min-width: 768px) 45vw, 100vw"
                                    priority
                                />
                            </div>
                        </div>
                    </div>



                    {/* Overview */}
                    <motion.section
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mt-8 space-y-6"
                    >


                        {/* Features */}
                        <motion.section
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mt-10 grid gap-6 md:grid-cols-2"
                        >


                        </motion.section>

                        {/* Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="mt-10 flex flex-wrap items-center gap-4"
                        >
                            <Link
                                href="https://github.com/lilpb01/Fourier-Drawing-with-Epicycles"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-zinc-800 rounded hover:bg-zinc-700 transition"
                            >
                                GitHub
                            </Link>

                        </motion.div>
                    </motion.section>

                    {/* Back to Home Button */}
                    <div className="mt-12 text-center">
                        <Link
                            href="/"
                            className="inline-block px-4 py-2 bg-zinc-800 rounded hover:bg-zinc-700 transition text-zinc-200"
                        >
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </Background>
    );
}
