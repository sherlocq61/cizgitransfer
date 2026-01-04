import { Phone, MessageCircle, Car, Plane, Crown, Building2, MapPin, Shield, Clock, CreditCard, Users, ChevronDown, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Car,
    title: 'Şehir İçi Taksi',
    description: 'İstanbul içi tüm bölgelere güvenli ve konforlu ulaşım.',
    href: '/hizmetler/sehir-ici-taksi',
  },
  {
    icon: Plane,
    title: 'Havaalanı Transferi',
    description: 'İstanbul Havalimanı ve Sabiha Gökçen transfer hizmeti.',
    href: '/hizmetler/havaalani-transferi',
  },
  {
    icon: Crown,
    title: 'VIP Transfer',
    description: 'Lüks araçlarla özel ve konforlu yolculuk deneyimi.',
    href: '/hizmetler/vip-transfer',
  },
  {
    icon: Building2,
    title: 'Kurumsal Anlaşma',
    description: 'Şirketlere özel avantajlı transfer çözümleri.',
    href: '/hizmetler/kurumsal-anlasma',
  },
  {
    icon: MapPin,
    title: 'Şehirlerarası Transfer',
    description: 'Türkiye genelinde uzun mesafe transfer hizmeti.',
    href: '/hizmetler/sehirlerarasi-transfer',
  },
];

const features = [
  {
    icon: Shield,
    title: 'Güvenli Hizmet',
    description: 'Profesyonel ekip ve bakımlı araçlarla hizmetinizdeyiz.',
  },
  {
    icon: Clock,
    title: '7/24 Hizmet',
    description: 'Gece gündüz her an yanınızdayız.',
  },
  {
    icon: CreditCard,
    title: 'Şeffaf Fiyat',
    description: 'Gizli maliyet yok, fiyatı önceden öğrenin.',
  },
  {
    icon: Users,
    title: 'Deneyimli Ekip',
    description: '10+ yıl tecrübeli profesyonel sürücüler.',
  },
];

const steps = [
  {
    number: '01',
    title: 'Bizi Arayın',
    description: 'Telefon veya WhatsApp ile ulaşın, ihtiyacınızı belirtin.',
  },
  {
    number: '02',
    title: 'Aracınız Gelsin',
    description: 'Belirlenen zamanda kapınızda oluruz.',
  },
  {
    number: '03',
    title: 'Keyifli Yolculuk',
    description: 'Güvenli ve konforlu bir şekilde hedefinize ulaşın.',
  },
];

const popularDistricts = [
  'Esenyurt', 'Bağcılar', 'Küçükçekmece', 'Bahçelievler', 'Bakırköy',
  'Kadıköy', 'Üsküdar', 'Pendik', 'Ümraniye', 'Ataşehir',
  'Beylikdüzü', 'Avcılar', 'Beşiktaş', 'Şişli', 'Maltepe',
];

