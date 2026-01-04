import { Shield, Users, Award, Heart, Phone, MessageCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Hakkımızda | Çizgi Transfer - Güvenilir Transfer Hizmeti',
    description: 'Çizgi Transfer olarak 10 yılı aşkın tecrübemizle İstanbul genelinde güvenli ve konforlu transfer hizmeti sunuyoruz.',
};

const values = [
    {
        icon: Shield,
        title: 'Güvenlik',
        description: 'Yolculuklarınızda güvenliğiniz bizim önceliğimiz. Tüm araçlarımız sigortalı ve düzenli bakımlı.',
    },
    {
        icon: Users,
        title: 'Müşteri Odaklılık',
        description: 'Her müşterimizin memnuniyeti için çalışıyoruz. İhtiyaçlarınıza özel çözümler sunuyoruz.',
    },
    {
        icon: Award,
        title: 'Profesyonellik',
        description: 'Deneyimli ve eğitimli sürücü kadromuzla profesyonel hizmet anlayışı.',
    },
    {
        icon: Heart,
        title: 'Dürüstlük',
        description: 'Şeffaf fiyatlandırma ve samimi iletişim ile güvene dayalı ilişkiler kuruyoruz.',
    },
];

export default function HakkimizdaPage() {
    return (
        <>
            {/* Hero */}
            <section className="section-dark py-20">
                <div className="container">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Hakkımızda</h1>
                        <p className="text-xl text-gray-300">
                            10 yılı aşkın tecrübemizle İstanbul'da güvenilir transfer hizmeti sunuyoruz.
                        </p>
                    </div>
                </div>
            </section>

            {/* Story */}
            <section className="section bg-white">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-[#1a1a2e] mb-6">Hikayemiz</h2>
                            <div className="space-y-4 text-gray-600">
                                <p>
                                    Çizgi Transfer, İstanbul'un dinamik ve yoğun trafiğinde güvenilir bir ulaşım çözümü sunmak amacıyla kuruldu.
                                    Yıllar içinde edindiğimiz tecrübe ve müşteri geri bildirimleriyle hizmet kalitemizi sürekli geliştirdik.
                                </p>
                                <p>
                                    Bugün, şehir içi transferden havaalanı servislerine, VIP hizmetlerden kurumsal çözümlere kadar
                                    geniş bir yelpazede hizmet sunuyoruz. Her yolculukta konfor, güvenlik ve zamanında varış ilkelerinden
                                    asla taviz vermiyoruz.
                                </p>
                                <p>
                                    Ekibimiz, işini seven ve müşteri memnuniyetini ön planda tutan profesyonellerden oluşuyor.
                                    Sizlere en iyi hizmeti sunmak için sürekli kendimizi geliştiriyoruz.
                                </p>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl p-12 text-center">
                            <div className="text-6xl font-bold text-[#e94560] mb-4">10+</div>
                            <div className="text-2xl text-white mb-2">Yıllık Deneyim</div>
                            <p className="text-gray-400">Binlerce mutlu müşteri</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section bg-[#fafafa]">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">Değerlerimiz</h2>
                        <p className="text-gray-600 max-w-xl mx-auto">
                            Hizmet anlayışımızın temelini oluşturan değerler.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value) => (
                            <div key={value.title} className="card text-center">
                                <div className="w-16 h-16 bg-[#1a1a2e] rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <value.icon size={28} className="text-[#e94560]" />
                                </div>
                                <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">{value.title}</h3>
                                <p className="text-gray-600 text-sm">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section bg-[#fafafa]">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">Bizimle Çalışmak İster misiniz?</h2>
                    <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                        Transfer ihtiyaçlarınız için bize ulaşın, güvenilir çözüm ortağınız olalım.
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
