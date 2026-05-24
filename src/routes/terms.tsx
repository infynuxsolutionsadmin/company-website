import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "../components/LegalLayout";

export const Route = createFileRoute("/terms")({
  component: TermsConditions,
  head: () => ({
    meta: [
      { title: "Terms & Conditions | INFYNUX" },
      { name: "description", content: "Read the terms and conditions for using the INFYNUX website and services. Understanding our mutual agreement." },
      { property: "og:title", content: "Terms & Conditions | INFYNUX" },
      { property: "og:description", content: "Read the terms and conditions for using the INFYNUX website and services." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
});

function TermsConditions() {
  return (
    <LegalLayout title="Terms & Conditions" lastUpdated="May 16, 2026" icon="terms">
      <div className="space-y-12 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Website Usage</h2>
          <p>
            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services. Any participation in this service will constitute acceptance of this agreement.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Intellectual Property</h2>
          <p>
            The website and its original content, features, and functionality are owned by INFYNUX and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws. This includes all logos, designs, text, graphics, and code.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Services</h2>
          <p>
            INFYNUX provides digital agency services including web development, UI/UX design, and AI integrations. The specific scope of work, timelines, and pricing for these services are governed by separate service agreements entered into between INFYNUX and its clients.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">User Responsibilities</h2>
          <p>
            As a user of this website, you agree to:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Provide accurate and complete information when requested</li>
            <li>Maintain the confidentiality of any account credentials</li>
            <li>Use the website in compliance with all applicable laws and regulations</li>
            <li>Respect the intellectual property rights of INFYNUX and third parties</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
          <p>
            In no event shall INFYNUX, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Prohibited Activities</h2>
          <p>
            You are specifically restricted from all of the following:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Publishing any website material in any other media without permission</li>
            <li>Using this website in any way that is or may be damaging to this website</li>
            <li>Using this website in any way that impacts user access to this website</li>
            <li>Using this website contrary to applicable laws and regulations</li>
            <li>Engaging in any data mining, data harvesting, data extracting or any other similar activity</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Changes to Terms</h2>
          <p>
            INFYNUX reserves the right to modify these terms from time to time at our sole discretion. Therefore, you should review these page periodically. When we change the terms in a material manner, we will notify you that material changes have been made to the terms. Your continued use of the website or our service after any such change constitutes your acceptance of the new terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact us at:
          </p>
          <div className="mt-4 p-6 rounded-xl glass border border-white/5">
            <p><strong>Email:</strong> infynuxsolutions@gmail.com</p>
            <p><strong>Address:</strong> Thiruvarur, Tamilnadu</p>
            <p><strong>Phone:</strong> +91 7010850923</p>
          </div>
        </section>
      </div>
    </LegalLayout>
  );
}
