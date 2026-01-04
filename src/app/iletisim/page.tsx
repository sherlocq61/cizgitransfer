import { Phone, MessageCircle, Mail, MapPin, Clock } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'İletişim | Çizgi Transfer - Bize Ulaşın',
    description: 'Çizgi Transfer ile iletişime geçin. Telefon, WhatsApp veya e-posta ile 7/24 ulaşabilirsiniz.',
};

export default function IletisimPage() {
    return (
        <>
            {/* Hero */}
            <section className="section-dark py-20">
                <div className="container">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">İletişim</h1>
                        <p className="text-xl text-gray-300">
                            Transfer ihtiyaçlarınız için bize 7/24 ulaşabilirsiniz.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section className="section bg-white">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div>
                            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-8">Bize Ulaşın</h2>

                            <div className="space-y-6">
                                <a href="tel:+905427403875" className="card flex items-center gap-4 hover:border-[#e94560] border-2 border-transparent">
                                    <div className="w-14 h-14 bg-gradient-to-br from-[#e94560] to-[#ff6b6b] rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Phone size={24} className="text-white" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-[#1a1a2e]">Telefon</div>
                                        <div className="text-gray-600">0 5XX XXX XX XX</div>
                                        <div className="text-sm text-[#e94560]">Hemen Arayın</div>
                                    </div>
                                </a>

                                <a href="https://wa.me/905427403875" target="_blank" rel="noopener noreferrer" className="card flex items-center gap-4 hover:border-[#25d366] border-2 border-transparent">
                                    <div className="w-14 h-14 bg-[#25d366] rounded-xl flex items-center justify-center flex-shrink-0">
                                        <MessageCircle size={24} className="text-white" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-[#1a1a2e]">WhatsApp</div>
                                        <div className="text-gray-600">0 5XX XXX XX XX</div>
                                        <div className="text-sm text-[#25d366]">Mesaj Gönderin</div>
                                    </div>
                                </a>

                                <a href="mailto:info@cizgitransfer.com" className="card flex items-center gap-4 hover:border-[#e94560] border-2 border-transparent">
                                    <div className="w-14 h-14 bg-[#1a1a2e] rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Mail size={24} className="text-[#e94560]" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-[#1a1a2e]">E-posta</div>
                                        <div className="text-gray-600">info@cizgitransfer.com</div>
                                        <div className="text-sm text-gray-400">Kurumsal talepler için</div>
                                    </div>
                                </a>

                                <div className="card flex items-center gap-4">
                                    <div className="w-14 h-14 bg-[#1a1a2e] rounded-xl flex items-center justify-center flex-shrink-0">
                                        <MapPin size={24} className="text-[#e94560]" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-[#1a1a2e]">Konum</div>
                                        <div className="text-gray-600">İstanbul, Türkiye</div>
                                        <div className="text-sm text-gray-400">39 ilçede hizmet</div>
                                    </div>
                                </div>

                                <div className="card flex items-center gap-4">
                                    <div className="w-14 h-14 bg-[#1a1a2e] rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Clock size={24} className="text-[#e94560]" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-[#1a1a2e]">Çalışma Saatleri</div>
                                        <div className="text-gray-600">7 Gün 24 Saat</div>
                                        <div className="text-sm text-gray-400">Her zaman açık</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Contact */}
                        <div>
                            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-8">Hızlı İletişim</h2>

                            <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl p-8 text-white">
                                <h3 className="text-xl font-semibold mb-4">Transfer Talebi</h3>
                                <p className="text-gray-300 mb-6">
                                    En hızlı şekilde size dönüş yapmamız için WhatsApp veya telefon ile bize ulaşın.
                                    Mesajınızda şu bilgileri paylaşırsanız daha hızlı yardımcı olabiliriz:
                                </p>
                                <ul className="space-y-2 text-gray-300 mb-8">
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-[#e94560] rounded-full"></div>
                                        Alınacak ve bırakılacak adres
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-[#e94560] rounded-full"></div>
                                        Tarih ve saat
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-[#e94560] rounded-full"></div>
                                        Yolcu sayısı
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-[#e94560] rounded-full"></div>
                                        Özel istekler (varsa)
                                    </li>
                                </ul>

                                <div className="space-y-4">
                                    <a href="tel:+905427403875" className="btn btn-primary w-full justify-center">
                                        <Phone size={20} />
                                        Hemen Ara
                                    </a>
                                    <a href="https://wa.me/905427403875" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp w-full justify-center">
                                        <MessageCircle size={20} />
                                        WhatsApp'tan Yaz
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
