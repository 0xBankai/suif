import React from "react";
import { Twitter, MessageCircle, BarChart3 } from "lucide-react";

const Header = () => {
	return (
		<header className="fixed top-0 left-0 right-0 bg-blue-900/80 backdrop-blur-md z-50">
			<div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
				<div className="text-2xl font-bold">$SUIF</div>
				<nav className="flex gap-6">
					<a
						href="https://t.me/SUIF_SUI"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 hover:text-blue-300 transition-colors"
					>
						<Twitter className="w-5 h-5" />
						<span className="hidden sm:inline">Twitter</span>
					</a>
					<a
						href="https://t.me/SUIF_SUI"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 hover:text-blue-300 transition-colors"
					>
						<MessageCircle className="w-5 h-5" />
						<span className="hidden sm:inline">Telegram</span>
					</a>
					<a
						href="https://movepump.com/token/0x74a12ac3f60c7151061bb094e8343ae5e73276b0cbf874fc59d83b193d476df9::suif::SUIF"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 hover:text-blue-300 transition-colors"
					>
						<BarChart3 className="w-5 h-5" />
						<span className="hidden sm:inline">Chart</span>
					</a>
				</nav>
			</div>
		</header>
	);
};

export default Header;
