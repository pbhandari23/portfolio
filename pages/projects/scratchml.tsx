"use client";

import { motion } from "framer-motion";
import Background from "@/components/Background";
import Link from "next/link";

const techTags = [
    "Python",
    "NumPy",
    "API Design",
    "Unit Testing",
    "Package Structure",
    "Optimization",
    "scikit-learn-style",
    "Technical Documentation",
];

const libraryModules = [
    {
        title: "Linear + Classification Models",
        desc: "LinearRegression, Ridge, Lasso, ElasticNetRegression, LogisticRegression, and SoftmaxRegression.",
    },
    {
        title: "Trees + Ensembles",
        desc: "DecisionTreeClassifier, DecisionTreeRegressor, RandomForestClassifier, and RandomForestRegressor.",
    },
    {
        title: "Neighbors + Clustering",
        desc: "KNeighborsClassifier, KNeighborsRegressor, KMeans, plus preprocessing and utility helpers.",
    },
];

export default function ScratchMLPage() {
    return (
        <Background>
            <div className="relative min-h-screen">
                <div className="relative z-10 mx-auto max-w-5xl p-6 text-zinc-200">
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl font-bold text-zinc-100"
                    >
                        ScratchML
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mt-4 text-lg text-zinc-400"
                    >
                        Machine learning library built from scratch in Python with NumPy to better understand how
                        core algorithms work under the hood, while exposing them through a lightweight,
                        scikit-learn-style interface.
                    </motion.p>

                    <motion.section
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mt-8 space-y-6"
                    >
                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                                <h2 className="text-lg font-semibold text-zinc-100">Goal</h2>
                                <p className="mt-2 text-zinc-400">
                                    Turn machine learning theory into working software by implementing core algorithms,
                                    testing them, and packaging them behind a clean, consistent developer-friendly API.
                                </p>
                            </div>

                            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                                <h2 className="text-lg font-semibold text-zinc-100">Scope</h2>
                                <p className="mt-2 text-zinc-400">
                                    End-to-end educational ML library covering regression, classification, clustering,
                                    tree-based models, ensembles, preprocessing, utilities, testing, and example usage.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {techTags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-zinc-300"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                            <h2 className="mb-3 text-lg font-semibold text-zinc-100">Library Summary</h2>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-sm text-zinc-300">
                                    <tbody className="[&>tr+tr]:border-t [&>tr+tr]:border-white/10">
                                        <tr>
                                            <th className="w-48 py-2 pr-4 font-medium text-zinc-400">Core Stack</th>
                                            <td className="py-2">Python + NumPy</td>
                                        </tr>
                                        <tr>
                                            <th className="py-2 pr-4 font-medium text-zinc-400">Design Style</th>
                                            <td className="py-2">Lightweight scikit-learn-style package with standardized fit/predict APIs</td>
                                        </tr>
                                        <tr>
                                            <th className="py-2 pr-4 font-medium text-zinc-400">Algorithms</th>
                                            <td className="py-2">Linear models, classifiers, clustering, trees, forests, preprocessing, and utilities</td>
                                        </tr>
                                        <tr>
                                            <th className="py-2 pr-4 font-medium text-zinc-400">Engineering Focus</th>
                                            <td className="py-2">Refactoring, testing, package structure, bug fixes, and reproducible examples</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </motion.section>

                    <motion.section
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="mt-12"
                    >
                        <h2 className="text-2xl font-semibold text-zinc-100">Implemented Components</h2>
                        <div className="mt-4 grid gap-4 md:grid-cols-3">
                            {libraryModules.map((module) => (
                                <div
                                    key={module.title}
                                    className="rounded-xl border border-white/10 bg-white/[0.02] p-5"
                                >
                                    <h3 className="text-lg font-semibold text-zinc-100">{module.title}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">{module.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.section>

                    <motion.section
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-12"
                    >
                        <h2 className="text-2xl font-semibold text-zinc-100">Software Design</h2>
                        <div className="mt-4 grid gap-6 md:grid-cols-2">
                            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                                <h3 className="text-lg font-semibold text-zinc-100">Library Structure</h3>
                                <p className="mt-2 text-zinc-400">
                                    The project was refactored from a set of experiments into a proper Python package
                                    with separated modules for linear models, trees, ensembles, neighbors, clustering,
                                    and preprocessing.
                                </p>
                            </div>

                            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                                <h3 className="text-lg font-semibold text-zinc-100">Consistent APIs</h3>
                                <p className="mt-2 text-zinc-400">
                                    Models and transformers expose a standardized interface built around methods like
                                    <code> fit</code>, <code>predict</code>, <code>predict_proba</code>,
                                    <code> transform</code>, <code>fit_transform</code>, and <code>inverse_transform</code>
                                    where appropriate.
                                </p>
                            </div>
                        </div>
                    </motion.section>

                    <motion.section
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.25 }}
                        className="mt-12"
                    >
                        <h2 className="text-2xl font-semibold text-zinc-100">Testing and Validation</h2>
                        <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.02] p-6">
                            <ul className="list-disc list-inside space-y-2 text-zinc-400">
                                <li>Automated unit tests for model correctness, preprocessing behavior, and ensemble performance</li>
                                <li>Bug fixes for classifier tree/forest behavior, prediction shape handling, and import-time side effects</li>
                                <li>Demo script and example notebook with side-by-side comparisons against scikit-learn when available</li>
                            </ul>
                        </div>
                    </motion.section>

                    <motion.section
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-12"
                    >
                        <h2 className="text-2xl font-semibold text-zinc-100">Example Notebook</h2>
                        <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.02] p-5">
                            <p className="text-zinc-400">
                                This notebook walks through practical uses of the library and compares behavior against
                                standard tools where appropriate.
                            </p>
                            <div className="mt-6 overflow-hidden rounded-xl border border-white/10 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.25)]">
                                <iframe
                                    src="/screenshots/scratchML_notebook.html"
                                    title="ScratchML Example Notebook"
                                    className="block h-[900px] w-full"
                                />
                            </div>
                        </div>
                    </motion.section>

                    <div className="mt-12 flex flex-wrap justify-center gap-4 text-center">
                        <Link
                            href="https://github.com/pbhandari23/ScratchML"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-4 py-2 bg-zinc-800 rounded hover:bg-zinc-700 transition text-zinc-200"
                        >
                            GitHub
                        </Link>
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
