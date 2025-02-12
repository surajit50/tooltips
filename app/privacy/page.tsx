
export default function PrivacyPage() {
  return (
    <div className="container py-8">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Privacy Policy</h1>
        <div className="prose dark:prose-invert">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2>Information We Collect</h2>
          <p>We do not collect any personal information. All file processing is done in your browser.</p>
          
          <h2>How We Use Your Information</h2>
          <p>Since we don't collect personal information, we don't use it in any way.</p>
          
          <h2>Data Security</h2>
          <p>Your files and data are processed locally in your browser and are never uploaded to our servers.</p>
          
          <h2>Third-Party Services</h2>
          <p>We use basic analytics to improve our service but do not share any personal information.</p>
          
          <h2>Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us.</p>
        </div>
      </div>
    </div>
  )
}
