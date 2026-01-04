import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'KVKK Aydınlatma Metni | Çizgi Transfer',
    description: 'Çizgi Transfer KVKK (Kişisel Verilerin Korunması Kanunu) aydınlatma metni.',
};

export default function KVKKPage() {
    return (
        <>
            <section className="section-dark py-20">
                <div className="container">
                    <h1 className="text-4xl font-bold">KVKK Aydınlatma Metni</h1>
                </div>
            </section>

            <section className="section bg-white">
                <div className="container max-w-4xl">
                    <div className="prose prose-lg text-gray-600">
                        <p><strong>Son Güncelleme:</strong> Ocak 2026</p>

                        <h2>1. Veri Sorumlusu</h2>
                        <p>
                            [Şirket Unvanı] ("Çizgi Transfer") olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu
                            ("KVKK") kapsamında veri sorumlusu sıfatıyla kişisel verilerinizi işlemekteyiz.
                        </p>

                        <h2>2. Kişisel Verilerin İşlenme Amacı</h2>
                        <p>Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:</p>
                        <ul>
                            <li>Transfer hizmeti rezervasyonu ve sunumu</li>
                            <li>Müşteri ilişkileri yönetimi</li>
                            <li>Faturalandırma ve ödeme işlemleri</li>
                            <li>Yasal yükümlülüklerin yerine getirilmesi</li>
                            <li>Hizmet kalitesinin artırılması</li>
                        </ul>

                        <h2>3. İşlenen Kişisel Veriler</h2>
                        <ul>
                            <li>Kimlik bilgileri (ad, soyad)</li>
                            <li>İletişim bilgileri (telefon, e-posta, adres)</li>
                            <li>Lokasyon bilgileri (alınacak/bırakılacak adres)</li>
                            <li>Ödeme bilgileri</li>
                        </ul>

                        <h2>4. Kişisel Verilerin Aktarımı</h2>
                        <p>
                            Kişisel verileriniz, hizmetin sunulması için zorunlu hallerde iş ortaklarımızla ve
                            yasal zorunluluklar çerçevesinde yetkili kurumlarla paylaşılabilir.
                        </p>

                        <h2>5. Veri Güvenliği</h2>
                        <p>
                            Kişisel verilerinizin güvenliği için gerekli teknik ve idari tedbirler alınmaktadır.
                        </p>

                        <h2>6. Haklarınız</h2>
                        <p>KVKK'nın 11. maddesi kapsamında aşağıdaki haklara sahipsiniz:</p>
                        <ul>
                            <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                            <li>İşlenmişse buna ilişkin bilgi talep etme</li>
                            <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                            <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme</li>
                            <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme</li>
                            <li>Silinmesini veya yok edilmesini isteme</li>
                            <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
                        </ul>

                        <h2>7. İletişim</h2>
                        <p>
                            KVKK kapsamındaki talepleriniz için <a href="mailto:kvkk@cizgitransfer.com">kvkk@cizgitransfer.com</a> adresinden
                            bize ulaşabilirsiniz.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
