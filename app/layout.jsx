import './globals.css'

export const metadata = {
  title: 'Industry Insights India',
  description: 'Independent technical articles on insulation, EV technology, BMS, robotics, semiconductor components and autonomous power systems.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
