import Link from 'next/link';
import { Calendar, Clock, ArrowRight, Phone, MessageCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog | Çizgi Transfer - Transfer ve Ulaşım Rehberi',
    description: 'İstanbul transfer hizmetleri, havaalanı ulaşımı, güvenli yolculuk ipuçları ve daha fazlası için blog yazılarımızı okuyun.',
};

const blogPosts = [
    {
        slug: 'istanbul-havalimani-ulasim-rehberi',
        title: 'İstanbul Havalimanı\'ndan Şehir Merkezine Nasıl Gidilir?',
        excerpt: 'İstanbul Havalimanı\'ndan şehre ulaşım seçeneklerini karşılaştırdık. Transfer, metro, otobüs ve taksi alternatifleri.',
        date: '2026-01-03',
        readTime: '5 dk',
        category: 'Rehber',
    },
    {
        slug: 'korsan-taksi-nedir',
        title: 'Korsan Taksi Nedir? Yasal mı?',
        excerpt: 'Korsan taksi kavramı ve transfer hizmeti arasındaki farkları açıklıyoruz.',
        date: '2026-01-02',
        readTime: '4 dk',
        category: 'Bilgi',
    },
    {
        slug: 'sabiha-gokcen-transfer-rehberi',
        title: 'Sabiha Gökçen Transfer Rehberi',
        excerpt: 'Sabiha Gökçen Havalimanı\'na ve havalimanından ulaşım alternatifleri ve transfer ipuçları.',
        date: '2026-01-01',
        readTime: '5 dk',
        category: 'Rehber',
    },
    {
        slug: 'gece-taksi-bulmak',
        title: 'Gece Taksi Bulmak Neden Zor?',
        excerpt: 'Gece saatlerinde İstanbul\'da taksi bulamayanlar için çözüm önerileri ve 7/24 transfer avantajları.',
        date: '2025-12-28',
        readTime: '3 dk',
        category: 'İpucu',
    },
    {
        slug: 'vip-transfer-farki',
        title: 'VIP Transfer ile Normal Taksi Farkı',
        excerpt: 'VIP transfer hizmetinin avantajları, araç özellikleri ve hangi durumlarda tercih edilmeli.',
        date: '2025-12-25',
        readTime: '4 dk',
        category: 'Karşılaştırma',
    },
    {
        slug: 'sehirlerarasi-yolculuk-ipuclari',
        title: 'Şehirlerarası Yolculuk İpuçları',
        excerpt: 'Uzun mesafe transferlerinde dikkat edilmesi gerekenler ve güvenlik tavsiyeleri.',
        date: '2025-12-22',
        readTime: '5 dk',
        category: 'İpucu',
    },
];

export default function BlogPage() {
    return (
        <>
            {/* Hero */}
            <section className="section-dark py-20">
                <div className="container">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
                        <p className="text-xl text-gray-300">
                            İstanbul transfer hizmetleri, ulaşım ipuçları ve seyahat rehberleri.
                        </p>
                    </div>
                </div>
            </section>

            {/* Blog Posts */}
            <section className="section bg-white">
                <div className="container">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post) => (
                            <article key={post.slug} className="card group hover:border-[#e94560] border-2 border-transparent">
                                <div className="mb-4">
                                    <span className="inline-block px-3 py-1 bg-[#e94560]/10 text-[#e94560] text-sm font-medium rounded-full">
                                        {post.category}
                                    </span>
                                </div>
                                <h2 className="text-xl font-semibold text-[#1a1a2e] mb-3 group-hover:text-[#e94560] transition-colors">
                                    <Link href={`/blog/${post.slug}`}>
                                        {post.title}
                                    </Link>
                                </h2>
                                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                                <div className="flex items-center justify-between text-sm text-gray-400">
                                    <div className="flex items-center gap-4">
                                        <span className="flex items-center gap-1">
                                            <Calendar size={14} />
                                            {new Date(post.date).toLocaleDateString('tr-TR')}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Clock size={14} />
                                            {post.readTime}
                                        </span>
                                    </div>
                                    <Link href={`/blog/${post.slug}`} className="text-[#e94560] flex items-center gap-1 font-medium">
                                        Oku
                                        <ArrowRight size={14} />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-dark py-16">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold mb-4">Transfer İhtiyacınız mı Var?</h2>
                    <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                        Blog yazılarımızı okudunuz, şimdi profesyonel hizmet için bizi arayın.
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
