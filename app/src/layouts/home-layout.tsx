import React from "react";
import ButtonComponent from "../components/button-component";
import NavBarComponent from "../components/navbar-component";
import PreviewLinksComponent from "../components/preview-links-component";
import { Link } from "../redux/reducers/links-reducers";
import { NavLink } from "react-router-dom";

export default function HomeLayout() {
    return (
        <div className="container-home-layout">
            <NavBarComponent />
            {/* <h1>Home</h1> */}
            <div className="content">
                <div className="container-preview" >
                    <ProfileDefault />
                    <div className="boarding">
                        <h2>
                            Connect, Share, and Stand Out
                        </h2>
                        <p>Create your profile, share your links, and stand out among others</p>
                        <NavLink to="/register">
                            <ButtonComponent disabled={false} label="Try now 🚀" type="default" />
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

const ProfileDefault = () => {
    const image = "https://static.vecteezy.com/system/resources/thumbnails/020/765/399/small/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg"
    const name = "John"
    const lastname = "Doe"
    const username = "john.doe@mail.io"
    const links: Link[] = [
        {
            type: "linkedin",
            url: "https://www.linkedin.com"
        },
        {
            type: "github",
            url: "https://www.github.com"
        },
        {
            type: "gitlab",
            url: "https://www.gitlab.com"
        },
        {
            type: "stackoverflow",
            url: "https://www.stackoverflow.com"
        },
        {
            type: "twitch",
            url: "https://www.twitch.com"
        }
    ]
    return (
        <svg style={{ zoom: .8 }} width="308" height="632" viewBox="0 0 308 632" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 54.5C1 24.9528 24.9528 1 54.5 1H253.5C283.047 1 307 24.9528 307 54.5V577.5C307 607.047 283.047 631 253.5 631H54.5C24.9528 631 1 607.047 1 577.5V54.5Z" stroke="#737373" />
            <path d="M12 55.5C12 30.9233 31.9233 11 56.5 11H80.5C86.8513 11 92 16.1487 92 22.5C92 30.5081 98.4919 37 106.5 37H201.5C209.508 37 216 30.5081 216 22.5C216 16.1487 221.149 11 227.5 11H251.5C276.077 11 296 30.9233 296 55.5V576.5C296 601.077 276.077 621 251.5 621H56.5C31.9233 621 12 601.077 12 576.5V55.5Z" fill="white" stroke="#737373" />
            <defs>
                <clipPath id="circle">
                    <circle cx="153.5" cy="112" r="48" />
                </clipPath>
            </defs>
            <Image href={image} />
            <Name name={name} lastname={lastname} />
            <Email username={username} />
            <rect
                x="30"
                y="245"
                width="247"
                height="1"
                rx="4"
                fill="#EEEEEE"
            />
            <Links links={links} />
            <defs>
                <clipPath id="clip0_26_969">
                    <rect width="16" height="16" fill="white" transform="translate(51 292)" />
                </clipPath>
            </defs>
        </svg>
    )
};

const Image = ({ href }: { href?: string }) => href ?
    <image
        href={href}
        width="96"
        height="96"
        x="105.5"
        y="64"
        clipPath="url(#circle)"
    />
    : <circle
        cx="153.5"
        cy="112"
        r="48"
        fill="#EEEEEE"
    />;

const Name = ({ name, lastname }: { name: string, lastname: string }) => {
    const fullName = name || lastname ? name.concat(" ", lastname) : "";
    React.useEffect(() => { }, [name, lastname])
    return (
        fullName ?
            <text
                x="153.5"
                y="195"
                textAnchor="middle"
                fontSize="18"
                fontFamily="Instrument Sans"
                fontWeight={600}
                fill="#333"
            >
                {fullName}
            </text>
            : <rect
                x="73.5"
                y="185"
                width="160"
                height="16"
                rx="8"
                fill="#EEEEEE"
            />
    );
}

const Email = ({ username }: { username?: string }) => username ?
    <text
        x="153.5"
        y="230"
        textAnchor="middle"
        fontSize="16"
        fontFamily="Instrument Sans"
        fontWeight={400}
        fill="#333"
    >
        {username}
    </text>
    : <rect
        x="117.5"
        y="214"
        width="72"
        height="8"
        rx="4"
        fill="#EEEEEE"
    />

const POSITION = [
    {
        x: "35",
        y: "268"
    },
    {
        x: "35",
        y: "332"
    },
    {
        x: "35",
        y: "396"
    },
    {
        x: "35",
        y: "460"
    },
    {
        x: "35",
        y: "524"
    }
]

const Links = ({ links }: { links: Link[] }) => {
   React.useEffect(() => { }, [links])
    return (
        <>
            {links.map(({ type, url }, index) => (
                <PreviewLinksComponent type={type} url={url} key={type} {...POSITION[index]} />
            ))}
        </>
    )
}