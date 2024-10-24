import React from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
	return (
		<div className="pt-32 pb-20 px-4">
			<div className="max-w-7xl mx-auto text-center">
				<div className="animate-fade-in-up">
					<h1 className="text-5xl md:text-7xl font-bold mb-6">
						Welcome to $SUIF
					</h1>
					<p className="text-xl md:text-2xl text-blue-200 mb-8">
						The most adorable meme coin on the Sui Network
					</p>
					<a
						href="https://movepump.com/token/0x74a12ac3f60c7151061bb094e8343ae5e73276b0cbf874fc59d83b193d476df9::suif::SUIF"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-blue-100 transition-colors"
					>
						Buy Now <ArrowRight className="w-5 h-5" />
					</a>
				</div>
				<div className="mt-16 animate-float">
					<img
						src="UGLY MFKR SHIBA.png"
						alt="SUIF"
						className="w-64 h-64 mx-auto rounded-full shadow-2xl"
					/>
				</div>
			</div>
		</div>
	);
};

export default Hero;
