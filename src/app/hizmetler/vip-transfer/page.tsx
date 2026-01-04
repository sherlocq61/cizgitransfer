import { Phone, MessageCircle, Crown, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'VIP Transfer Hizmeti | Çizgi Transfer - Lüks Araç Kiralama',
    description: 'VIP transfer ve lüks araç kiralama hizmeti. Özel şoför, premium araçlar, maksimum konfor. İş toplantıları ve özel günler için.',
};

export default function VIPTransferPage() {
    return (
        <>
            <section className="section-dark py-20">
                <div className="container">
                    <nav className="text-sm text-gray-400 mb-6">
                        <Link href="/" className="hover:text-white">Ana Sayfa</Link>
                        <span className="mx-2">/</span>
                        <Link href="/hizmetler" className="hover:text-white">Hizmetler</Link>
                        <span className="mx-2">/</span>
                        <span className="text-white">VIP Transfer</span>
                    </nav>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                VIP <span className="text-[#e94560]">Transfer</span>
                            </h1>
                            <p className="text-xl text-gray-300 mb-8">
                                Lüks araçlar ve özel şoför hizmeti ile premium yolculuk deneyimi.
                                İş toplantıları, özel günler ve kendinizi şımartmak istediğiniz her an.
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
                            <Crown size={200} className="text-[#e94560] opacity-30" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-white">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-6">VIP Transfer Hizmetimiz</h2>
                            <div className="prose text-gray-600 space-y-4">
                                <p>
                                    Özel günlerinizde, iş toplantılarında veya kendinizi şımartmak istediğinizde
                                    VIP transfer hizmetimiz tam size göre. Lüks araç seçeneklerimiz ve profesyonel
                                    şoförlerimizle sizi ayrıcalıklı hissettiriyoruz.
                                </p>
                                <p>
                                    Mercedes, BMW, Audi gibi premium markaların son model araçlarıyla
                                    konforlu ve prestijli yolculuklar.
                                </p>
                            </div>

                            <h3 className="text-xl font-semibold text-[#1a1a2e] mt-8 mb-4">VIP Hizmet Özellikleri</h3>
                            <ul className="space-y-3">
                                {[
                                    'Lüks araç filosu (Mercedes, BMW, Audi)',
                                    'Özel şoför hizmeti',
                                    'İkram servisi (su, şarj kablosu)',
                                    'Gizlilik ve profesyonellik',
                                    'Esnek saatler',
                                    'Kurumsal faturalama imkanı',
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-gray-700">
                                        <CheckCircle size={20} className="text-[#e94560] flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl p-8 text-white">
                            <h3 className="text-xl font-semibold mb-6">VIP Rezervasyon</h3>
                            <p className="text-gray-300 mb-6">
                                Özel talebiniz için bizi arayın. İhtiyacınıza uygun araç ve fiyat teklifi sunalım.
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
