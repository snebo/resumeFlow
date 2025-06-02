# ResumeFlow

A simple resume builder built with Next.js that lets you create professional resumes without the formatting headaches.

## Features

- **Real-time preview** - See your resume update as you type
- **Clean templates** - Professional designs that actually look good
- **Easy form interface** - Just fill out the fields, no complex editing
- **PDF export** - Download when you're done

## Getting Started

```bash
git clone https://github.com/snebo/resumeflow.git
cd resumeflow
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Tech Stack

- Next.js 14
- React
- Tailwind CSS
- TypeScript

## Project Structure

```
app/
├── builder/          # Main resume builder
├── about/           # About page
├── components/      # Reusable components
└── page.tsx        # Landing page
```

## Why I Built This

I got tired of fighting with Word templates and broken formatting every time I needed to update my resume. Figured there had to be a better way - turns out there wasn't, so I built one.

The idea is simple: fill out a form, watch your resume build in real-time, download it when you're happy. No design skills required.

## Roadmap

- [ ] More template options
- [ ] AI content suggestions
- [ ] Job-specific optimization
- [ ] Better mobile experience

## Contributing

Found a bug or have an idea? Open an issue or submit a PR. This is a side project but I'm always open to improvements.

## License

MIT - feel free to use this for whatever you want.
