import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Çerez Politikası | Çizgi Transfer',
    description: 'Çizgi Transfer çerez politikası. Web sitemizde kullanılan çerezler hakkında bilgi.',
};

export default function CerezPage() {
    return (
        <>
            <section className="section-dark py-20">
                <div className="container">
                    <h1 className="text-4xl font-bold">Çerez Politikası</h1>
                </div>
            </section>

            <section className="section bg-white">
                <div className="container max-w-4xl">
                    <div className="prose prose-lg text-gray-600">
                        <p><strong>Son Güncelleme:</strong> Ocak 2026</p>

                        <h2>Çerez Nedir?</h2>
                        <p>
                            Çerezler, web sitemizi ziyaret ettiğinizde cihazınıza yerleştirilen küçük metin
                            dosyalarıdır. Bu dosyalar, web sitesinin düzgün çalışmasını sağlamak ve
                            deneyiminizi iyileştirmek için kullanılır.
                        </p>

                        <h2>Kullandığımız Çerez Türleri</h2>

                        <h3>Zorunlu Çerezler</h3>
                        <p>
                            Web sitemizin temel işlevlerinin çalışması için gerekli olan çerezlerdir.
                            Bu çerezler olmadan site düzgün çalışmaz.
                        </p>

                        <h3>Performans Çerezleri</h3>
                        <p>
                            Ziyaretçilerin siteyi nasıl kullandığına dair bilgi toplayan çerezlerdir.
                            Bu bilgiler sitemizi geliştirmek için kullanılır.
                        </p>

                        <h3>İşlevsellik Çerezleri</h3>
                        <p>
                            Tercihlerinizi hatırlamamızı sağlayan çerezlerdir (örneğin dil tercihi).
                        </p>

                        <h2>Çerezleri Yönetme</h2>
                        <p>
                            Tarayıcı ayarlarınızdan çerezleri kabul etmeyi veya reddetmeyi seçebilirsiniz.
                            Ancak bazı çerezleri devre dışı bırakmak, web sitesinin bazı özelliklerinin
                            düzgün çalışmamasına neden olabilir.
                        </p>

                        <h3>Tarayıcı Ayarları</h3>
                        <ul>
                            <li><strong>Chrome:</strong> Ayarlar > Gizlilik ve güvenlik > Çerezler</li>
                            <li><strong>Firefox:</strong> Seçenekler > Gizlilik ve Güvenlik</li>
                            <li><strong>Safari:</strong> Tercihler > Gizlilik</li>
                            <li><strong>Edge:</strong> Ayarlar > Çerezler ve site izinleri</li>
                        </ul>

                        <h2>Değişiklikler</h2>
                        <p>
                            Bu çerez politikasını zaman zaman güncelleyebiliriz. Değişiklikler bu
                            sayfada yayınlanacaktır.
                        </p>

                        <h2>İletişim</h2>
                        <p>
                            Çerez politikamız hakkında sorularınız için{' '}
                            <a href="mailto:info@cizgitransfer.com">info@cizgitransfer.com</a> adresinden
                            bize ulaşabilirsiniz.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
