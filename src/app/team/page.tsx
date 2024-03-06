import FarcasterIcon from '@/components/icons/Farcaster'
import GithubIcon from '@/components/icons/Github'
import TelegramIcon from '@/components/icons/Telegram'
import XTwitterIcon from '@/components/icons/TwitterX'
import Footer from '@/components/minimal/Footer'
import { getTeamData } from '../../../scripts/build/team-data'
import Header from '../../components/minimal/Header'
import { RequestAuditSticky } from '../audits/RequestAuditSticky'

export default function TeamPage() {
  const team = getTeamData().filter((member) => member.showOnTeamPage)

  return (
    <div className="">
      <Header />

      <main className="Content mt-8">
        <h1 className="text-[1.3rem] font-semibold">Talent Without Borders</h1>
        <p className="mt-2">We work with the best — regardless of location.</p>

        <div className="mt-8 grid grid-flow-row xs:grid-cols-2 gap-6">
          {team.map((member) => {
            const anySocial =
              member.social?.twitter ||
              member.social?.farcaster ||
              member.social?.telegram ||
              member.social?.github
            return (
              <div className="flex" key={member.name}>
                <img
                  src={member.avatar_url}
                  alt={`${member.name} avatar`}
                  className="w-10 h-10 rounded-full"
                />
                <div className="ml-3 flex-1">
                  <div className="flex items-center font-semibold">
                    <span className="dark:text-white">{member.name}</span>
                    {anySocial && (
                      <div className="flex-1 flex items-center justify-end gap-1.5">
                        {member.social.twitter && (
                          <a href={member.social.twitter} target="_blank">
                            <XTwitterIcon className="h-3 w-3 text-neutral-400 dark:text-dusk-700 transition duration-300 hover:text-black dark:hover:text-dusk-200" />
                          </a>
                        )}
                        {member.social.farcaster && (
                          <a href={member.social.farcaster} target="_blank">
                            <FarcasterIcon className="h-2.5 w-2.5 text-neutral-400 dark:text-dusk-700 transition duration-300 hover:text-black dark:hover:text-dusk-200" />
                          </a>
                        )}
                        {member.social.telegram && (
                          <a href={member.social.telegram} target="_blank">
                            <TelegramIcon className="h-3 w-3 text-neutral-400 dark:text-dusk-700 transition duration-300 hover:text-black dark:hover:text-dusk-200" />
                          </a>
                        )}
                        {member.social.github && (
                          <a href={member.social.github} target="_blank">
                            <GithubIcon className="h-3 w-3 text-neutral-400 dark:text-dusk-700 transition duration-300 hover:text-black dark:hover:text-dusk-200" />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                  <div className="text-sm dark:text-dusk-500">
                    {member.role}, <span>{member.location}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </main>

      <Footer />
      <RequestAuditSticky formId={process.env.TYPEFORM_FORM_ID!} />
    </div>
  )
}
