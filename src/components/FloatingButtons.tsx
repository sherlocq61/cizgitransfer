'use client';

import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingButtons() {
    const phoneNumber = '+905427403875';
    const whatsappNumber = '905427403875';
    const whatsappMessage = encodeURIComponent('Merhaba, transfer hizmeti hakkında bilgi almak istiyorum.');

    return (
        <div className="floating-buttons">
            <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="floating-btn floating-btn-whatsapp animate-pulse-slow"
                aria-label="WhatsApp ile iletişime geçin"
            >
                <MessageCircle size={24} />
            </a>
            <a
                href={`tel:${phoneNumber}`}
                className="floating-btn floating-btn-phone"
                aria-label="Bizi arayın"
            >
                <Phone size={24} />
            </a>
        </div>
    );
}
