import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "../components/LegalLayout";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPolicy,
  head: () => ({
    meta: [
      { title: "Privacy Policy | INFYNUX" },
      { name: "description", content: "Learn how INFYNUX collects, uses, and protects your personal information. Your privacy is our priority." },
      { property: "og:title", content: "Privacy Policy | INFYNUX" },
      { property: "og:description", content: "Learn how INFYNUX collects, uses, and protects your personal information." },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
});

function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="May 16, 2026" icon="privacy">
      <div className="space-y-12 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
          <p>
            At INFYNUX, we are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Data Collection</h2>
          <p>
            We collect information that you provide directly to us, such as when you create an account, request information, or contact us. This may include:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Name and contact information (email, phone number, address)</li>
            <li>Professional information (company name, job title)</li>
            <li>Communication preferences</li>
            <li>Any other information you choose to provide</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Contact Forms</h2>
          <p>
            When you fill out a contact form on our website, we collect the information provided in the form to respond to your inquiry. This data is stored securely and used solely for the purpose of communicating with you regarding your request.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Cookies & Tracking</h2>
          <p>
            We use cookies and similar tracking technologies to track the activity on our service and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Analytics</h2>
          <p>
            We use third-party Service Providers, such as Google Analytics, to monitor and analyze the use of our service. These providers may use cookies and other technologies to collect data about your use of the website, including your IP address, browser type, and pages visited.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
          <p>
            We use the information we collect for various purposes, including:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>To provide, maintain, and improve our services</li>
            <li>To process transactions and send related information</li>
            <li>To respond to your comments, questions, and requests</li>
            <li>To send you technical notices, updates, and security alerts</li>
            <li>To monitor and analyze trends, usage, and activities</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Security</h2>
          <p>
            The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Third-Party Services</h2>
          <p>
            Our service may contain links to other sites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Email Communication</h2>
          <p>
            We may use your personal information to contact you with newsletters, marketing or promotional materials and other information that may be of interest to you. You may opt-out of receiving any, or all, of these communications from us by following the unsubscribe link or instructions provided in any email we send.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">User Rights</h2>
          <p>
            Depending on your location, you may have certain rights regarding your personal information, including:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>The right to access the personal information we hold about you</li>
            <li>The right to request that we correct or delete your personal information</li>
            <li>The right to object to or restrict certain processing of your data</li>
            <li>The right to data portability</li>
          </ul>
        </section>
      </div>
    </LegalLayout>
  );
}
