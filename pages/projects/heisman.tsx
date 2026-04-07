"use client";

import { motion } from "framer-motion";
import Background from "@/components/Background";
import Link from "next/link";

const techTags = [
    "R",
    "Python",
    "cfbfastR",
    "pandas",
    "NumPy",
    "scikit-learn",
    "SciPy",
    "Random Forest",
    "Walk-Forward Validation",
    "Interactive Dashboard",
];

const dashboardPanels = [
    {
        title: "Projected Leaderboard",
        desc: "Displays the 2025-2026 Heisman standings by predicted vote total, turning regression output into a readable race projection.",
    },
    {
        title: "Validation Trends",
        desc: "Summarizes year-by-year model quality and shows how consistently the historical winner appears near the top of the predicted leaderboard.",
    },
    {
        title: "Player Deep Dive",
        desc: "Lets viewers compare candidates and inspect the most similar historical quarterback season based on player production only.",
    },
];

export default function HeismanProjectPage() {
    return (
        <Background>
            <div className="relative min-h-screen">
                <div className="relative z-10 mx-auto max-w-7xl p-6 text-zinc-200">
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl font-bold text-zinc-100"
                    >
                        Heisman Vote Predictor
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mt-4 text-lg text-zinc-400"
                    >
                        College-football analytics and machine learning project that predicts Heisman Trophy vote totals
                        for quarterbacks, then converts those predictions into a projected leaderboard and winner for
                        the current season.
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
                                    Estimate how current-season quarterback performance translates into Heisman voting by
                                    learning from historical quarterback seasons and forecasting vote totals directly.
                                </p>
                            </div>

                            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                                <h2 className="text-lg font-semibold text-zinc-100">Dataset</h2>
                                <p className="mt-2 text-zinc-400">
                                    Historical quarterback seasons built from <span className="text-zinc-300">cfbfastR</span>,
                                    team context, Heisman vote data, and winner labels, with training records from 2014-2023
                                    and current candidates for 2025.
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
                            <h2 className="mb-3 text-lg font-semibold text-zinc-100">Model Summary</h2>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-sm text-zinc-300">
                                    <tbody className="[&>tr+tr]:border-t [&>tr+tr]:border-white/10">
                                        <tr>
                                            <th className="w-48 py-2 pr-4 font-medium text-zinc-400">Model Type</th>
                                            <td className="py-2">RandomForestRegressor</td>
                                        </tr>
                                        <tr>
                                            <th className="py-2 pr-4 font-medium text-zinc-400">Training Window</th>
                                            <td className="py-2">Quarterback seasons from 2014 through 2023</td>
                                        </tr>
                                        <tr>
                                            <th className="py-2 pr-4 font-medium text-zinc-400">Validation</th>
                                            <td className="py-2">Leave-one-season-out cross-validation by year for out-of-sample vote prediction</td>
                                        </tr>
                                        <tr>
                                            <th className="py-2 pr-4 font-medium text-zinc-400">Average Metrics</th>
                                            <td className="py-2">RMSE 174.98 · MAE 43.60 · R² 0.624</td>
                                        </tr>
                                        <tr>
                                            <th className="py-2 pr-4 font-medium text-zinc-400">Ranking Outcome</th>
                                            <td className="py-2">Actual winner ranked 1.43 on average and finished top five in every validation season</td>
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
                        <h2 className="text-2xl font-semibold text-zinc-100">Pipeline</h2>
                        <div className="mt-4 grid gap-4 md:grid-cols-2">
                            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                                <h3 className="text-lg font-semibold text-zinc-100">Data Collection in R</h3>
                                <p className="mt-2 text-zinc-400">
                                    The R pipeline collects player and team context through
                                    <span className="text-zinc-300"> cfbfastR</span>, joins historical vote data,
                                    and exports both the historical training set and the current-season candidate pool.
                                </p>
                            </div>

                            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                                <h3 className="text-lg font-semibold text-zinc-100">Modeling in Python</h3>
                                <p className="mt-2 text-zinc-400">
                                    The Python workflow handles feature engineering, model training,
                                    leave-one-season-out cross-validation, artifact export, and dashboard payload generation using
                                    pandas, NumPy, scikit-learn, and SciPy.
                                </p>
                            </div>
                        </div>
                    </motion.section>

                    <motion.section
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-12"
                    >
                        <h2 className="text-2xl font-semibold text-zinc-100">Key Features</h2>
                        <div className="mt-4 grid gap-6 md:grid-cols-2">
                            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                                <h3 className="text-lg font-semibold text-zinc-100">Player + Team Signals</h3>
                                <ul className="mt-3 list-disc list-inside space-y-2 text-zinc-400">
                                    <li>Passing and rushing production, total yards, and total touchdowns</li>
                                    <li>Efficiency features such as yards per attempt, TD/INT ratio, and yards per play</li>
                                    <li>Team context including win percentage, AP rank, SRS, and ranked wins</li>
                                </ul>
                            </div>

                            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                                <h3 className="text-lg font-semibold text-zinc-100">Prediction Outputs</h3>
                                <ul className="mt-3 list-disc list-inside space-y-2 text-zinc-400">
                                    <li>Out-of-sample validation metrics by season</li>
                                    <li>Current leaderboard projections for the active season</li>
                                    <li>Feature importance outputs and dashboard-ready payload data</li>
                                </ul>
                            </div>
                        </div>
                    </motion.section>

                    <motion.section
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.25 }}
                        className="mt-12"
                    >
                        <h2 className="text-2xl font-semibold text-zinc-100">Interactive Dashboard</h2>
                        <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.02] p-5">
                            <p className="text-zinc-400">
                                The final presentation layer is a lightweight dashboard for the 2025-2026 season,
                                backed by exported model outputs and a generated dashboard payload so the visual layer stays tied to the
                                modeling workflow.
                            </p>
                            <div className="mt-6 overflow-hidden rounded-xl border border-white/10 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.25)]">
                                <iframe
                                    src="/screenshots/heisman_dashboard.html"
                                    title="Heisman Dashboard Preview"
                                    className="block h-[1100px] w-full"
                                />
                            </div>
                            <div className="mt-6 grid gap-4 md:grid-cols-3">
                                {dashboardPanels.map((panel) => (
                                    <div
                                        key={panel.title}
                                        className="rounded-xl border border-white/10 bg-white/[0.02] p-4"
                                    >
                                        <h3 className="text-base font-semibold text-zinc-100">{panel.title}</h3>
                                        <p className="mt-2 text-sm leading-relaxed text-zinc-400">{panel.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.section>

                    <motion.section
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-12"
                    >
                        <h2 className="text-2xl font-semibold text-zinc-100">Insights</h2>
                        <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.02] p-6">
                            <ul className="list-disc list-inside space-y-2 text-zinc-400">
                                <li>
                                    Predicting vote totals directly creates a more realistic Heisman leaderboard than a
                                    simple ranking model because the output can be sorted into an interpretable race.
                                </li>
                                <li>
                                    Leave-one-season-out validation matters in this setting because voter behavior and
                                    season context change over time, and random splits would overstate real-world performance.
                                </li>
                                <li>
                                    The winner ranking results are especially strong for the use case: the actual winner
                                    averaged a predicted rank of 1.43 and never fell outside the top five in validation.
                                </li>
                            </ul>
                        </div>
                    </motion.section>

                    <div className="mt-12 flex flex-wrap justify-center gap-4 text-center">
                        <Link
                            href="https://github.com/pbhandari23/heisman_predictor"
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
