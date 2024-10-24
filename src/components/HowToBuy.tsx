import React from "react";
import { Wallet, ExternalLink, MessageCircle } from "lucide-react";

const steps = [
	{
		title: "Get Sui Wallet",
		description:
			"Download Sui Wallet app on your mobile phone or Chrome extension",
		icon: Wallet,
		link: "https://suiwallet.com",
	},
	{
		title: "Create a wallet",
		description: "Create a wallet (and remember to back up seed phrase)",
		icon: ExternalLink,
	},
	{
		title: "Fund your wallet",
		description: "Send some Sui to your wallet",
		icon: ExternalLink,
	},
	{
		title: "Go to MovePump",
		description: "Visit movepump.com and search for SUIF",
		icon: ExternalLink,
		link: "https://movepump.com",
	},
	{
		title: "Connect wallet",
		description: "Connect your Sui Wallet (top right corner)",
		icon: Wallet,
	},
	{
		title: "Buy SUIF",
		description: "Choose the amount and click BUY",
		icon: ExternalLink,
	},
];

const HowToBuy = () => {
	return (
		<section className="py-20 px-4 bg-blue-800/30">
			<div className="max-w-7xl mx-auto">
				<h2 className="text-4xl font-bold text-center mb-12">
					How to buy $SUIF
				</h2>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{steps.map((step, index) => (
						<div
							key={index}
							className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300"
						>
							<div className="flex items-center gap-4 mb-4">
								<div className="bg-blue-500 p-3 rounded-lg">
									<step.icon className="w-6 h-6" />
								</div>
								<h3 className="text-xl font-semibold">Step {index + 1}</h3>
							</div>
							<p className="text-blue-100">
								{step.link ? (
									<a
										href={step.link}
										target="_blank"
										rel="noopener noreferrer"
										className="hover:text-white underline"
									>
										{step.description}
									</a>
								) : (
									step.description
								)}
							</p>
						</div>
					))}
				</div>
				<div className="text-center mt-12">
					<p className="text-blue-200 text-lg">
						Need help? Don't hesitate to ask in our{" "}
						<a
							href="https://telegram.org"
							target="_blank"
							rel="noopener noreferrer"
							className="text-white underline hover:text-blue-300"
						>
							Telegram group!
						</a>
					</p>
				</div>
			</div>
		</section>
	);
};

export default HowToBuy;
