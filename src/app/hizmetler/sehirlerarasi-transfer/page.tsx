import { Phone, MessageCircle, MapPin, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Şehirlerarası Transfer | Çizgi Transfer - Türkiye Geneli',
    description: 'İstanbul ve tüm Türkiye genelinde şehirlerarası transfer hizmeti. Konforlu araçlar, deneyimli sürücüler, güvenli yolculuk.',
};

export default function SehirlerarasiTransferPage() {
    return (
        <>
            <section className="section-dark py-20">
                <div className="container">
                    <nav className="text-sm text-gray-400 mb-6">
                        <Link href="/" className="hover:text-white">Ana Sayfa</Link>
                        <span className="mx-2">/</span>
                        <Link href="/hizmetler" className="hover:text-white">Hizmetler</Link>
                        <span className="mx-2">/</span>
                        <span className="text-white">Şehirlerarası Transfer</span>
                    </nav>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                Şehirlerarası <span className="text-[#e94560]">Transfer</span>
                            </h1>
                            <p className="text-xl text-gray-300 mb-8">
                                İstanbul'dan Türkiye'nin dört bir yanına güvenli ve konforlu
                                uzun mesafe transfer hizmeti.
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
                            <MapPin size={200} className="text-[#e94560] opacity-30" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-white">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-6">Şehirlerarası Transfer Hizmeti</h2>
                            <div className="prose text-gray-600 space-y-4">
                                <p>
                                    Uzun mesafe yolculuklarınızda konfor ve güvenliği bir arada sunuyoruz.
                                    Deneyimli sürücülerimiz ve bakımlı araçlarımızla istediğiniz şehre
                                    güvenle ulaştırıyoruz.
                                </p>
                            </div>

                            <h3 className="text-xl font-semibold text-[#1a1a2e] mt-8 mb-4">Popüler Rotalar</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li>• İstanbul - Ankara</li>
                                <li>• İstanbul - Bursa</li>
                                <li>• İstanbul - İzmir</li>
                                <li>• İstanbul - Antalya</li>
                                <li>• İstanbul - Edirne</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-[#1a1a2e] mt-8 mb-4">Hizmet Özellikleri</h3>
                            <ul className="space-y-3">
                                {[
                                    'Türkiye geneline hizmet',
                                    'Konforlu araç seçenekleri',
                                    'Mola planlaması',
                                    'Gece yolculuğu imkanı',
                                    'Bagaj kapasitesi',
                                    'Uzman sürücüler',
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-gray-700">
                                        <CheckCircle size={20} className="text-[#e94560] flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl p-8 text-white">
                            <h3 className="text-xl font-semibold mb-6">Fiyat Teklifi Alın</h3>
                            <p className="text-gray-300 mb-6">
                                Gideceğiniz şehri ve tarihi bildirin, size özel fiyat teklifi sunalım.
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
