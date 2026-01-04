import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Phone, MessageCircle, Shield, Clock, CreditCard, MapPin, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

const allDistricts: Record<string, { name: string; side: string }> = {
    'esenyurt': { name: 'Esenyurt', side: 'Avrupa' },
    'bagcilar': { name: 'Bağcılar', side: 'Avrupa' },
    'kucukcekmece': { name: 'Küçükçekmece', side: 'Avrupa' },
    'bahcelievler': { name: 'Bahçelievler', side: 'Avrupa' },
    'bakirkoy': { name: 'Bakırköy', side: 'Avrupa' },
    'avcilar': { name: 'Avcılar', side: 'Avrupa' },
    'sultangazi': { name: 'Sultangazi', side: 'Avrupa' },
    'esenler': { name: 'Esenler', side: 'Avrupa' },
    'beylikduzu': { name: 'Beylikdüzü', side: 'Avrupa' },
    'basaksehir': { name: 'Başakşehir', side: 'Avrupa' },
    'gungoren': { name: 'Güngören', side: 'Avrupa' },
    'fatih': { name: 'Fatih', side: 'Avrupa' },
    'bayrampasa': { name: 'Bayrampaşa', side: 'Avrupa' },
    'zeytinburnu': { name: 'Zeytinburnu', side: 'Avrupa' },
    'kagithane': { name: 'Kağıthane', side: 'Avrupa' },
    'eyupsultan': { name: 'Eyüpsultan', side: 'Avrupa' },
    'gaziosmanpasa': { name: 'Gaziosmanpaşa', side: 'Avrupa' },
    'arnavutkoy': { name: 'Arnavutköy', side: 'Avrupa' },
    'buyukcekmece': { name: 'Büyükçekmece', side: 'Avrupa' },
    'besiktas': { name: 'Beşiktaş', side: 'Avrupa' },
    'sisli': { name: 'Şişli', side: 'Avrupa' },
    'beyoglu': { name: 'Beyoğlu', side: 'Avrupa' },
    'sariyer': { name: 'Sarıyer', side: 'Avrupa' },
    'silivri': { name: 'Silivri', side: 'Avrupa' },
    'catalca': { name: 'Çatalca', side: 'Avrupa' },
    'pendik': { name: 'Pendik', side: 'Anadolu' },
    'umraniye': { name: 'Ümraniye', side: 'Anadolu' },
    'uskudar': { name: 'Üsküdar', side: 'Anadolu' },
    'kadikoy': { name: 'Kadıköy', side: 'Anadolu' },
    'maltepe': { name: 'Maltepe', side: 'Anadolu' },
    'atasehir': { name: 'Ataşehir', side: 'Anadolu' },
    'kartal': { name: 'Kartal', side: 'Anadolu' },
    'tuzla': { name: 'Tuzla', side: 'Anadolu' },
    'sancaktepe': { name: 'Sancaktepe', side: 'Anadolu' },
    'sultanbeyli': { name: 'Sultanbeyli', side: 'Anadolu' },
    'cekmekoy': { name: 'Çekmeköy', side: 'Anadolu' },
    'beykoz': { name: 'Beykoz', side: 'Anadolu' },
    'adalar': { name: 'Adalar', side: 'Anadolu' },
    'sile': { name: 'Şile', side: 'Anadolu' },
};

type Props = {
    params: Promise<{ slug: string }>;
};

function getDistrictFromSlug(slug: string) {
    const districtSlug = slug.replace('-korsan-taksi', '');
    return allDistricts[districtSlug];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const district = getDistrictFromSlug(slug);

    if (!district) {
        return { title: 'Sayfa Bulunamadı' };
    }

    return {
        title: `${district.name} Korsan Taksi | Çizgi Transfer - 7/24 Hizmet`,
        description: `${district.name} bölgesinde korsan taksi ve transfer hizmeti. ${district.name} içi ve dışı tüm noktalara güvenli ulaşım. Hemen arayın!`,
    };
}

export async function generateStaticParams() {
    return Object.keys(allDistricts).map((slug) => ({
        slug: `${slug}-korsan-taksi`,
    }));
}