const faqs = [
  {
    question: 'Nasıl hizmet alabilirim?',
    answer: 'Telefon veya WhatsApp üzerinden bize ulaşarak kolayca hizmet alabilirsiniz. Adres ve saat bilgisi verdiğinizde en kısa sürede kapınızda oluruz.',
  },
  {
    question: 'Fiyatları nasıl öğrenebilirim?',
    answer: 'WhatsApp veya telefon ile bize ulaştığınızda, gideceğiniz lokasyona göre size net fiyat bilgisi veririz. Yolculuk sonrası ek ücret talep etmeyiz.',
  },
  {
    question: 'Havaalanı transferi için ne kadar önceden aramalıyım?',
    answer: 'Mümkünse en az 2-3 saat önceden aramanızı öneririz. Ancak acil durumlarda da müsaitlik durumuna göre hizmet verebiliyoruz.',
  },
  {
    question: 'Ödeme yöntemleri nelerdir?',
    answer: 'Nakit ve kredi kartı ile ödeme kabul ediyoruz. Kurumsal müşterilerimize faturalı hizmet de sunuyoruz.',
  },
  {
    question: 'Araçlarınız temiz ve bakımlı mı?',
    answer: 'Evet, tüm araçlarımız düzenli olarak dezenfekte edilmekte ve bakımları eksiksiz yapılmaktadır. Müşteri konforunu en üst düzeyde tutuyoruz.',
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-dark min-h-[90vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-5"></div>
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeInUp">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                İstanbul <span className="text-[#e94560]">Korsan Taksi</span> ve Transfer Hizmeti
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Güvenli, konforlu ve zamanında ulaşım için Çizgi Transfer yanınızda.
                7/24 hizmetimizle istediğiniz yere sizi ulaştırıyoruz.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 mb-8">
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

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <a href="tel:+905427403875" className="btn btn-primary text-lg px-8 py-4">
                  <Phone size={20} />
                  Hemen Ara
                </a>
                <a
                  href="https://wa.me/905427403875"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp text-lg px-8 py-4"
                >
                  <MessageCircle size={20} />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Right Side - Stats */}
            <div className="hidden lg:grid grid-cols-2 gap-6">
              <div className="card bg-white/10 backdrop-blur-sm border border-white/10 text-center">
                <div className="text-4xl font-bold text-[#e94560] mb-2">10+</div>
                <div className="text-gray-300">Yıllık Deneyim</div>
              </div>
              <div className="card bg-white/10 backdrop-blur-sm border border-white/10 text-center">
                <div className="text-4xl font-bold text-[#e94560] mb-2">50K+</div>
                <div className="text-gray-300">Mutlu Müşteri</div>
              </div>
              <div className="card bg-white/10 backdrop-blur-sm border border-white/10 text-center">
                <div className="text-4xl font-bold text-[#e94560] mb-2">39</div>
                <div className="text-gray-300">İlçede Hizmet</div>
              </div>
              <div className="card bg-white/10 backdrop-blur-sm border border-white/10 text-center">
                <div className="text-4xl font-bold text-[#e94560] mb-2">24/7</div>
                <div className="text-gray-300">Kesintisiz Hizmet</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4">Hizmetlerimiz</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Her türlü ulaşım ihtiyacınız için profesyonel çözümler sunuyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="card group hover:border-[#e94560] border-2 border-transparent"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#e94560] to-[#ff6b6b] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#1a1a2e] mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <div className="mt-4 flex items-center gap-2 text-[#e94560] font-medium">
                  Detaylı Bilgi
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section bg-[#fafafa]">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4">Nasıl Çalışır?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Sadece 3 adımda güvenli yolculuğunuza başlayın.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="text-center relative">
                <div className="w-20 h-20 bg-gradient-to-br from-[#e94560] to-[#ff6b6b] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-[#1a1a2e] mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[#e94560] to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4">Neden Çizgi Transfer?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Güvenilirlik ve kalite standartlarımızla fark yaratıyoruz.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="card text-center">
                <div className="w-16 h-16 bg-[#1a1a2e] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon size={28} className="text-[#e94560]" />
                </div>
                <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Districts */}
      <section className="section bg-[#fafafa]">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4">Hizmet Bölgelerimiz</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              İstanbul'un tüm ilçelerinde yanınızdayız.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {popularDistricts.map((district) => (
              <Link
                key={district}
                href={`/bolgeler/${district.toLowerCase().replaceAll('ı', 'i').replaceAll('ş', 's').replaceAll('ğ', 'g').replaceAll('ü', 'u').replaceAll('ö', 'o').replaceAll('ç', 'c')}-korsan-taksi`}
                className="px-6 py-3 bg-white rounded-full border-2 border-gray-200 hover:border-[#e94560] hover:text-[#e94560] transition-all font-medium"
              >
                {district}
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/bolgeler" className="btn btn-outline">
              Tüm Bölgeleri Gör
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4">Sık Sorulan Sorular</h2>
            <p className="text-lg text-gray-600">
              Merak ettiklerinize hızlıca cevap bulun.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="group card cursor-pointer">
                <summary className="flex items-center justify-between font-semibold text-[#1a1a2e] list-none">
                  {faq.question}
                  <ChevronDown size={20} className="text-[#e94560] group-open:rotate-180 transition-transform" />
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/sss" className="btn btn-outline">
              Tüm Sorular
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-dark py-20">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Hemen İletişime Geçin</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Transfer ihtiyacınız için bizi arayın veya WhatsApp'tan yazın.
            Size en uygun çözümü sunalım.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+905427403875" className="btn btn-primary text-lg px-8 py-4">
              <Phone size={20} />
              Hemen Ara
            </a>
            <a
              href="https://wa.me/905427403875"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp text-lg px-8 py-4"
            >
              <MessageCircle size={20} />
              WhatsApp'tan Yaz
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
