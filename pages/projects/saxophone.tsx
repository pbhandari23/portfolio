"use client";

import { motion } from "framer-motion";
import Background from "@/components/Background";
import AudioCard from "@/components/AudioCard";
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
                        <h2 className="mb-4 text-lg font-semibold text-zinc-100">Photos</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <figure className="relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-black/30">
                                <Image
                                    src="/screenshots/sax1.jpg"
                                    alt="Saxophone performance photo 1"
                                    fill
                                    className="object-contain"
                                    sizes="(min-width: 768px) 45vw, 100vw"
                                    priority
                                />
                                <figcaption className="absolute bottom-0 left-0 w-full bg-black/60 text-zinc-200 text-sm text-center py-1 backdrop-blur-sm">
                                    Masterclass with Zach Shemon, 2025
                                </figcaption>
                            </figure>

                            <figure className="relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-black/30">
                                <Image
                                    src="/screenshots/sax2.png"
                                    alt="Saxophone performance photo 2"
                                    fill
                                    className="object-contain"
                                    sizes="(min-width: 768px) 45vw, 100vw"
                                    priority
                                />
                                <figcaption className="absolute bottom-0 left-0 w-full bg-black/60 text-zinc-200 text-sm text-center py-1 backdrop-blur-sm">
                                    OSU Saxophone Quartet Performance, 2025
                                </figcaption>
                            </figure>
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


                        <div className="grid gap-6 sm:grid-cols-2">
                            <AudioCard title="Caprice from Improvisation et Caprice by Eugeune Bozza" src="/audio/bozza.m4a" />
                            <AudioCard title="Ferling 17" src="/audio/ferling17.m4a" />

                        </div>


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
