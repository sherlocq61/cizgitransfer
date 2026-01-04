import Link from 'next/link';
import { MapPin, ArrowRight, Phone, MessageCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Hizmet Bölgelerimiz | Çizgi Transfer - İstanbul İlçeleri',
    description: 'İstanbul\'un 39 ilçesinde korsan taksi ve transfer hizmeti. Esenyurt, Bağcılar, Kadıköy, Pendik ve tüm ilçelerde 7/24 hizmet.',
};

const districts = {
    avrupa: [
        { name: 'Esenyurt', slug: 'esenyurt' },
        { name: 'Bağcılar', slug: 'bagcilar' },
        { name: 'Küçükçekmece', slug: 'kucukcekmece' },
        { name: 'Bahçelievler', slug: 'bahcelievler' },
        { name: 'Bakırköy', slug: 'bakirkoy' },
        { name: 'Avcılar', slug: 'avcilar' },
        { name: 'Sultangazi', slug: 'sultangazi' },
        { name: 'Esenler', slug: 'esenler' },
        { name: 'Beylikdüzü', slug: 'beylikduzu' },
        { name: 'Başakşehir', slug: 'basaksehir' },
        { name: 'Güngören', slug: 'gungoren' },
        { name: 'Fatih', slug: 'fatih' },
        { name: 'Bayrampaşa', slug: 'bayrampasa' },
        { name: 'Zeytinburnu', slug: 'zeytinburnu' },
        { name: 'Kağıthane', slug: 'kagithane' },
        { name: 'Eyüpsultan', slug: 'eyupsultan' },
        { name: 'Gaziosmanpaşa', slug: 'gaziosmanpasa' },
        { name: 'Arnavutköy', slug: 'arnavutkoy' },
        { name: 'Büyükçekmece', slug: 'buyukcekmece' },
        { name: 'Beşiktaş', slug: 'besiktas' },
        { name: 'Şişli', slug: 'sisli' },
        { name: 'Beyoğlu', slug: 'beyoglu' },
        { name: 'Sarıyer', slug: 'sariyer' },
        { name: 'Silivri', slug: 'silivri' },
        { name: 'Çatalca', slug: 'catalca' },
    ],
    anadolu: [
        { name: 'Pendik', slug: 'pendik' },
        { name: 'Ümraniye', slug: 'umraniye' },
        { name: 'Üsküdar', slug: 'uskudar' },
        { name: 'Kadıköy', slug: 'kadikoy' },
        { name: 'Maltepe', slug: 'maltepe' },
        { name: 'Ataşehir', slug: 'atasehir' },
        { name: 'Kartal', slug: 'kartal' },
        { name: 'Tuzla', slug: 'tuzla' },
        { name: 'Sancaktepe', slug: 'sancaktepe' },
        { name: 'Sultanbeyli', slug: 'sultanbeyli' },
        { name: 'Çekmeköy', slug: 'cekmekoy' },
        { name: 'Beykoz', slug: 'beykoz' },
        { name: 'Adalar', slug: 'adalar' },
        { name: 'Şile', slug: 'sile' },
    ],
};

export default function BolgelerPage() {
    return (
        <>
            {/* Hero */}
            <section className="section-dark py-20">
                <div className="container">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Hizmet Bölgelerimiz</h1>
                        <p className="text-xl text-gray-300">
                            İstanbul'un 39 ilçesinde güvenli ve konforlu transfer hizmeti sunuyoruz.
                        </p>
                    </div>
                </div>
            </section>

            {/* Avrupa Yakası */}
            <section className="section bg-white">
                <div className="container">
                    <div className="flex items-center gap-3 mb-8">
                        <MapPin size={28} className="text-[#e94560]" />
                        <h2 className="text-2xl font-bold text-[#1a1a2e]">Avrupa Yakası</h2>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {districts.avrupa.map((district) => (
                            <Link
                                key={district.slug}
                                href={`/bolgeler/${district.slug}-korsan-taksi`}
                                className="card p-4 text-center hover:border-[#e94560] border-2 border-transparent group"
                            >
                                <span className="font-medium text-[#1a1a2e] group-hover:text-[#e94560] transition-colors">
                                    {district.name}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Anadolu Yakası */}
            <section className="section bg-[#fafafa]">
                <div className="container">
                    <div className="flex items-center gap-3 mb-8">
                        <MapPin size={28} className="text-[#e94560]" />
                        <h2 className="text-2xl font-bold text-[#1a1a2e]">Anadolu Yakası</h2>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {districts.anadolu.map((district) => (
                            <Link
                                key={district.slug}
                                href={`/bolgeler/${district.slug}-korsan-taksi`}
                                className="card p-4 text-center hover:border-[#e94560] border-2 border-transparent group"
                            >
                                <span className="font-medium text-[#1a1a2e] group-hover:text-[#e94560] transition-colors">
                                    {district.name}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Popular Routes */}
            <section className="section bg-white">
                <div className="container">
                    <h2 className="text-2xl font-bold text-[#1a1a2e] mb-8 text-center">Popüler Rotalar</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            'Esenyurt - İstanbul Havalimanı',
                            'Kadıköy - Sabiha Gökçen',
                            'Beylikdüzü - Taksim',
                            'Pendik - Atatürk Havalimanı',
                            'Bağcılar - Beşiktaş',
                            'Ümraniye - İstanbul Havalimanı',
                        ].map((route) => (
                            <div key={route} className="card p-4 flex items-center justify-between">
                                <span className="text-[#1a1a2e]">{route}</span>
                                <ArrowRight size={18} className="text-[#e94560]" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-dark py-16">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold mb-4">Bölgenize Hizmet Götürelim</h2>
                    <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                        Nerede olursanız olun, size ulaşabiliriz. Hemen iletişime geçin.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
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
            </section>
        </>
    );
}
