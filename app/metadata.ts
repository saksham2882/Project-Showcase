import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Saksham Agrahari | Projects Showcase",
    description: "Explore my collection of web development projects, featuring modern technologies and best practices.",
    keywords: ["Saksham Agrahari", "full-stack developer", "frontend developer", "backend developer", "web developer", "React developer", "portfolio", "MongoDB", "Node.js", "MERN stack", "portfolio", "web development projects", "responsive design", "JavaScript", "Tailwind CSS", "portfolio", "projects", "web development", "React", "Next.js", "TypeScript"],
    authors: [{ name: "Saksham Agrahari", url: "https://saksham-agrahari.vercel.app" }],
    creator: "Saksham Agrahari",
    publisher: "Saksham Agrahari",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-snippet": -1,
            "max-image-preview": "large",
            "max-video-preview": -1,
        },
    },
    alternates: {
        canonical: "https://saksham-agrahari.vercel.app",
    },
    openGraph: {
        title: "Saksham Agrahari | Projects Showcase",
        description: "Explore my collection of projects",
        url: "https://saksham-agrahari.vercel.app",
        siteName: "Saksham Agrahari Projects Showcase",
        images: [
            {
                url: "/banner.png",
                width: 1200,
                height: 630,
                alt: "Saksham Agrahari Projects Preview",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    icons: {
        icon: [
            { url: "/favicon.ico", type: "image/x-icon" },
            { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
            { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
        ],
        apple: [
            { url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" },
        ],
    },
}