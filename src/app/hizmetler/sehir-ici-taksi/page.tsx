import { Phone, MessageCircle, Shield, Clock, CreditCard, Car, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Şehir İçi Taksi Hizmeti | Çizgi Transfer - İstanbul',
    description: 'İstanbul şehir içi taksi ve transfer hizmeti. 39 ilçede 7/24 güvenli, konforlu ve zamanında ulaşım. Hemen arayın!',
};

export default function SehirIciTaksiPage() {
    return (
        <>
            {/* Hero */}
            <section className="section-dark py-20">
                <div className="container">
                    <nav className="text-sm text-gray-400 mb-6">
                        <Link href="/" className="hover:text-white">Ana Sayfa</Link>
                        <span className="mx-2">/</span>
                        <Link href="/hizmetler" className="hover:text-white">Hizmetler</Link>
                        <span className="mx-2">/</span>
                        <span className="text-white">Şehir İçi Taksi</span>
                    </nav>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                Şehir İçi <span className="text-[#e94560]">Taksi</span> Hizmeti
                            </h1>
                            <p className="text-xl text-gray-300 mb-8">
                                İstanbul'un her noktasına güvenli ve konforlu ulaşım.
                                Profesyonel sürücüler, temiz araçlar ve şeffaf fiyatlarla yanınızdayız.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a href="tel:+905427403875" className="btn btn-primary">
                                    <Phone size={20} />
                                    Hemen Ara
                                </a>
                                <a href="https://wa.me/905427403875" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                                    <MessageCircle size={20} />
                                    WhatsApp
                                </a>
                            </div>
                        </div>
                        <div className="hidden lg:flex justify-center">
                            <Car size={200} className="text-[#e94560] opacity-30" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="section bg-white">
                <div className="container">
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <div className="card text-center">
                            <Shield size={40} className="text-[#e94560] mx-auto mb-4" />
                            <h3 className="font-semibold text-[#1a1a2e] mb-2">Deneyimli Sürücüler</h3>
                            <p className="text-gray-600 text-sm">Tüm sürücülerimiz E sınıfı ehliyet sahibi ve deneyimlidir.</p>
                        </div>
                        <div className="card text-center">
                            <Clock size={40} className="text-[#e94560] mx-auto mb-4" />
                            <h3 className="font-semibold text-[#1a1a2e] mb-2">7/24 Hizmet</h3>
                            <p className="text-gray-600 text-sm">Gece gündüz, hafta sonu dahil her zaman yanınızdayız.</p>
                        </div>
                        <div className="card text-center">
                            <CreditCard size={40} className="text-[#e94560] mx-auto mb-4" />
                            <h3 className="font-semibold text-[#1a1a2e] mb-2">Şeffaf Fiyat</h3>
                            <p className="text-gray-600 text-sm">Yolculuk öncesi fiyat bilgisi, sonradan ek ücret yok.</p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-6">Şehir İçi Transfer Hizmetimiz</h2>
                            <div className="prose text-gray-600 space-y-4">
                                <p>
                                    İstanbul'un yoğun trafiğinde zamanınızı verimli kullanmanız için profesyonel
                                    şehir içi taksi hizmeti sunuyoruz. İster işe giderken, ister alışverişe çıkarken,
                                    ister özel bir etkinliğe katılırken, temiz ve bakımlı araçlarımızla konforlu
                                    bir yolculuk deneyimi yaşarsınız.
                                </p>
                                <p>
                                    39 ilçenin tamamında hizmet veriyoruz. Sadece arayın veya WhatsApp'tan yazın,
                                    en kısa sürede kapınızda olalım.
                                </p>
                            </div>

                            <h3 className="text-xl font-semibold text-[#1a1a2e] mt-8 mb-4">Hizmet Özellikleri</h3>
                            <ul className="space-y-3">
                                {[
                                    'İstanbul\'un 39 ilçesine hizmet',
                                    'Profesyonel ve deneyimli sürücüler',
                                    'Klimalı ve temiz araçlar',
                                    'Nakit ve kredi kartı ödeme',
                                    'Gizli maliyet yok, şeffaf fiyat',
                                    '7/24 kesintisiz hizmet',
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-gray-700">
                                        <CheckCircle size={20} className="text-[#e94560] flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl p-8 text-white">
                            <h3 className="text-xl font-semibold mb-6">Hemen Rezervasyon Yapın</h3>
                            <p className="text-gray-300 mb-6">
                                Şehir içi transfer için bizi arayın veya WhatsApp'tan mesaj gönderin.
                                Size özel fiyat teklifi sunalım.
                            </p>
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
            </section>
        </>
    );
}
