
function Footer() {
    // Components are regular JavaScript functions that return JSX markup.
    return (
        <section className="section-spacing bg-gradient-to-b from-background to-charcoal relative overflow-hidden">
            <div className="container-custom relative z-10 mt-20 pt-12 border-t border-asphalt">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h4 className="text-xl font-bold mb-4 bg-gradient-to-r from-[#4065a9] to-[#d4af37] bg-clip-text text-transparent">
                            DAN GTS Import & Export
                        </h4>
                        <p className="text-steel-light text-sm leading-relaxed">
                            Powering Trade. Building Ethiopia&apos;s Future since 2015.
                        </p>
                    </div>

                    <div>
                        <h5 className="font-medium mb-4">Services</h5>
                        <ul className="space-y-2 text-sm text-steel-light">
                            <li className="hover:text-[#4065a9] transition-colors cursor-pointer">Infrastructure Development</li>
                            <li className="hover:text-[#4065a9] transition-colors cursor-pointer">Industrial Steel Supply</li>
                            <li className="hover:text-[#4065a9] transition-colors cursor-pointer">Nationwide Logistics</li>
                            <li className="hover:text-[#4065a9] transition-colors cursor-pointer">Sustainable Mobility</li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="font-medium mb-4">Company</h5>
                        <ul className="space-y-2 text-sm text-steel-light">
                            <li className="hover:text-[#4065a9] transition-colors cursor-pointer">About Us</li>
                            <li className="hover:text-[#4065a9] transition-colors cursor-pointer">Leadership</li>
                            <li className="hover:text-[#4065a9] transition-colors cursor-pointer">Partners</li>
                            <li className="hover:text-[#4065a9] transition-colors cursor-pointer">Contact</li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-asphalt flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-steel">
                    <p>&copy; {new Date().getFullYear()} DAN GTS Import & Export. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-[#4065a9] transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-[#4065a9] transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer; // Exports the function as the default export

