import Link from 'next/link';
import { Car, Plane, Crown, Building2, MapPin, ArrowRight, Phone, MessageCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Hizmetlerimiz | Çizgi Transfer - İstanbul Transfer Hizmetleri',
    description: 'Şehir içi taksi, havaalanı transferi, VIP transfer, kurumsal anlaşma ve şehirlerarası transfer hizmetlerimiz. 7/24 güvenli ulaşım.',
};

const services = [
    {
        icon: Car,
        title: 'Şehir İçi Taksi',
        slug: 'sehir-ici-taksi',
        description: 'İstanbul içi tüm bölgelere güvenli ve konforlu ulaşım hizmeti sunuyoruz. Trafikte zaman kaybetmeden, klimalı ve temiz araçlarımızla hedefinize ulaşın.',
        features: ['Tüm ilçelere hizmet', 'Profesyonel sürücüler', 'Temiz ve bakımlı araçlar', 'Şeffaf fiyatlandırma'],
    },
    {
        icon: Plane,
        title: 'Havaalanı Transferi',
        slug: 'havaalani-transferi',
        description: 'İstanbul Havalimanı ve Sabiha Gökçen Havalimanı transfer hizmeti. Uçuş saatinize göre sizi karşılıyor, güvenle hedefinize ulaştırıyoruz.',
        features: ['Uçuş takibi', 'Karşılama hizmeti', 'Bagaj yardımı', 'Zamanında varış garantisi'],
    },
    {
        icon: Crown,
        title: 'VIP Transfer',
        slug: 'vip-transfer',
        description: 'Lüks araçlarla özel ve konforlu yolculuk deneyimi. İş toplantıları, özel günler veya kendinizi şımartmak istediğiniz her an için.',
        features: ['Lüks araç filosu', 'Özel şoför hizmeti', 'İkram servisi', 'Maksimum konfor'],
    },
    {
        icon: Building2,
        title: 'Kurumsal Anlaşma',
        slug: 'kurumsal-anlasma',
        description: 'Şirketlere özel avantajlı transfer çözümleri. Çalışanlarınızın ulaşım ihtiyaçlarını profesyonelce karşılıyoruz.',
        features: ['Özel fiyatlandırma', 'Aylık faturalama', 'Öncelikli hizmet', '7/24 destek'],
    },
    {
        icon: MapPin,
        title: 'Şehirlerarası Transfer',
        slug: 'sehirlerarasi-transfer',
        description: 'İstanbul ve çevre illere uzun mesafe transfer hizmeti. Konforlu araçlarla güvenli yolculuk.',
        features: ['Tüm illere hizmet', 'Geniş araç seçenekleri', 'Mola planlaması', 'Gece yolculuğu'],
    },
];

export default function HizmetlerPage() {
    return (
        <>
            {/* Hero */}
            <section className="section-dark py-20">
                <div className="container">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Hizmetlerimiz</h1>
                        <p className="text-xl text-gray-300">
                            Her türlü ulaşım ihtiyacınız için profesyonel çözümler sunuyoruz.
                            Güvenli, zamanında ve konforlu transfer deneyimi için bizi tercih edin.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="section bg-white">
                <div className="container">
                    <div className="space-y-12">
                        {services.map((service, index) => (
                            <div
                                key={service.slug}
                                className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                            >
                                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                                    <div className="w-16 h-16 bg-gradient-to-br from-[#e94560] to-[#ff6b6b] rounded-xl flex items-center justify-center mb-4">
                                        <service.icon size={32} className="text-white" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-4">{service.title}</h2>
                                    <p className="text-gray-600 mb-6">{service.description}</p>
                                    <ul className="grid grid-cols-2 gap-3 mb-6">
                                        {service.features.map((feature) => (
                                            <li key={feature} className="flex items-center gap-2 text-gray-700">
                                                <div className="w-2 h-2 bg-[#e94560] rounded-full"></div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link href={`/hizmetler/${service.slug}`} className="btn btn-outline">
                                        Detaylı Bilgi
                                        <ArrowRight size={18} />
                                    </Link>
                                </div>
                                <div className={`bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl p-8 flex items-center justify-center min-h-[300px] ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                                    <service.icon size={120} className="text-[#e94560] opacity-50" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-dark py-16">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold mb-4">Hangi Hizmeti Tercih Edersiniz?</h2>
                    <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                        İhtiyacınıza uygun hizmeti belirlemek için bizi arayın, size en iyi çözümü sunalım.
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
