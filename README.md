Creating a blog with nextjs and sanity

Initialize Nextjs13 app
```bash
npx create-next-app@latest
```
Make a directory sanity-studio at root 
```bash
mkdir sanity-studio
cd sanity-studio
npm create sanity@latest
```
Once done run 
```bash
npm run dev
```
Now navigate at http://localhost:3333
and login to your sanity studio

We can host our sanity seperately I will recommend to host sanity with nextjs itself with the help of next-sanity toolkit
run this command at the the root
```bash
npm install sanity next-sanity
```
this will install sanity and next-sanity 
copy schema and sanity.config.ts folder in root from sanity studio

In sanity.config.ts add basePath where you wanna see the sanity studio
add
```
basePath:"/studio"
```
Now when you visit at http://localhost:3000/studio
you will see sanity studio over there.

sanity.config.ts breakdown
name: workspace name,
title: project title,
projectId: unique ID of sanity project,
dataset: name of dataset, common names: "production" or "development",
basePath: path where sanity studio will appear,
schema: Object where schema file will be defined,


create studio route
app/
---studio/
----[[...index]]/
-----page.tsx

// app/studio/[[...index]]/page.tsx

"use client";

import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";

export default function Studio() {
  return <NextStudio config={config} />;
}

```bash
npm run dev
```

localhost:3000/studio

Creating Schemas

example schema for portfolio website:
profile: name, about, skills...
project: schema for the projects,
work: for work experience,

Make profile schema:
```bash
touch schemas/profile.ts // this will make profile.ts file inside schemas directory
```
import { defineField } from "sanity";
import { BiUser } from "react-icons/bi";

const profile = {
  name: "profile",
  title: "Profile",
  type: "document",
  icon: BiUser,
  fields: [
  // Normal text
  defineField({
      name: "fullName",
      title: "Full Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    
    // Image
      {
      name: "profileImage",
      title: "Profile Image",
      type: "image",
      description: "Upload a profile picture",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    
    {
      name: "fullBio",
      title: "Full Bio",
      type: "array",
      of: [{ type: "block" }],
    },
    
    {
      name: "resumeURL",
      title: "Upload Resume",
      type: "file",
    },
  ]
};
// name,title,type are required property in each schema
by referencing with name key we query the document 
title: title in sanity studio

export default profile;

defineField() helper function enable auto-completion of fiel types in schema file

schema types:
number, datetime, image, array, object, string, url

import all of the schema inside the schema/index.ts then export 
// schemas/index.ts

import profile from "./profile";

export const schemaTypes = [profile];

Query data using GROQ(Graph-Relational Object Queries)

At root create sanity/sanity.client.ts by running
```bash
mkdir sanity & touch sanity/sanity.client.ts
```
import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "ga8lllhf",
  dataset: "production",
  apiVersion: "2023-07-16",
  useCdn: false,
};

const client = createClient(config);

export default client;

useCdn: use to disable edge cases

run
```bash
touch sanity/sanity.query.ts
```

import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getProfile() {
  return client.fetch(
    groq`*[_type == "profile"]{
      _id,
      fullName,
      headline,
      profileImage {alt, "image": asset->url},
      shortBio,
      location,
      fullBio,
      email,
      "resumeURL": resumeURL.asset->url,
      socialLinks,
      skills
    }`
  );
}

groq query breakdown
starts with * means select every document
[]: Put filters inside square brackets
Here _type is equal to the "profile" is the filter
after [] the {} means what we want like fullName, headline stuff -> This is called projections

Learn here: https://www.sanity.io/docs/how-queries-work


Add the profile types 
import { PortableTextBlock } from "sanity";
// PortableTextBlock is the data type of rich text editor
export type ProfileType = {
  _id: string,
  fullName: string,
  headline: string,
  profileImage: {
    alt: string,
    image: string
  },
  shortBio: string,
  email: string,
  fullBio: PortableTextBlock[],
  location: string,
  resumeURL: string,
  socialLinks: string[],
  skills: string[],
};

import { PortableText } from "@portabletext/react";
to display rich text


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

