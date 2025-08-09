"use client"
import Image from "next/image"

export default function Component() {
  return (
    <div className="w-full max-w-7xl mx-auto rounded-lg overflow-hidden px-4 md:px-0" style={{ background: '#F9F9F9', marginBottom: 54 }}>
      <div className="flex flex-col md:flex-row">
        {/* Left side - Contact Information */}
        <div className="flex-1 p-4 sm:p-6 md:p-8 bg-gray-50">
          <div className="space-y-6">
            {/* Location Header */}
            <div className="space-y-1">
              <h1 className="text-lg sm:text-xl font-bold text-black">Bangladesh</h1>
              <p className="text-sm sm:text-base text-gray-600">Dhaka</p>
            </div>
            
            {/* Address and Contact in responsive columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              {/* Address Column */}
              <div>
                <h3 className="text-sm font-semibold text-black mb-2">Address</h3>
                <div className="text-sm text-black leading-relaxed">
                  <div>58/3/1/3-b, North</div>
                  <div>Mugdapara</div>
                  <div>Dhaka-1214, Bangladesh</div>
                </div>
              </div>
              
              {/* Contact Column */}
              <div>
                <h3 className="text-sm font-semibold text-black mb-2">Contact</h3>
                <div className="space-y-2">
                  <a 
                    href="tel:+8801310654721" 
                    className="flex items-center gap-2 text-sm hover:text-teal-700"
                  >
                    <Image src="/call-02.svg" alt="Call" width={16} height={16} />
                    <span style={{ color: '#0E4F53' }}>+8801310654721</span>
                  </a>
                  <a 
                    href="#" 
                    className="flex items-center gap-2 text-sm hover:text-teal-700"
                  >
                    <Image src="/location-04.svg" alt="Location" width={16} height={16} />
                    <span style={{ color: '#0E4F53' }}>Get direction</span>
                  </a>
                  <a 
                    href="mailto:contact@example.com" 
                    className="flex items-center gap-2 text-sm hover:text-teal-700"
                  >
                    <Image src="/mail-at-sign-01.svg" alt="Mail" width={16} height={16} />
                    <span style={{ color: '#0E4F53' }}>Email us</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right side - Dynamic Map */}
        <div className="w-full md:w-[373px] p-4 h-64 md:h-[280px]">
          <div className="relative overflow-hidden rounded-lg w-full h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8977285957!2d90.42707731498!3d23.754247994587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sMugdapara%2C%20Dhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location - Mugdapara, Dhaka, Bangladesh"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
