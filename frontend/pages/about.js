import Link from "next/link";
import Meta from "../components/meta";
import style from "../utils/style";

const About = () => {
  return (
    <>
      <Meta
        title="About Sailpan"
        url="https://sailpan.info/about"
        description="Pandemic-related port & passage reports"
      />
      <div className="details">
        <Link href="/">
          <img src="/img/icon-back.png" width="36" height="36" alt="Back" />
        </Link>
        <h1>How SailPan Works</h1>
      </div>
      <p>
        <b>Passagemaking was challenging before the global pandemic.</b> Now we
        sailors are contending with new uncertainties as the ports and
        anchorages we rely on make hard decisions about how to best protect
        their communities from COVID-19. The facts we need to plan our passages
        are often buried several posts deep in comment threads on social
        networks, relayed quickly on a radio net, or mentioned in passing on the
        docks, making it hard to separate rumor from reality.
      </p>
      <p>
        <b>
          SailPan makes things easier for the passagemaking sailor by providing
          a regularly updated map and digest of reports covering changes to
          important locations.
        </b>
      </p>
      <h2>REPORTS</h2>
      <p>Each report is categorized by where it came from:</p>
      <p
        className="withicon"
        style={{ backgroundImage: "url(../img/icon-report-boatreport.png)" }}
      >
        BOAT REPORT
        <br />
        Boat Reports come in from boats at sea. These first hand reports often
        bring the most timely information available. We receive some of these
        directly, and find others on regional social networks and message
        boards.
      </p>
      <p
        className="withicon"
        style={{
          backgroundImage: "url(../img/icon-report-localknowledge.png)",
        }}
      >
        LOCAL KNOWLEDGE
        <br />
        Similar to Boat Reports, these come in from local land-based regional
        experts who are engaged with the sailing community.
      </p>
      <p
        className="withicon"
        style={{
          backgroundImage: "url(../img/icon-report-officialnotice.png)",
        }}
      >
        OFFICIAL NOTICE
        <br />
        Usually issued by a government agency, Official Notices often report
        major changes to multiple locations in the region.
      </p>
      <p
        className="withicon"
        style={{
          backgroundImage: "url(../img/icon-report-marinaannouncement.png)",
        }}
      >
        MARINA ANNOUNCEMENT
        <br />
        Marina Announcements are made by marina harbormasters and can cover port
        status, availability, price changes, and openings and closures.
      </p>
      <p>
        Below each report, you'll find a list of specific sources which link to
        more information or to the communities where the report is being
        discussed. You won't find opinion or conversation on SailPan, and we
        encourage you to follow these links to join in the discussion.
      </p>
      <h2>LOCATIONS</h2>
      <p>
        Reports cover one or more locations. A location might be a port,
        anchorage, marina, state, city or town. The pin for each location is
        colored to show our understanding of its current status:
      </p>
      <p
        className="withicon"
        style={{ backgroundImage: "url(../img/icon-pin-open.png)" }}
      >
        OPEN
        <br />
        Business as usual or nearly so
      </p>
      <p
        className="withicon"
        style={{ backgroundImage: "url(../img/icon-pin-limited.png)" }}
      >
        LIMITED
        <br />
        Some restrictions reported
      </p>
      <p
        className="withicon"
        style={{ backgroundImage: "url(../img/icon-pin-closed.png)" }}
      >
        CLOSED
        <br />
        Major restrictions or closures reported
      </p>
      <p
        className="withicon"
        style={{ backgroundImage: "url(../img/icon-pin-uncertain.png)" }}
      >
        UNCERTAIN
        <br />
        Conflicting or confusing information reported
      </p>

      <p
        className="withicon"
        style={{ backgroundImage: "url(../img/icon-pin-unknown.png)" }}
      >
        UNKNOWN
        <br />
        No information reported
      </p>

      <h2>REPORTERS</h2>
      <p>
        <b>
          The extraordinary people who share their understanding with us every
          day
        </b>
        , usually as volunteers, are the fabric of the sailing community.
        SailPan couldn't exist without their work. In the Pacific Mexico & Gulf
        of California region, we'd like to specifically thank:
      </p>

      <p className="withindent">
        <b>
          <a
            href="https://www.facebook.com/michaelericdanielson"
            target="_blank"
          >
            Mike Danielson
          </a>
        </b>
        <br />
        Mike is head honcho of{" "}
        <a href="https://pvsailing.com" target="_blank">
          PV Sailing
        </a>
        , the 22 year old institution at the heart of the sailing community in
        Puerto Vallarta.
      </p>

      <p className="withindent">
        <b>
          <a href="https://www.facebook.com/jasonhite" target="_blank">
            Jason Hite
          </a>
        </b>
        <br />
        Jason moderates the{" "}
        <a
          href="https://www.facebook.com/groups/277885329386179"
          target="_blank"
        >
          Sea of Cortez Sailors
        </a>{" "}
        Facebook group, which has over 1,500 members.
      </p>

      <p className="withindent">
        <b>
          <a
            href="https://www.facebook.com/profile.php?id=1560251751"
            target="_blank"
          >
            John Ryan
          </a>
        </b>
        <br />
        John moderates the{" "}
        <a
          href="https://www.facebook.com/groups/534377540362437/"
          target="_blank"
        >
          Banderas Bay Cruisers
        </a>{" "}
        Facebook group, which has over 500 members.
      </p>

      <p className="withindent">
        <b>
          <a href="https://www.facebook.com/SVThirdDay" target="_blank">
            Richard Boren
          </a>
        </b>
        <br />
        Rich operates{" "}
        <a href="http://lapazcruiserssupply.com/" target="_blank">
          La Paz Cruisers Supply
        </a>{" "}
        and is a ubiquitous and informed presence in cruiser groups.
      </p>

      <p className="withindent">
        <b>
          <a href="https://www.facebook.com/svtotem" target="_blank">
            Behan Gifford
          </a>
        </b>
        <br />
        Behan has advised thousands of cruisers from the{" "}
        <a href="http://sailingtotem.com/" target="_blank">
          Sailing Totem
        </a>{" "}
        blog, as well as{" "}
        <a href="http://cruisingworld.com/" target="_blank">
          Cruising World
        </a>{" "}
        and{" "}
        <a href="http://goodoldboat.com/" target="_blank">
          Good Old Boat
        </a>
        .
      </p>

      <p className="withindent">
        <b>
          <a href="https://brucebalan.com/migrations/" target="_blank">
            Bruce & Alene
          </a>
        </b>
        <br />
        Bruce & Alene have voyaged aboard SV Migration for 13 years, and have
        made a{" "}
        <a href="https://brucebalan.com/migrations/for-sailors" target="_blank">
          wealth of resources
        </a>{" "}
        available to the community.
      </p>

      <p>
        Thanks to all of you for your service, and for helping make SailPan
        better with your ideas.
      </p>

      <h2>REGIONS</h2>
      <p>
        <b>SailPan divides the world into regions.</b> Right now, there's only
        one region on the site, covering Pacific Mexico, the Gulf of California,
        and popular adjacent destinations. This isn't a technical limitation —
        the site is designed to accommodate every region in the world. We're
        looking for talented volunteer editors who are interested in managing
        SailPan reports in their region. If that's you,{" "}
        <a href="mailto:editors@sailpan.info" target="_blank">
          please get in touch.
        </a>
      </p>
      <h2>CONTRIBUTING</h2>
      <p>
        <b>SailPan thrives on your reports.</b> Send reports to{" "}
        <a href="mailto:report@sailpan.info" target="_blank">
          report@sailpan.info
        </a>{" "}
        with as much information as possible, including the name, latitude, and
        longitude of the location you are reporting about, the name of your boat
        or organization, and a link to your website if you have one. If you
        didn't experience what you are reporting first hand, please also include
        your sources.
      </p>
      <p>
        Developers can contribute to the site's codebase. SailPan is open source
        and can be forked on{" "}
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
        <b>
          SailPan was created by{" "}
          <a href="https://jameshome.com" target="_blank">
            James Home,
          </a>
        </b>{" "}
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
            font: ${style.font.heading_1};
            text-transform: uppercase;
          }

          p {
            margin: 6px 18px;
            font: ${style.font.body};
            color: ${style.color.black};
          }

          .withicon,
          .withindent {
            margin: 12px 18px;
            padding-left: 60px;
            color: ${style.color.blue};
          }

          .withicon {
            background: 12px 0px / 36px no-repeat;
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
