// TODO: confirm the WhatsApp business number before launch
const WHATSAPP_NUMBER = "919140345678";
const DEFAULT_MESSAGE = "Hi, I'd like to know more about MD Tech Advisor's services.";

export default function WhatsAppButton() {
  const link = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg hover:scale-105 transition-transform"
    >
      <svg viewBox="0 0 32 32" width="28" height="28" fill="white">
        <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.362.687 4.564 1.872 6.418L4 29l7.773-1.84A11.94 11.94 0 0 0 16.001 27C22.628 27 28 21.627 28 15S22.628 3 16.001 3zm0 21.818c-2.05 0-3.955-.6-5.555-1.635l-.398-.24-4.615 1.093 1.12-4.497-.26-.412A9.77 9.77 0 0 1 5.909 15c0-5.575 4.517-10.09 10.092-10.09 5.575 0 10.09 4.515 10.09 10.09 0 5.575-4.515 10.09-10.09 10.09zm5.53-7.56c-.303-.152-1.792-.884-2.07-.985-.278-.101-.48-.152-.682.152s-.783.985-.96 1.187-.354.227-.657.076c-.303-.152-1.279-.471-2.436-1.503-.9-.803-1.508-1.795-1.685-2.098-.177-.303-.019-.467.133-.618.136-.136.303-.354.455-.531.152-.177.202-.303.303-.505.101-.202.05-.379-.025-.531-.076-.152-.682-1.645-.934-2.253-.246-.591-.496-.511-.682-.52-.177-.008-.379-.01-.581-.01-.202 0-.531.076-.809.379-.278.303-1.06 1.036-1.06 2.527s1.085 2.933 1.236 3.136c.152.202 2.135 3.26 5.174 4.571.723.312 1.287.499 1.727.639.726.231 1.386.198 1.908.12.582-.087 1.792-.733 2.045-1.44.253-.708.253-1.314.177-1.44-.076-.127-.278-.202-.581-.354z" />
      </svg>
    </a>
  );
}