export default async function DistrictPage({ params }: Props) {
    const { slug } = await params;
    const district = getDistrictFromSlug(slug);

    if (!district) {
        notFound();
    }

    const nearbyDistricts = Object.entries(allDistricts)
        .filter(([, d]) => d.side === district.side && d.name !== district.name)
        .slice(0, 6)
        .map(([slug, d]) => ({ slug, ...d }));

    return (
        <>
            {/* Hero */}
            <section className="section-dark py-20">
                <div className="container">
                    <nav className="text-sm text-gray-400 mb-6">
                        <Link href="/" className="hover:text-white">Ana Sayfa</Link>
                        <span className="mx-2">/</span>
                        <Link href="/bolgeler" className="hover:text-white">Bölgeler</Link>
                        <span className="mx-2">/</span>
                        <span className="text-white">{district.name}</span>
                    </nav>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        {district.name} <span className="text-[#e94560]">Korsan Taksi</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl">
                        {district.name} bölgesinde güvenli ve konforlu korsan taksi hizmeti.
                        7/24 hizmet veren Çizgi Transfer ile istediğiniz yere zamanında ulaşın.
                    </p>

                    {/* Trust Badges */}
                    <div className="flex flex-wrap gap-4 mt-8">
                        <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                            <Shield size={18} className="text-[#e94560]" />
                            <span className="text-sm">Güvenli Hizmet</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                            <Clock size={18} className="text-[#e94560]" />
                            <span className="text-sm">7/24 Aktif</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                            <CreditCard size={18} className="text-[#e94560]" />
                            <span className="text-sm">Şeffaf Fiyat</span>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="flex flex-wrap gap-4 mt-8">
                        <a href="tel:+905427403875" className="btn btn-primary text-lg px-8 py-4">
                            <Phone size={20} />
                            Hemen Ara
                        </a>
                        <a href="https://wa.me/905427403875" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp text-lg px-8 py-4">
                            <MessageCircle size={20} />
                            WhatsApp
                        </a>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="section bg-white">
                <div className="container">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2">
                            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-6">
                                {district.name} Transfer Hizmeti
                            </h2>
                            <div className="prose prose-lg text-gray-600 space-y-4">
                                <p>
                                    {district.name}, İstanbul'un {district.side} Yakası'nda yer alan önemli ilçelerinden biridir.
                                    Çizgi Transfer olarak {district.name} bölgesinde 7/24 korsan taksi ve transfer hizmeti sunuyoruz.
                                    Deneyimli sürücü kadromuz ve temiz araçlarımızla sizi güvenle hedefinize ulaştırıyoruz.
                                </p>
                                <p>
                                    {district.name} içi transferlerden havaalanı servislerine, VIP hizmetlerden kurumsal çözümlere kadar
                                    geniş bir yelpazede hizmet veriyoruz. Özellikle {district.name}'dan İstanbul Havalimanı ve
                                    Sabiha Gökçen Havalimanı'na düzenli transfer hizmeti sağlıyoruz.
                                </p>
                                <h3 className="text-xl font-semibold text-[#1a1a2e] mt-8">
                                    {district.name} Korsan Taksi Hizmetlerimiz
                                </h3>
                                <ul>
                                    <li>{district.name} içi şehir içi transfer</li>
                                    <li>{district.name}'dan havalimanlarına transfer</li>
                                    <li>{district.name} VIP araç kiralama</li>
                                    <li>{district.name} kurumsal transfer anlaşmaları</li>
                                    <li>{district.name}'dan şehirlerarası transfer</li>
                                </ul>
                                <h3 className="text-xl font-semibold text-[#1a1a2e] mt-8">
                                    Neden {district.name}'da Bizi Tercih Etmelisiniz?
                                </h3>
                                <p>
                                    {district.name} bölgesinde yıllardır hizmet veren firmamız, müşteri memnuniyetini ön planda tutmaktadır.
                                    Tüm araçlarımız sigortalı ve düzenli bakımlıdır. Sürücülerimiz profesyonel ve deneyimlidir.
                                    Fiyatlarımız şeffaftır ve yolculuk sonrası ek ücret talep etmiyoruz.
                                </p>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div>
                            <div className="card bg-gradient-to-br from-[#1a1a2e] to-[#16213e] text-white mb-6">
                                <h3 className="text-xl font-semibold mb-4">Hemen İletişime Geçin</h3>
                                <p className="text-gray-300 mb-6">
                                    {district.name} transfer ihtiyacınız için bizi arayın veya WhatsApp'tan ulaşın.
                                </p>
                                <div className="space-y-3">
                                    <a href="tel:+905427403875" className="btn btn-primary w-full justify-center">
                                        <Phone size={18} />
                                        Hemen Ara
                                    </a>
                                    <a href="https://wa.me/905427403875" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp w-full justify-center">
                                        <MessageCircle size={18} />
                                        WhatsApp
                                    </a>
                                </div>
                            </div>

                            {/* Popular Routes */}
                            <div className="card">
                                <h3 className="font-semibold text-[#1a1a2e] mb-4 flex items-center gap-2">
                                    <MapPin size={18} className="text-[#e94560]" />
                                    Popüler Rotalar
                                </h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li>{district.name} - İstanbul Havalimanı</li>
                                    <li>{district.name} - Sabiha Gökçen</li>
                                    <li>{district.name} - Taksim</li>
                                    <li>{district.name} - Kadıköy</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nearby Districts */}
            <section className="section bg-[#fafafa]">
                <div className="container">
                    <h2 className="text-2xl font-bold text-[#1a1a2e] mb-8">Yakın Bölgeler</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {nearbyDistricts.map((d) => (
                            <Link
                                key={d.slug}
                                href={`/bolgeler/${d.slug}-korsan-taksi`}
                                className="card p-4 text-center hover:border-[#e94560] border-2 border-transparent group"
                            >
                                <span className="font-medium text-[#1a1a2e] group-hover:text-[#e94560] transition-colors">
                                    {d.name}
                                </span>
                            </Link>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <Link href="/bolgeler" className="btn btn-outline">
                            Tüm Bölgeler
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-dark py-16">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold mb-4">{district.name} Transfer İçin Hemen Arayın</h2>
                    <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                        {district.name} ve çevresinde güvenli transfer için Çizgi Transfer yanınızda.
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
