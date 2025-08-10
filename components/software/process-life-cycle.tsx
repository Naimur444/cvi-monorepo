"use client"

import Image from "next/image"
import { useTheme } from '../../contexts/ThemeContext'

export default function ProcessLifecycle() {
  const { theme } = useTheme()
  const accentColor = theme === 'dark' ? '#057C80' : '#003C42'
  return (
    <section className="  py-10 md:py-20">
      <div className="w-11/12 md:w-9/12 mx-auto">
        <h2 className="text-2xl md:text-4xl  text-center font-semibold mb-4">
          Our Process life Cycle
        </h2>
        <p className="  text-center mb-20 md:mb-32">
          Creating a Tailored Experience: Our Five-Step Process to Building a Custom Software Solution
        </p>

        {/* Step 1 - User Journey Map */}
        <div className="mb-16 md:mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-10 md:gap-20 relative">
            <div className="absolute -top-12 left-0">
              <p className="text-white rounded-full py-1 px-6" style={{ backgroundColor: accentColor }}>
                Step 1
              </p>
            </div>

            <div className="order-2 md:order-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: accentColor }}>
                User Journey Map
              </h2>
              <p className="  mb-6">
                By mapping out the different touchpoints and experiences that users have with your product, we gain a
                deep understanding of their needs and pain points. This helps us design functional requirements and
                user interfaces that are intuitive and user-centered, resulting in a more seamless user experience.
              </p>
              <div className="flex items-center gap-4 md:gap-8">
                <div className="space-y-2">
                  <Image src="/miro.png" alt="Miro" width={40} height={40} />
                  <p className=" text-sm font-semibold text-center">
                    Miro
                  </p>
                </div>
                <div className="space-y-2">
                  <Image src="/fig-jam.png" alt="FigJam" width={80} height={60} />
                  <p className=" text-sm font-semibold text-center">
                    FigJam
                  </p>
                </div>
              </div>
            </div>

            <div className="relative w-full h-96 order-1 md:order-2">
              <Image
                src="/image-2.png"
                alt="User Journey Map"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Step 2 - Wireframe */}
        <div className="mb-16 md:mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-10 md:gap-20 relative">
            <div className="absolute -top-12 left-0 md:left-auto md:right-0">
              <p className="text-white rounded-full py-1 px-6" style={{ backgroundColor: accentColor }}>
                Step 2
              </p>
            </div>

            <div className="relative w-full h-96 order-1">
              <Image
                src="/image-2.png"
                alt="Wireframe"
                fill
                className="object-contain"
              />
            </div>

            <div className="order-2 md:text-right">
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: accentColor }}>
                Wireframe
              </h2>
              <p className="  mb-6">
                Wireframing is the foundation of a great product design. By focusing on layout and user flow, we
                create intuitive and user-centered designs that meet your users&#39; needs.
              </p>
              <div className="flex items-center gap-4 md:gap-8 md:justify-end">
                <div className="space-y-2">
                  <Image src="/miro.png" alt="Miro" width={40} height={40} />
                  <p className=" text-sm font-semibold text-center">
                    Miro
                  </p>
                </div>
                <div className="space-y-2">
                  <Image src="/figma.png" alt="Figma" width={40} height={40} />
                  <p className=" text-sm font-semibold text-center">
                    Figma
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3 - UI Design */}
        <div className="mb-16 md:mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-10 md:gap-20 relative">
            <div className="absolute -top-12 left-0">
              <p className="text-white rounded-full py-1 px-6" style={{ backgroundColor: accentColor }}>
                Step 3
              </p>
            </div>

            <div className="order-2 md:order-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: accentColor }}>
                UI Design
              </h2>
              <p className="  mb-6">
                UI Design is the key to building a custom software solution that stands out in any industry. Our UI
                design focuses on creating a visually appealing and intuitive interface that not only meets the
                functional requirements but enhances the overall user experience.
              </p>
              <div className="flex items-center gap-4 md:gap-8">
                <div className="space-y-2">
                  <Image src="/figma.png" alt="Figma" width={40} height={40} />
                  <p className=" text-sm font-semibold text-center">
                    Figma
                  </p>
                </div>
                <div className="space-y-2">
                  <Image src="/ps.svg" alt="Photoshop" width={40} height={40} />
                  <p className=" text-sm font-semibold text-center">
                    Photoshop
                  </p>
                </div>
                <div className="space-y-2">
                  <Image src="/il.svg" alt="Illustrator" width={40} height={40} />
                  <p className=" text-sm font-semibold text-center">
                    Illustrator
                  </p>
                </div>
              </div>
            </div>

            <div className="relative w-full h-96 order-1 md:order-2">
              <Image
                src="/image-2.png"
                alt="UI Design on laptop"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Step 4 - SRS */}
        <div className="mb-16 md:mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-10 md:gap-20 relative">
            <div className="absolute -top-12 left-0 md:left-auto md:right-0">
              <p className="text-white rounded-full py-1 px-6" style={{ backgroundColor: accentColor }}>
                Step 4
              </p>
            </div>

            <div className="relative w-full h-96 order-1">
              <Image
                src="/image-2.png"
                alt="SRS Documentation"
                fill
                className="object-contain"
              />
            </div>

            <div className="order-2 md:text-right">
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: accentColor }}>
                SRS
              </h2>
              <p className="  mb-6">
                SRS (Software Requirement Specification) is a document that outlines all the functional and
                non-functional requirements of a software system. It is used as a guide for software development and
                testing, and serves as a contract between the customer and the development team. The SRS document
                includes information about the system&#39;s functionality, performance, security, and usability
                requirements, user&#39;s needs and expectations, and any constraints or limitations on the software&#39;s
                design and functionality. It is a crucial document that helps ensure that the final product meets the
                customer&#39;s needs and stakeholders.
              </p>
              <div className="flex items-center gap-4 md:gap-8 md:justify-end">
                <div className="space-y-2">
                  <Image src="/doc.png" alt="Google Doc" width={40} height={40} />
                  <p className=" text-sm font-semibold text-center">
                    Google Doc
                  </p>
                </div>
                <div className="space-y-2">
                  <Image src="/notion.svg" alt="Notion" width={40} height={40} />
                  <p className=" text-sm font-semibold text-center">
                    Notion
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 5 - Developing & Testing */}
        <div className="mb-16 md:mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-10 md:gap-20 relative">
            <div className="absolute -top-12 left-0">
              <p className="text-white rounded-full py-1 px-6" style={{ backgroundColor: accentColor }}>
                Step 5
              </p>
            </div>

            <div className="order-2 md:order-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: accentColor }}>
                Developing & Testing
              </h2>
              <p className="  mb-6">
                Development and Testing ensures the Quality and functionality of Your Custom Software. Our dedicated
                process includes Industry-best practices and rigorous testing methodologies, ensuring that the final
                product is free of defects and meets the requirements set out in the design phase.
              </p>
              <div className="flex items-center gap-4 md:gap-8">
                <div className="space-y-2">
                  <Image src="/js.svg" alt="JavaScript" width={40} height={40} />
                  <p className=" text-sm font-semibold text-center">
                    JavaScript
                  </p>
                </div>
                <div className="space-y-2">
                  <Image src="/node.svg" alt="Node.js" width={40} height={40} />
                  <p className=" text-sm font-semibold text-center">
                    Node.js
                  </p>
                </div>
                <div className="space-y-2">
                  <Image src="/react.svg" alt="React" width={40} height={40} />
                  <p className=" text-sm font-semibold text-center">
                    React
                  </p>
                </div>
              </div>
            </div>

            <div className="relative w-full h-96 order-1 md:order-2">
              <Image
                src="/image-2.png"
                alt="Developers working"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
