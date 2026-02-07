export default function SevaSection() {
    return (
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4 max-w-5xl">
  
          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold">
              सनातन धर्म में सेवा का महत्व
            </h2>
  
            <p className="mt-5 text-lg md:text-xl text-gray-800">
              हिंदू परंपरा में सेवा को सबसे श्रेष्ठ धर्म और पूजा का रूप माना गया है।  
              निःस्वार्थ भाव से की गई सेवा मनुष्य को आध्यात्मिक उन्नति और आत्मशुद्धि की ओर ले जाती है।
            </p>
          </div>
  
          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-8">
  
            {/* Left Content */}
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                सच्ची सेवा का अर्थ
              </h3>
  
              <ul className="space-y-3 text-lg md:text-xl text-gray-800">
                <li>• बिना किसी स्वार्थ के दूसरों की सहायता करना</li>
                <li>• करुणा और विनम्रता के साथ कार्य करना</li>
                <li>• सभी जीवों को ईश्वर का स्वरूप मानकर सेवा करना</li>
                <li>• प्रकृति और जीव-जंतुओं की रक्षा करना</li>
                <li>• कृतज्ञता और दया से भरा जीवन जीना</li>
              </ul>
  
              <p className="mt-5 text-lg md:text-xl text-gray-800">
                गौसेवा को सनातन धर्म में अत्यंत पवित्र माना गया है।  
                गाय को “गौमाता” कहा गया है क्योंकि वह पोषण, करुणा और समृद्धि का प्रतीक है।
              </p>
            </div>
  
            {/* Right Content – Gita Quotes */}
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                श्रीमद्भगवद्गीता के उपदेश
              </h3>
  
              <div className="space-y-6 text-lg md:text-xl text-gray-800">
  
                <div>
                  <p className="italic">
                    “कर्मफल की आसक्ति छोड़कर अपने कर्तव्य का पालन करो,  
                    निःस्वार्थ भाव से किया गया कर्म ही मनुष्य को श्रेष्ठता प्रदान करता है।”
                  </p>
                  <p className="text-base md:text-lg mt-2 text-green-900 font-semibold">
                    – श्रीमद्भगवद्गीता 3.19
                  </p>
                </div>
  
                <div>
                  <p className="italic">
                    “जो मनुष्य अपने कर्तव्यों को ईश्वर की सेवा समझकर करता है,  
                    वही जीवन में पूर्णता प्राप्त करता है।”
                  </p>
                  <p className="text-base md:text-lg mt-2 text-green-900 font-semibold">
                    – श्रीमद्भगवद्गीता 18.46
                  </p>
                </div>
  
                <div>
                  <p className="italic">
                    “जो सभी प्राणियों के प्रति करुणा और प्रेम रखता है,  
                    वही वास्तव में ईश्वर का प्रिय होता है।”
                  </p>
                  <p className="text-base md:text-lg mt-2 text-green-900 font-semibold">
                    – श्रीमद्भगवद्गीता 12.13
                  </p>
                </div>
  
              </div>
            </div>
  
          </div>
  
          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <a
              href="/donation"
              className="bg-green-900 text-white text-lg md:text-xl px-8 py-4 rounded-lg hover:bg-green-800 transition"
            >
              सेवा में सहभागी बनें
            </a>
          </div>
  
        </div>
      </section>
    );
  }
  