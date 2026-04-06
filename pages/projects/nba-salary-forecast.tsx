"use client";

import { motion } from "framer-motion";
import Background from "@/components/Background";
import ScreenshotCarousel from "@/components/ScreenshotCarousel";
import Link from "next/link";

const techTags = [
    "Python",
    "Streamlit",
    "nba_api",
    "scikit-learn",
    "XGBoost",
    "Extra Trees",
    "Feature Engineering",
    "Time-Aware Validation",
];

const appTabs = [
    {
        title: "Forecast Lab",
        desc: "Salary simulator and instant next-season forecast generation.",
    },
    {
        title: "Model Pulse",
        desc: "Performance diagnostics, validation trends, and model error analysis.",
    },
    {
        title: "Player Explorer",
        desc: "Searchable holdout predictions and player-level result inspection.",
    },
];

const insightCharts = [
    {
        src: "/screenshots/nbasalaries_points_vs_salary.png",
        alt: "Points per game vs salary colored by season",
        title: "Points Per Game vs Salary",
        desc:
            "Higher scorers generally move into higher salary bands, but the wide vertical spread at similar PPG values shows that scoring alone does not determine compensation.",
    },
    {
        src: "/screenshots/nbasalaries_salary_quartiles_by_season.png",
        alt: "Salary quartiles over NBA seasons",
        title: "Salary Quartiles Over Seasons",
        desc:
            "The upper salary quartiles rise sharply in later seasons, especially after 2016, which suggests strong salary inflation at the top end and reinforces why season-aware validation matters.",
    },
    {
        src: "/screenshots/nbasalaries_correlation_matrix.png",
        alt: "Correlation matrix for points, assists, rebounds, minutes, and field goals made",
        title: "Feature Correlation Matrix",
        desc:
            "Points, field goals made, and minutes are tightly linked, while assists and rebounds capture different production dimensions. These relationships guided the use of lagged and rolling features to preserve signal without relying on a single stat.",
    },
];

const insightShots = insightCharts.map(({ src, alt }) => ({ src, alt }));

export default function NbaSalaryForecastPage() {
    return (
        <Background>
            <div className="relative min-h-screen">
                <div className="relative z-10 max-w-5xl mx-auto p-6 text-zinc-200">
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl font-bold text-zinc-100"
                    >
                        NBA Salary Forecasting
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mt-4 text-lg text-zinc-400"
                    >
                        Machine learning system that predicts a player&apos;s next-season NBA salary from historical
                        performance and contract data, paired with a Streamlit app for interactive simulation,
                        model diagnostics, and player-level forecast exploration.
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
                                    Forecast next-season player salary using past production, efficiency, workload,
                                    experience, and recent trend features while preserving a time-aware train/test split.
                                </p>
                            </div>

                            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                                <h2 className="text-lg font-semibold text-zinc-100">Dataset</h2>
                                <p className="mt-2 text-zinc-400">
                                    6,845 player-season forecasting rows from 2000-2025, built by merging{" "}
                                    <span className="text-zinc-300">nba_api</span> per-game stats with salary records
                                    and cleaning player name collision cases.
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
                                            <th className="w-48 py-2 pr-4 font-medium text-zinc-400">Best Model</th>
                                            <td className="py-2">Extra Trees Regressor</td>
                                        </tr>
                                        <tr>
                                            <th className="py-2 pr-4 font-medium text-zinc-400">Validation Avg.</th>
                                            <td className="py-2">MAE $1.94M · RMSE $3.25M · R² 0.763</td>
                                        </tr>
                                        <tr>
                                            <th className="py-2 pr-4 font-medium text-zinc-400">Latest Holdout</th>
                                            <td className="py-2">MAE $2.98M · RMSE $5.12M · R² 0.845 across 309 predictions</td>
                                        </tr>
                                        <tr>
                                            <th className="py-2 pr-4 font-medium text-zinc-400">Benchmarks</th>
                                            <td className="py-2">
                                                Linear/Ridge/Lasso/ElasticNet · SVR · Random Forest · HistGradientBoosting · XGBoost
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className="py-2 pr-4 font-medium text-zinc-400">Top Signals</th>
                                            <td className="py-2">
                                                Current salary, 3-year average minutes/points, prior-year minutes/points, years in league
                                            </td>
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
                        <h2 className="text-2xl font-semibold text-zinc-100">EDA Snapshots</h2>
                        <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.02] p-5">
                            <ScreenshotCarousel shots={insightShots} />
                        </div>
                        <div className="mt-6 grid gap-4 md:grid-cols-3">
                            {insightCharts.map((chart) => (
                                <div
                                    key={chart.title}
                                    className="rounded-xl border border-white/10 bg-white/[0.02] p-4"
                                >
                                    <h3 className="text-base font-semibold text-zinc-100">{chart.title}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">{chart.desc}</p>
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
                        <h2 className="text-2xl font-semibold text-zinc-100">Interactive Demo</h2>
                        <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.02] p-5">
                            <p className="text-zinc-400">
                                A live Streamlit demo is available for this project, so visitors can try the salary
                                simulator, inspect feature importance, and explore holdout predictions directly in the browser.
                            </p>
                            <div className="mt-4 flex flex-wrap items-center gap-4">
                                <Link
                                    href="https://pbhandari23-nbasalaries.streamlit.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 bg-zinc-800 rounded hover:bg-zinc-700 transition"
                                >
                                    Open Streamlit Demo
                                </Link>
                            </div>
                            <p className="mt-3 text-sm text-zinc-500">
                                The demo is interactive and may take a little while to load the first time if the app is waking up.
                            </p>
                            <div className="mt-6 grid gap-4 md:grid-cols-3">
                                {appTabs.map((tab) => (
                                    <div
                                        key={tab.title}
                                        className="rounded-xl border border-white/10 bg-white/[0.02] p-4"
                                    >
                                        <h3 className="text-base font-semibold text-zinc-100">{tab.title}</h3>
                                        <p className="mt-2 text-sm leading-relaxed text-zinc-400">{tab.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.section>

                    <motion.section
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.25 }}
                        className="mt-12"
                    >
                        <h2 className="text-2xl font-semibold text-zinc-100">Insights</h2>
                        <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.02] p-6">
                            <ul className="list-disc list-inside space-y-2 text-zinc-400">
                                <li>
                                    Scoring volume is positively associated with salary, but players with similar PPG can
                                    still earn very different contracts, which points to the importance of role, minutes,
                                    experience, and prior salary context.
                                </li>
                                <li>
                                    Salary distributions shift upward over time, with the strongest growth in the top
                                    quartile and max-contract range, so models need temporal splits and recent-season
                                    trend features to avoid learning outdated salary scales.
                                </li>
                                <li>
                                    Minutes, points, and field goals made are strongly correlated, while assists and
                                    rebounds contribute complementary signals, supporting a feature set that mixes
                                    production, efficiency, and workload rather than using box-score totals alone.
                                </li>
                            </ul>
                        </div>
                    </motion.section>

                    <div className="mt-12 flex flex-wrap justify-center gap-4 text-center">
                        <Link
                            href="https://github.com/pbhandari23/NBA_Salaries"
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
