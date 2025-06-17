import Benefits from "@/components/home/Benefits";
import CallToAction from "@/components/home/CallToAction";
import FAQ from "@/components/home/FAQ";
import Featured from "@/components/home/Featured";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import Pricing from "@/components/home/Pricing";
import StatsComponents from "@/components/home/StatsComponents";
import ValuePropositions from "@/components/home/ValuePropositions";

export default function Home() {
	return (
		<div className="  bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
			<Hero />
			<StatsComponents />
			<ValuePropositions />
			<Featured />
			<HowItWorks />
			<Benefits />
			<Pricing />
			<FAQ />
			<CallToAction />
		</div>
	);
}
