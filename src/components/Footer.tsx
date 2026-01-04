import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

const footerLinks = {
    hizmetler: [
        { name: 'Şehir İçi Taksi', href: '/hizmetler/sehir-ici-taksi' },
        { name: 'Havaalanı Transferi', href: '/hizmetler/havaalani-transferi' },
        { name: 'VIP Transfer', href: '/hizmetler/vip-transfer' },
        { name: 'Kurumsal Anlaşma', href: '/hizmetler/kurumsal-anlasma' },
        { name: 'Şehirlerarası Transfer', href: '/hizmetler/sehirlerarasi-transfer' },
    ],
    kurumsal: [
        { name: 'Hakkımızda', href: '/hakkimizda' },
        { name: 'SSS', href: '/sss' },
        { name: 'Blog', href: '/blog' },
        { name: 'İletişim', href: '/iletisim' },
    ],
    yasal: [
        { name: 'KVKK', href: '/kvkk' },
        { name: 'Gizlilik Politikası', href: '/gizlilik-politikasi' },
        { name: 'Çerez Politikası', href: '/cerez-politikasi' },
    ],
};

export default function Footer() {
    return (
        <footer className="bg-[#1a1a2e] text-white">
            <div className="container py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Logo & Contact */}
                    <div>
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className="w-10 h-10 bg-gradient-to-br from-[#e94560] to-[#ff6b6b] rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-xl">Ç</span>
                            </div>
                            <div>
                                <span className="text-xl font-bold text-white">Çizgi</span>
                                <span className="text-xl font-bold text-[#e94560]"> Transfer</span>
                            </div>
                        </Link>
                        <p className="text-gray-400 mb-6">
                            İstanbul genelinde 7/24 güvenli ve konforlu transfer hizmeti.
                        </p>
                        <div className="space-y-3">
                            <a href="tel:+905427403875" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                                <Phone size={18} />
                                <span>0 5XX XXX XX XX</span>
                            </a>
                            <a href="mailto:info@cizgitransfer.com" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                                <Mail size={18} />
                                <span>info@cizgitransfer.com</span>
                            </a>
                            <div className="flex items-center gap-3 text-gray-300">
                                <MapPin size={18} />
                                <span>İstanbul, Türkiye</span>
                            </div>
                        </div>
                    </div>

                    {/* Hizmetler */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Hizmetlerimiz</h3>
                        <ul className="space-y-3">
                            {footerLinks.hizmetler.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Kurumsal */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Kurumsal</h3>
                        <ul className="space-y-3">
                            {footerLinks.kurumsal.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Yasal */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Yasal</h3>
                        <ul className="space-y-3">
                            {footerLinks.yasal.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Çizgi Transfer. Tüm hakları saklıdır.</p>
                </div>
            </div>
        </footer>
    );
}
