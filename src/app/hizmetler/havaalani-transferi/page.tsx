import { Phone, MessageCircle, Plane, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Havaalanı Transferi | Çizgi Transfer - İstanbul Havalimanı & SAW',
    description: 'İstanbul Havalimanı ve Sabiha Gökçen transfer hizmeti. Uçuş takibi, karşılama, 7/24 hizmet. Güvenli havaalanı transferi.',
};

export default function HavaalaniTransferiPage() {
    return (
        <>
            <section className="section-dark py-20">
                <div className="container">
                    <nav className="text-sm text-gray-400 mb-6">
                        <Link href="/" className="hover:text-white">Ana Sayfa</Link>
                        <span className="mx-2">/</span>
                        <Link href="/hizmetler" className="hover:text-white">Hizmetler</Link>
                        <span className="mx-2">/</span>
                        <span className="text-white">Havaalanı Transferi</span>
                    </nav>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                Havaalanı <span className="text-[#e94560]">Transferi</span>
                            </h1>
                            <p className="text-xl text-gray-300 mb-8">
                                İstanbul Havalimanı ve Sabiha Gökçen'e güvenli, zamanında transfer.
                                Uçuşunuzu takip ediyor, sizi karşılıyoruz.
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
                            <Plane size={200} className="text-[#e94560] opacity-30" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-white">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-6">Havaalanı Transfer Hizmetimiz</h2>
                            <div className="prose text-gray-600 space-y-4">
                                <p>
                                    Uçuş saatinize göre sizi evden, otelden veya ofisten alıyor, havalimanına
                                    zamanında ulaştırıyoruz. Dönüş uçuşunuzda ise havalimanında sizi karşılıyor,
                                    istediğiniz adrese güvenle bırakıyoruz.
                                </p>
                                <p>
                                    Uçuş takip sistemimiz sayesinde gecikmelerden haberdar oluyor,
                                    bekleme sürenizi minimuma indiriyoruz.
                                </p>
                            </div>

                            <h3 className="text-xl font-semibold text-[#1a1a2e] mt-8 mb-4">Hizmet Kapsamı</h3>
                            <ul className="space-y-3">
                                {[
                                    'İstanbul Havalimanı (IST) transfer',
                                    'Sabiha Gökçen Havalimanı (SAW) transfer',
                                    'Uçuş takip ve gecikme yönetimi',
                                    'Karşılama (Tabela ile)',
                                    'Bagaj yardımı',
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
                            <h3 className="text-xl font-semibold mb-6">Transfer Rezervasyonu</h3>
                            <p className="text-gray-300 mb-6">
                                En az 2-3 saat önceden aramanızı öneririz. Acil durumlarda da
                                müsaitlik durumuna göre hizmet verebiliyoruz.
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
