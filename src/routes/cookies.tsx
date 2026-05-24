import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "../components/LegalLayout";

export const Route = createFileRoute("/cookies")({
  component: CookiePolicy,
  head: () => ({
    meta: [
      { title: "Cookie Policy | INFYNUX" },
      { name: "description", content: "Learn about how INFYNUX uses cookies to enhance your experience. Transparency in tracking and data." },
      { property: "og:title", content: "Cookie Policy | INFYNUX" },
      { property: "og:description", content: "Learn about how INFYNUX uses cookies to enhance your experience." },
      { property: "og:url", content: "/cookies" },
    ],
    links: [{ rel: "canonical", href: "/cookies" }],
  }),
});

function CookiePolicy() {
  return (
    <LegalLayout title="Cookie Policy" lastUpdated="May 16, 2026" icon="cookies">
      <div className="space-y-12 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">What Are Cookies?</h2>
          <p>
            Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">How We Use Cookies</h2>
          <p>
            INFYNUX uses cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies enable us to track and target the interests of our users to enhance the experience on our site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Analytics Cookies</h2>
          <p>
            These cookies collect information that is used either in aggregate form to help us understand how our website is being used or how effective our marketing campaigns are, or to help us customize our website for you.
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Google Analytics: Used to analyze website traffic and user behavior.</li>
            <li>Hotjar: Used to understand user interaction through heatmaps and session recordings.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Functional Cookies</h2>
          <p>
            These cookies allow our website to remember choices you make when you use the website, such as remembering your login details or language preference. The purpose of these cookies is to provide you with a more personal experience and to avoid you having to re-enter your preferences every time you visit the website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Marketing Cookies</h2>
          <p>
            These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed for advertisers, and in some cases selecting advertisements that are based on your interests.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Third-Party Cookies</h2>
          <p>
            In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website, deliver advertisements on and through the website, and so on. These third parties may include social media networks like LinkedIn, Twitter, or Facebook.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Managing Cookies</h2>
          <p>
            You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.
          </p>
          <p className="mt-4">
            To learn more about how to manage cookies on popular browsers, you can visit the following links:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-[var(--cyan)] hover:underline">Google Chrome</a></li>
            <li><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer" className="text-[var(--cyan)] hover:underline">Mozilla Firefox</a></li>
            <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-[var(--cyan)] hover:underline">Apple Safari</a></li>
            <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-6349667f-99a9-4404-247d-3108a9616d55" target="_blank" rel="noopener noreferrer" className="text-[var(--cyan)] hover:underline">Microsoft Edge</a></li>
          </ul>
        </section>
      </div>
    </LegalLayout>
  );
}
