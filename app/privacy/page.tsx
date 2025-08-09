import Header from "@/components/header"
import Footer from "@/components/footer"

export default function PrivacyPage() {
  return (
    <div>
      <Header />
      <div className="mt-16 md:mt-28 lg:mt-32">
        <main className="max-w-7xl mx-auto w-full px-4" style={{ maxWidth: '80rem' }}>
          <h1
            className="text-3xl md:text-4xl font-bold text-center"
            style={{ marginTop: '80px' }}
          >
            Privacy Policy of CVI
          </h1>
          <p
            className="text-start"
            style={{
              marginTop: '48px',
              fontSize: '16px',
              lineHeight: '24px',
              fontWeight: 400
            }}
          >
            This privacy policy aims to assist those concerned about how their “Personally Identifiable Information” (PII) is being used online. PII refers to data that may be used alone or in conjunction with other data to identify, get in touch with, or locate a specific person. It also refers to data that can identify a person in a particular situation. Please carefully read our privacy statement to understand how we collect, utilize, safeguard, and otherwise deal with your personally identifiable information in compliance with our website.
          </p>
          <div
            style={{
              marginTop: '24px',
              fontSize: '16px',
              lineHeight: '24px',
              fontWeight: 700
            }}
          >
            What private information do we obtain from visitors to our website or blog?
          </div>
          <p
            className="text-start"
            style={{
              marginTop: '8px',
              fontSize: '16px',
              lineHeight: '24px',
              fontWeight: 400
            }}
          >
            When you order or register on our site, we may ask for your name, email address, mailing address, phone number, or other details.
          </p>

          <div
            style={{
              marginTop: '24px',
              fontSize: '16px',
              lineHeight: '24px',
              fontWeight: 700
            }}
          >
            When do we gather information?
          </div>
          <p
            className="text-start"
            style={{
              marginTop: '8px',
              fontSize: '16px',
              lineHeight: '24px',
              fontWeight: 400
            }}
          >
            When you visit our site, fill out a form, subscribe to a newsletter, answer a poll, or enter information, we may get information from you.
          </p>

          <div
            style={{
              marginTop: '24px',
              fontSize: '16px',
              lineHeight: '24px',
              fontWeight: 700
            }}
          >
            What do we do with your information?
          </div>
          <p
            className="text-start"
            style={{
              marginTop: '8px',
              fontSize: '16px',
              lineHeight: '24px',
              fontWeight: 400
            }}
          >
            We may make the following uses of the data we learn about you from whether you register, buy anything, subscribe to our newsletter, answer a survey or marketing communication, browse the website, or use particular other site features:
          </p>
          <ol className="text-start pl-5" style={{ fontSize: '16px', lineHeight: '24px', fontWeight: 400, marginTop: '8px', listStyle: 'none', paddingLeft: 0 }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: 0, marginBottom: '24px', marginTop: '24px' }}><span>1)</span>&nbsp;Let us present the kind of content and product options you are most interested in while also allowing us to customize the user experience.</li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: 0, marginBottom: '24px' }}><span>2)</span>&nbsp;To make changes to our website so that we can better serve you.</li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: 0, marginBottom: '24px' }}><span>3)</span>&nbsp;To manage a campaign, survey, contest, or another website element.</li>
          </ol>

          <div
            style={{
              marginTop: '24px',
              fontSize: '16px',
              lineHeight: '24px',
              fontWeight: 700
            }}
          >
            How do we protect visitor information?
          </div>
          <ol className="text-start pl-5" style={{ fontSize: '16px', lineHeight: '24px', fontWeight: 400, marginTop: '8px', listStyle: 'none', paddingLeft: 0 }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: 0, marginBottom: '24px', marginTop: '24px' }}><span>1)</span>&nbsp;We do not employ PCI-compliant scanning or screening for vulnerabilities. We frequently scan for malware.</li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: 0, marginBottom: '24px' }}><span>2)</span>&nbsp;We don’t use SSL encryption.</li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: 0, marginBottom: '24px' }}><span>3)</span>&nbsp;No SSL is required. As a result, we solely offer content and information.</li>
          </ol>

          {/* Do we use 'cookies'? */}
          <div
            style={{
              marginTop: '24px',
              fontSize: '16px',
              lineHeight: '24px',
              fontWeight: 700
            }}
          >
            Do we use ‘cookies’?
          </div>
          <p className="text-start" style={{ marginTop: '8px', fontSize: '16px', lineHeight: '24px', fontWeight: 400, marginBottom: '24px' }}>
            Yes, however, we don’t track anyone via cookies. You can either turn off all cookies or have your computer alert you each time one is sent. You can do this by adjusting the settings on your browser (like Internet Explorer). Because each browser is a little different, check the help menu to find out how to edit your cookies properly.
          </p>
          <p className="text-start" style={{ marginTop: '8px', fontSize: '16px', lineHeight: '24px', fontWeight: 400, marginBottom: '24px' }}>
            If users turn off their browser’s cookie feature: Certain functions won’t function if you disable cookies. Some of the functions that improve your site experience will be turned off, and some of our services won’t work correctly.
          </p>
          <p className="text-start" style={{ marginTop: '8px', fontSize: '16px', lineHeight: '24px', fontWeight: 400 }}>
            However, you can still browse our website.
          </p>

          {/* Google */}
          <div
            style={{
              marginTop: '24px',
              fontSize: '16px',
              lineHeight: '24px',
              fontWeight: 700
            }}
          >
            Google
          </div>
          <p className="text-start" style={{ marginTop: '8px', fontSize: '16px', lineHeight: '24px', fontWeight: 400 }}>
            Cookies are used by Google, a third-party provider, to deliver adverts on our website. The DART cookie is used by Google to deliver advertisements to our users based on their visits to our website and other websites on the Internet. Users can choose not to have their data collected using the DART cookie by checking the Google ad and content network privacy policy. We have put the following into practice:
          </p>
          <ol className="text-start pl-5" style={{ fontSize: '16px', lineHeight: '24px', fontWeight: 400, marginTop: '8px', listStyle: 'none', paddingLeft: 0 }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: 0, marginBottom: '24px', marginTop: '24px' }}><span>1)</span>&nbsp;Remarketing with Google AdSense</li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: 0, marginBottom: '24px' }}><span>2)</span>&nbsp;Google Display Network Impression Reporting</li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: 0, marginBottom: '24px' }}><span>3)</span>&nbsp;Demographics and Interests Reporting</li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: 0, marginBottom: '24px' }}><span>4)</span>&nbsp;DoubleClick Platform Integration</li>
          </ol>
          <p className="text-start" style={{ marginTop: '8px', fontSize: '16px', lineHeight: '24px', fontWeight: 400, marginBottom: '24px' }}>
            To gather information about how users interact with ad impressions and other ad service features related to our website, third-party vendors and we, like Google, use first-party cookies (like the Google Analytics cookie) and third-party cookies (like the DoubleClick cookie) or other third-party identifiers.
          </p>
          <p className="text-start" style={{ marginTop: '8px', fontSize: '16px', lineHeight: '24px', fontWeight: 400 }}>
            <span style={{ fontWeight: 700 }}>Opting out:</span> The Google Ad Settings website allows users to establish choices for how Google advertises to them. You can also permanently opt-out using the Google Analytics Opt Out Browser add-on or the Network Advertising Initiative opt-out page.
          </p>

          {/* CalOPPA Section */}
          <div
            style={{
              marginTop: '32px',
              fontSize: '16px',
              lineHeight: '24px',
              fontWeight: 700
            }}
          >
            California Online Privacy Protection Act
          </div>
          <p className="text-start" style={{ marginTop: '8px', fontSize: '16px', lineHeight: '24px', fontWeight: 400, marginBottom: '24px' }}>
            CalOPPA is the first state law in the country to mandate the posting of a privacy statement on commercial websites and online services. The law’s reach extends well beyond California, requiring anyone or any organization operating websites in the United States (or perhaps the entire world) that collect personally identifiable information from California consumers to post a clear privacy statement on their website, adhere to it, and disclose exactly what information is being collected and with whom it will be shared – See more at: http://consumercal.org/california-online-privacy-protection-act-caloppa/#sthash.0FdRbT51.dpu
          </p>
          <p className="text-start" style={{ marginTop: '8px', fontSize: '16px', lineHeight: '24px', fontWeight: 400 }}>
            According to CalOPPA we agree to the following:
          </p>

          <div
            style={{
              marginTop: '24px',
              fontSize: '16px',
              lineHeight: '24px',
              fontWeight: 700
            }}
          >
            Users can visit our site anonymously:
          </div>
          <p className="text-start" style={{ marginTop: '8px', fontSize: '16px', lineHeight: '24px', fontWeight: 400 }}>
            When this privacy statement is finished, we will link to it from our home page or, at the very least, the first significant page you see when entering our website. The phrase “Privacy” appears in our Privacy Policy link, prominently displayed on the abovementioned page.
          </p>
          <p className="text-start" style={{ marginTop: '8px', fontSize: '16px', lineHeight: '24px', fontWeight: 400 }}>
            Any updates to our privacy statement will be posted on this page for users to view. Users can update their personal information by sending us an email or signing into their accounts.
          </p>

          {/* DNT and Behavioral Tracking */}
          <div
            style={{
              marginTop: '32px',
              fontSize: '16px',
              lineHeight: '24px',
              fontWeight: 700
            }}
          >
            How do not track signals work on our website?
          </div>
          <p className="text-start" style={{ marginTop: '8px', fontSize: '16px', lineHeight: '24px', fontWeight: 400 }}>
            We respect Do Not Track (DNT) browser mechanisms and do not track, place cookies, or use advertising while they are active.
          </p>

          <div
            style={{
              marginTop: '24px',
              fontSize: '16px',
              lineHeight: '24px',
              fontWeight: 700
            }}
          >
            Does our website permit behavioral tracking by outside parties?
          </div>
          <p className="text-start" style={{ marginTop: '8px', fontSize: '16px', lineHeight: '24px', fontWeight: 400 }}>
            Furthermore, it’s crucial to know that we permit third-party behavioral tracking.
          </p>

          {/* Fair Information Practices */}
          <div
            style={{
              marginTop: '32px',
              fontSize: '16px',
              lineHeight: '24px',
              fontWeight: 700
            }}
          >
            Fair Information Practices
          </div>
          <p className="text-start" style={{ marginTop: '8px', fontSize: '16px', lineHeight: '24px', fontWeight: 400, marginBottom: '24px' }}>
            The Fair Information Practices Principles are the cornerstone of American privacy legislation. The ideas they encompass have significantly impacted the evolution of data protection laws worldwide. Compliance with the different privacy regulations that safeguard personal information requires understanding the Fair Information Practice Principles and how they should be put into practice.
          </p>
          <p className="text-start" style={{ marginTop: '8px', fontSize: '16px', lineHeight: '24px', fontWeight: 400 }}>
            If a data breach occurs, we shall send email notifications to users within 7 business days following fair information practices. We also concur with the individual redress principle, which states that people must have the ability to hold negligent data collectors and processors accountable legally. This concept mandates that people have access to courts or a government body to investigate and/or prosecute non-compliance by data processors. It also mandates that people have enforceable rights against data users.
          </p>

          {/* CAN SPAM Act */}
          <div
            style={{
              marginTop: '32px',
              fontSize: '16px',
              lineHeight: '24px',
              fontWeight: 700
            }}
          >
            CAN SPAM Act
          </div>
          <p className="text-start" style={{ marginTop: '8px', fontSize: '16px', lineHeight: '24px', fontWeight: 400, marginBottom: '24px' }}>
            The CAN-SPAM Act is a piece of legislation that creates guidelines for commercial email, specifies specifications for messages intended for a commercial audience, provides users the option to stop receiving emails, and outlines severe consequences for infractions. To send you new material, we collect your email address.
          </p>
          <p className="text-start" style={{ marginTop: '8px', fontSize: '16px', lineHeight: '24px', fontWeight: 400, marginBottom: '24px' }}>
            The following is what we agree to comply with CAN SPAM: If at any point you no longer wish to receive emails in the future, you can email us at
          </p>
          <p className="text-start" style={{ marginTop: '8px', fontSize: '16px', lineHeight: '24px', fontWeight: 400, marginBottom: '24px' }}>
            support@6sensehq.com, and we will promptly remove you from ALL correspondence.
          </p>
          {/* Maintain the large bottom margin for the last element on the page */}
          <div style={{ marginBottom: '178px' }} />
        </main>
      </div>
      <Footer />
    </div>
  )
}
