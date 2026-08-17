import EmailIcon from '~/icons/Email';
import GitHubIcon from '~/icons/Github';
import LinkedInIcon from '~/icons/LinkedIn';
import ResumeIcon from '~/icons/Resume';

function SocialLink({ children, ...rest }: { children: React.ReactNode; [key: string]: any }) {
  return (
    <a
      className="
        grid w-30 grid-cols-[26px_1fr] items-center rounded-md bg-better-white/70 p-3 text-sm leading-none font-semibold text-index-link uppercase transition-colors
        hover:bg-better-white
        sm:w-40 sm:grid-cols-[40px_1fr] sm:rounded-lg sm:px-3 sm:py-2
      "
      {...rest}
    >
      {children}
    </a>
  );
}

export default function Socials() {
  return (
    <div className="
      w-full bg-index-link/30 py-3
      sm:bg-transparent sm:py-0
    "
    >
      <div className="
        mx-auto grid w-fit grid-cols-2 grid-rows-2 justify-items-start gap-2
        sm:mx-0 sm:w-full sm:grid-cols-1 sm:grid-rows-4 sm:gap-3 sm:bg-none
      "
      >
        <SocialLink
          href="https://github.com/Heher"
          aria-label="My GitHub"
        // onClick={() => {
        //   gtag.event({
        //     action: 'click_contact',
        //     category: 'Contact Link',
        //     label: 'GitHub'
        //   });
        // }}
        >
          <GitHubIcon className="
            h-4 fill-current
            sm:h-6
          "
          />
          <span className="text-xs">GitHub</span>
        </SocialLink>
        <SocialLink
          href="https://www.linkedin.com/in/johnheher/"
          aria-label="My LinkedIn"
        // onClick={() => {
        //   gtag.event({
        //     action: 'click_contact',
        //     category: 'Contact Link',
        //     label: 'LinkedIn'
        //   });
        // }}
        >
          <LinkedInIcon className="
            h-4 fill-current
            sm:h-6
          "
          />
          <span className="text-xs">LinkedIn</span>
        </SocialLink>
        <SocialLink
          href="/cv.pdf"
          aria-label="My Résumé"
        // onClick={() => {
        //   gtag.event({
        //     action: 'click_contact',
        //     category: 'Contact Link',
        //     label: 'Resume'
        //   });
        // }}
        >
          <ResumeIcon className="
            h-4 fill-current
            sm:h-6
          "
          />
          <span className="text-xs">Resume</span>
        </SocialLink>
        <SocialLink
          href="mailto:johnheher@gmail.com"
          aria-label="Email me"
        // onClick={() => {
        //   gtag.event({
        //     action: 'click_contact',
        //     category: 'Contact Link',
        //     label: 'Email'
        //   });
        // }}
        >
          <EmailIcon className="
            w-4 fill-current
            sm:w-5
          "
          />
          <span className="text-xs">Email</span>
        </SocialLink>
      </div>
    </div>
  );
}
