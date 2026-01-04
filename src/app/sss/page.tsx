import { ChevronDown, Phone, MessageCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Sık Sorulan Sorular (SSS) | Çizgi Transfer',
    description: 'Korsan taksi, transfer hizmetleri, fiyatlandırma ve rezervasyon hakkında sık sorulan sorular ve cevapları.',
};

const faqs = [
    {
        category: 'Genel',
        questions: [
            {
                q: 'Nasıl hizmet alabilirim?',
                a: 'Telefon veya WhatsApp üzerinden bize ulaşarak kolayca hizmet alabilirsiniz. Adres ve saat bilgisi verdiğinizde en kısa sürede kapınızda oluruz.',
            },
            {
                q: 'Hangi bölgelere hizmet veriyorsunuz?',
                a: 'İstanbul\'un 39 ilçesinin tamamına hizmet veriyoruz. Ayrıca şehirlerarası transfer için Türkiye genelinde hizmet sunabiliyoruz.',
            },
            {
                q: 'Hizmet saatleriniz nedir?',
                a: '7 gün 24 saat hizmet veriyoruz. Gece yarısı, bayram, tatil fark etmeksizin her zaman yanınızdayız.',
            },
        ],
    },
    {
        category: 'Fiyat ve Ödeme',
        questions: [
            {
                q: 'Fiyatları nasıl öğrenebilirim?',
                a: 'WhatsApp veya telefon ile bize ulaştığınızda, gideceğiniz lokasyona göre size net fiyat bilgisi veririz. Fiyat, mesafe ve araç tipine göre değişiklik gösterebilir.',
            },
            {
                q: 'Ödeme yöntemleri nelerdir?',
                a: 'Nakit ve kredi kartı ile ödeme kabul ediyoruz. Kurumsal müşterilerimize faturalı hizmet ve aylık ödeme imkanı da sunuyoruz.',
            },
            {
                q: 'Yolculuk sonrası ek ücret alınır mı?',
                a: 'Hayır, önceden anlaştığımız fiyat dışında ek ücret talep etmiyoruz. Trafik, bekleme gibi durumlar için önceden bilgi verilir.',
            },
        ],
    },
    {
        category: 'Havaalanı Transferi',
        questions: [
            {
                q: 'Havaalanı transferi için ne kadar önceden aramalıyım?',
                a: 'Mümkünse en az 2-3 saat önceden aramanızı öneririz. Ancak acil durumlarda da müsaitlik durumuna göre hizmet verebiliyoruz.',
            },
            {
                q: 'Uçuş gecikmelerinde ne olur?',
                a: 'Uçuşunuzu takip ediyoruz. Gecikme durumunda sürücümüz yeni varış saatine göre sizi bekleyecektir, ek ücret talep etmiyoruz.',
            },
            {
                q: 'Havaalanında beni nasıl bulacaksınız?',
                a: 'Sürücümüz isminizin yazılı olduğu tabela ile karşılama noktasında sizi bekleyecektir. Ayrıca telefon ile iletişimde kalacağız.',
            },
        ],
    },
    {
        category: 'Araçlar ve Güvenlik',
        questions: [
            {
                q: 'Araçlarınız temiz ve bakımlı mı?',
                a: 'Evet, tüm araçlarımız düzenli olarak dezenfekte edilmekte ve bakımları eksiksiz yapılmaktadır. Müşteri konforunu en üst düzeyde tutuyoruz.',
            },
            {
                q: 'Çocuk koltuğu temin edebilir misiniz?',
                a: 'Evet, önceden bildirilmesi durumunda çocuk koltuğu temin edebiliyoruz. Rezervasyon sırasında bu ihtiyacınızı belirtmeniz yeterli.',
            },
            {
                q: 'Sürücüleriniz hakkında bilgi alabilir miyim?',
                a: 'Tüm sürücülerimiz E sınıfı ehliyet sahibidir, sabıka kaydı temizdir ve düzenli sağlık kontrolünden geçmektedir. Yolculuk öncesi sürücü bilgisi paylaşılabilir.',
            },
        ],
    },
    {
        category: 'Rezervasyon',
        questions: [
            {
                q: 'Nasıl rezervasyon yapabilirim?',
                a: 'Telefon veya WhatsApp üzerinden bize ulaşarak rezervasyon yapabilirsiniz. Tarih, saat ve lokasyon bilgilerini paylaşmanız yeterli.',
            },
            {
                q: 'Rezervasyonumu iptal edebilir miyim?',
                a: 'Evet, yolculuk saatinden en az 2 saat önce iptal edebilirsiniz. Acil durumlarda bizi arayarak iptal işleminizi gerçekleştirebilirsiniz.',
            },
            {
                q: 'Grup transferi yapıyor musunuz?',
                a: 'Evet, minibüs ve minivan seçeneklerimizle 8+ kişilik grup transferleri yapabiliyoruz. Detaylar için bizimle iletişime geçin.',
            },
        ],
    },
];

export default function SSSPage() {
    return (
        <>
            {/* Hero */}
            <section className="section-dark py-20">
                <div className="container">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Sık Sorulan Sorular</h1>
                        <p className="text-xl text-gray-300">
                            Transfer hizmetlerimiz hakkında merak edilen soruların cevaplarını burada bulabilirsiniz.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="section bg-white">
                <div className="container max-w-4xl">
                    {faqs.map((category) => (
                        <div key={category.category} className="mb-12">
                            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-6 pb-2 border-b-2 border-[#e94560]">
                                {category.category}
                            </h2>
                            <div className="space-y-4">
                                {category.questions.map((faq, index) => (
                                    <details key={index} className="card cursor-pointer group">
                                        <summary className="flex items-center justify-between font-semibold text-[#1a1a2e] list-none">
                                            {faq.q}
                                            <ChevronDown size={20} className="text-[#e94560] group-open:rotate-180 transition-transform flex-shrink-0 ml-4" />
                                        </summary>
                                        <p className="mt-4 text-gray-600 leading-relaxed">{faq.a}</p>
                                    </details>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="section-dark py-16">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold mb-4">Sorunuzun Cevabını Bulamadınız mı?</h2>
                    <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                        Bize doğrudan ulaşın, tüm sorularınızı yanıtlayalım.
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
