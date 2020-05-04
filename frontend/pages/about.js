import Head from "next/head";
import Link from "next/link";
import style from "../utils/style";

const About = () => {
  return (
    <>
      <Head>
        <title>About SailPan — SailPan</title>
      </Head>
      <div className="details">
        <Link href="/">
          <img src="/img/icon-back.png" width="36" height="36" alt="Back" />
        </Link>
        <h1>About SailPan</h1>
      </div>
      <p>
        <strong>
          Passagemaking was challenging before the global pandemic.
        </strong>{" "}
        Now, liveaboard sailors and ocean voyagers are contending with new
        uncertainties, as the communities around the ports and anchorages
        mariners rely on decide how to protect themselves from COVID-19. While
        these are real new challenges, rumors often paint an even bleaker
        picture than the reality, and the facts we need to plan our passages are
        often buried several posts deep in a hard to find comment thread,
        relayed quickly on a radio net, or mentioned in passing on the docks.
      </p>

      <p>
        <strong>That's where SailPan can help.</strong> SailPan provides sailors
        with a daily digest of reported changes to critical ports, anchorages,
        channels, and towns in the region. Reports come in from officials,
        marinas, and boats. Whenever possible, sources are shown to give you a
        way to follow up. All tracked locations are shown on the map. Pins are
        colored to show our best understanding of the status of each location.
        You can click on any location to see an archive of reports related to
        that place.
      </p>

      <p>
        <strong>
          What you won't find on SailPan is opinion or conversation.
        </strong>{" "}
        Sailors need the scuttlebutt now more than ever, but there are already
        dozens of amazing communities out there, and we'd rather send you to
        them. For many reports, you'll find links to the communities where that
        news is being discussed, and we encourage you to participate in the
        conversations there.
      </p>

      <h2>REGIONS</h2>
      <p>
        <strong>SailPan divides the world into regions.</strong> Right now,
        there's only one region on the site, covering Pacific Mexico, the Gulf
        of California, and popular adjacent destinations. This isn't a technical
        limitation — the site is designed to acommodate dozens of regions. We're
        looking for more editors who are interested in managing SailPan reports
        in their region. If that's you,{" "}
        <a href="mailto:editors@sailpan.info" target="_blank">
          please get in touch.
        </a>
      </p>

      <h2>CONTRIBUTING</h2>
      <p>
        <strong>SailPan thrives on your reports.</strong> Send reports to{" "}
        <a href="mailto:report@sailpan.info" target="_blank">
          report@sailpan.info
        </a>{" "}
        with as much information as possible, including the name, latitude, and
        longitude of the location you are reporting about, the name of your boat
        or organization, and a link to your website if you have one. If didn't
        experience what you are reporting first hand, please also include your
        sources.
      </p>
      <p>
        Developers can also contribute to the site's codebase. SailPan is open
        source and hosted on{" "}
        <a href="https://github.com/jameshome/sailpan/" target="_blank">
          GitHub
        </a>
        , where you can also{" "}
        <a
          href="https://github.com/jameshome/sailpan/issues/new"
          target="_blank"
        >
          report bugs and make feature requests.
        </a>{" "}
      </p>

      <h2>STAFF</h2>
      <p>
        <strong>
          SailPan was created by{" "}
          <a href="https://jameshome.com" target="_blank">
            James Home,
          </a>
        </strong>{" "}
        aboard{" "}
        <a href="https://gettingfr.ee/rejoice/" target="_blank">
          SV Rejoice.
        </a>
      </p>
      <style jsx>
        {`
          div {
            display: flex;
            align-items: baseline;
            margin: 36px 18px 18px 0;
          }

          h1 {
            font: ${style.font.title};
            margin: 6px 6px 6px 0;
          }

          h2 {
            padding-top: 12px;
            border-top: 1px solid ${style.color.blue_25};
            text-align: center;
            font: ${style.font.heading};
            text-transform: uppercase;
          }

          p {
            margin: 6px 18px;
            font-size: ${style.font.body};
          }

          img {
            cursor: pointer;
            align-self: center;
            margin: 0 12px;
          }
        `}
      </style>
    </>
  );
};
export default About;
