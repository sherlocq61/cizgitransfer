import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Gizlilik Politikası | Çizgi Transfer',
    description: 'Çizgi Transfer gizlilik politikası. Kişisel verilerinizin nasıl toplandığını ve kullanıldığını öğrenin.',
};

export default function GizlilikPage() {
    return (
        <>
            <section className="section-dark py-20">
                <div className="container">
                    <h1 className="text-4xl font-bold">Gizlilik Politikası</h1>
                </div>
            </section>

            <section className="section bg-white">
                <div className="container max-w-4xl">
                    <div className="prose prose-lg text-gray-600">
                        <p><strong>Son Güncelleme:</strong> Ocak 2026</p>

                        <h2>Giriş</h2>
                        <p>
                            Bu gizlilik politikası, Çizgi Transfer'in web sitesi ve hizmetleri aracılığıyla
                            topladığı kişisel verilerin nasıl kullanıldığını açıklamaktadır.
                        </p>

                        <h2>Toplanan Bilgiler</h2>
                        <p>Hizmetlerimizi kullanırken aşağıdaki bilgileri toplamaktayız:</p>
                        <ul>
                            <li><strong>İletişim Bilgileri:</strong> Ad, telefon numarası, e-posta adresi</li>
                            <li><strong>Konum Bilgileri:</strong> Transfer için alınacak ve bırakılacak adresler</li>
                            <li><strong>Rezervasyon Bilgileri:</strong> Tarih, saat, araç tercihi</li>
                            <li><strong>Teknik Bilgiler:</strong> IP adresi, tarayıcı türü, cihaz bilgileri</li>
                        </ul>

                        <h2>Bilgilerin Kullanımı</h2>
                        <p>Topladığımız bilgiler şu amaçlarla kullanılmaktadır:</p>
                        <ul>
                            <li>Transfer hizmeti sunmak ve rezervasyonları yönetmek</li>
                            <li>Müşteri desteği sağlamak</li>
                            <li>Hizmet kalitesini artırmak</li>
                            <li>Yasal yükümlülükleri yerine getirmek</li>
                        </ul>

                        <h2>Bilgi Paylaşımı</h2>
                        <p>
                            Kişisel bilgilerinizi yalnızca hizmet sunumu için gerekli olduğunda (örneğin sürücü ile
                            iletişim için) veya yasal zorunluluklar nedeniyle paylaşırız. Bilgilerinizi üçüncü
                            taraflara pazarlama amacıyla satmayız.
                        </p>

                        <h2>Veri Güvenliği</h2>
                        <p>
                            Kişisel verilerinizi korumak için endüstri standardı güvenlik önlemleri uygulamaktayız.
                            Ancak internet üzerinden veri iletiminin %100 güvenli olmadığını unutmayın.
                        </p>

                        <h2>Haklarınız</h2>
                        <p>
                            Kişisel verilerinize erişim, düzeltme veya silme talepinde bulunabilirsiniz.
                            Bu talepleriniz için bizimle iletişime geçebilirsiniz.
                        </p>

                        <h2>Değişiklikler</h2>
                        <p>
                            Bu gizlilik politikasını zaman zaman güncelleyebiliriz. Önemli değişiklikler
                            olduğunda web sitemizde bildirim yayınlayacağız.
                        </p>

                        <h2>İletişim</h2>
                        <p>
                            Gizlilik politikamız hakkında sorularınız için{' '}
                            <a href="mailto:info@cizgitransfer.com">info@cizgitransfer.com</a> adresinden
                            bize ulaşabilirsiniz.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
